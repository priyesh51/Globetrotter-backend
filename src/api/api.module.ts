import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { CitiesDataModule } from './cities-data/cities-data.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CitiesDataModule, UsersModule],
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
