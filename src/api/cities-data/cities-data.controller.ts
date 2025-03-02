import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CitiesDataService } from './cities-data.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CitiesData } from './entities/cities-data.entity';

@ApiTags('Questions')
@Controller('api/v1/questions')
@UsePipes(ValidationPipe)
export class CitiesDataController {
  constructor(private readonly citiesDataService: CitiesDataService) {}

  /**
   * Get random 10 questions
   * @returns
   */
  @Get()
  @ApiOperation({
    summary: 'Get random 10 questions',
  })
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @HttpCode(HttpStatus.OK)
  async getRandomQuestions(@Query('limit') limit?: number) {
    const questions = await this.citiesDataService.getRandomQuestions(limit);

    return {
      statusCode: HttpStatus.OK,
      message: 'Success',
      data: questions,
    };
  }
}
