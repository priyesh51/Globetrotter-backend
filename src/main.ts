import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { setDataSource } from 'typeorm-extension';
import dataSource from './database/data-source';
import expressBasicAuth from 'express-basic-auth';
import session from 'express-session';
import { readFileSync } from 'fs';
import morgan from 'morgan';
import { AllExceptionsFilter } from './common/all-exceptions.filter';

async function bootstrap() {
  // SSL certificate path
  const isSecure = process.env.IS_SECURE === 'true';
  let httpsOptions: { key: Buffer; cert: Buffer; ca: Buffer[] };

  if (isSecure) {
    const certBasePath = process.env.SSL_CERT_BASE_PATH;
    httpsOptions = {
      key: readFileSync(`${certBasePath}/privkey.pem`),
      cert: readFileSync(`${certBasePath}/cert.pem`),
      ca: [
        readFileSync(`${certBasePath}/cert.pem`),
        readFileSync(`${certBasePath}/fullchain.pem`),
      ],
    };
  }

  const app = isSecure
    ? await NestFactory.create<NestExpressApplication>(AppModule, {
        httpsOptions,
      })
    : await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  if (process.env.ENVIRONMENT !== 'production') {
    /**
     * Swagger Documentation
     */
    app.use(
      ['/api/documentation'],
      expressBasicAuth({
        challenge: true,
        users: {
          Globetrotter: '#$Globetrotter:&$00',
        },
      }),
    );

    const config = new DocumentBuilder()
      .setTitle(configService.get<string>('APP_NAME') || 'NestJs')
      .setDescription(
        `APIs for ${
          configService.get<string>('APP_NAME') || 'NestJs'
        } native app.`,
      )
      .addServer(process.env.APP_URL)
      .setVersion(process.env.API_VERSION)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/documentation', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', 'src/views'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const allowedOrigins = process.env.CORS_DOMAINS || '';

  const allowedOriginsArray = allowedOrigins
    .split(',')
    .map((item) => item.trim());

  app.enableCors({
    origin: allowedOriginsArray,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true,
  });

  // Session
  app.use(
    session({
      secret: configService.get('APP_KEY'),
      resave: false,
      saveUninitialized: true,
    }),
  );

  await dataSource.initialize();
  setDataSource(dataSource);

  app.use(morgan('dev'));

  await app.listen(configService.get('PORT', 3000), () => {
    console.log(`Application started on: ${configService.get('APP_URL')}`);
  });
}
bootstrap();
