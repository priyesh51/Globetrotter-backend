import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, Matches, Max, Min } from 'class-validator';

export class StoreAnswerDto {
  @ApiProperty({ example: 1, required: true })
  @IsNotEmpty()
  citiesDataId: number;

  @ApiProperty({ example: 1, required: true })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  isCorrect: boolean;

  // @ApiProperty({ example: 2, required: true })
  // @IsNotEmpty()
  // @Min(0)
  // @Max(10)
  // score: number;

  // @ApiProperty({
  //   example: 'http://localhost:3000/invite?username=uniqueuser',
  //   required: true,
  // })
  // @IsNotEmpty()
  // link: string;
}
