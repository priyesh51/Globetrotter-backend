import { Controller, Get, Render } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('')
export class ApiController {
  /**
   * API changelogs
   */
  @Get('api/changelogs')
  @ApiExcludeEndpoint()
  @Render('api/change-logs')
  async apiChangeLogs() {
    return null;
  }
}
