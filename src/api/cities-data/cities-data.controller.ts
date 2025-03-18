import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CitiesDataService } from './cities-data.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CitiesData } from './entities/cities-data.entity';
import { StoreAnswerDto } from './dto/store-answer.dto';

@ApiTags('Questions')
@Controller('api/v1/questions')
@UsePipes(ValidationPipe)
export class CitiesDataController {
  constructor(private readonly citiesDataService: CitiesDataService) {}

  /**
   * Get random 10 questions
   * @returns
   */
  @Get('/:userId')
  @ApiOperation({
    summary: 'Get random 10 questions',
  })
  @ApiParam({ name: 'userId', type: 'number', example: 2, required: true })
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @HttpCode(HttpStatus.OK)
  async getRandomQuestions(
    @Param('userId') userId?: number,
    @Query('limit') limit?: number,
  ) {
    const questions = await this.citiesDataService.getRandomQuestions(
      userId,
      limit,
    );

    return {
      statusCode: HttpStatus.OK,
      message: 'Success',
      data: questions,
    };
  }

  /**
   * Store Question answer of user
   * @returns
   */
  @Post('/store-answer')
  @ApiOperation({
    summary: 'Store answer of question',
  })
  @HttpCode(HttpStatus.OK)
  async StoreAnswerofQuestion(@Body() storeAnswerDto: StoreAnswerDto) {
    const questions = await this.citiesDataService.StoreAnswerofQuestion(
      storeAnswerDto,
    );

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Answer stored successfully',
    };
  }
}
