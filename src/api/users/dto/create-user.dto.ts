import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, Matches, Max, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'uniqueuser', required: true })
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_-]{3,20}$/, { message: 'username not valid' })
  username: string;

  @ApiProperty({ example: 2, required: true })
  @IsNotEmpty()
  @Min(0)
  @Max(10)
  score: number;

  @ApiProperty({
    example: 'http://localhost:3000/invite?username=uniqueuser',
    required: true,
  })
  @IsNotEmpty()
  link: string;
}
