import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesData } from './entities/cities-data.entity';
import { TOTAL_FETCHED_COUNT } from 'src/common/constants';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CitiesDataService {
  constructor(
    @InjectRepository(CitiesData)
    private readonly citiesDataRepository: Repository<CitiesData>,
  ) {}

  /**
   * Get random 10 questions
   * @returns
   */
  async getRandomQuestions(limit?: number) {
    const citiesData = await this.citiesDataRepository
      .createQueryBuilder('cd')
      .orderBy('RAND()')
      .limit(TOTAL_FETCHED_COUNT)
      .getMany();

    const getRandomElements = (arr: CitiesData[], num: number) => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Function to shuffle cities and get 4 options (1 correct, 3 incorrect)
    const shuffleCities = (correctAnswer: CitiesData) => {
      const incorrectCities = citiesData.filter(
        (city) => city !== correctAnswer,
      );
      const randomIncorrectCities = getRandomElements(incorrectCities, 3);

      return [correctAnswer, ...randomIncorrectCities].sort(
        () => Math.random() - 0.5,
      );
    };

    // Generate 10 questions
    const questions = Array.from({ length: limit > 0 ? limit : 10 }, () => {
      const correctCity: CitiesData =
        citiesData[Math.floor(Math.random() * citiesData.length)];

      return {
        allCities: plainToInstance(CitiesData, shuffleCities(correctCity), {
          enableImplicitConversion: true,
          excludeExtraneousValues: true,
        }),
        correctCity: plainToInstance(CitiesData, correctCity, {
          enableImplicitConversion: true,
          excludeExtraneousValues: true,
        }),
      };
    });

    return questions;
  }
}
