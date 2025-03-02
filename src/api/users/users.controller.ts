import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';

@ApiTags('Users')
@Controller('api/v1/users')
@UsePipes(ValidationPipe)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a user
   * @param createUserDto
   * @returns
   */
  @Post()
  @ApiOperation({
    summary: 'Create a user',
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.usersService.createUser(createUserDto);

    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'Successfully created a user',
    };
  }

  /**
   * Get a user by username
   * @param username
   * @returns
   */
  @Get(':username')
  @ApiOperation({
    summary: 'Get user by username',
  })
  @ApiParam({ name: 'username', required: true })
  @HttpCode(HttpStatus.OK)
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.usersService.getUserByUsername(username);

    return {
      statusCode: HttpStatus.OK,
      message: 'Success',
      data: plainToInstance(User, user, {
        enableImplicitConversion: true,
        excludeExtraneousValues: true,
      }),
    };
  }
}
