import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  /**
   * Index page
   * @returns
   */
  @Get()
  index() {
    return {
      message: `NestJs API - Please read our documentation for more info: ${process.env.APP_URL}/api/documentation`,
    };
  }
}
