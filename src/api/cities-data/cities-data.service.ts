import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CitiesData } from './entities/cities-data.entity';
import { TOTAL_FETCHED_COUNT } from 'src/common/constants';
import { plainToInstance } from 'class-transformer';
import { StoreAnswerDto } from './dto/store-answer.dto';
import { StoreCityAnswer } from './entities/store-answer.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CitiesDataService {
  constructor(
    @InjectRepository(CitiesData)
    private readonly citiesDataRepository: Repository<CitiesData>,
    @InjectRepository(StoreCityAnswer)
    private readonly storeCityAnswerRepository: Repository<StoreCityAnswer>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Get random 10 questions
   * @returns
   */
  async getRandomQuestions(userId: number, limit?: number) {
    const citiesData = await this.citiesDataRepository
      .createQueryBuilder('cd')
      .leftJoinAndMapMany(
        'cd.storeCityAnswer',
        StoreCityAnswer,
        'storeCityAnswer',
        'storeCityAnswer.citiesDataId = cd.id AND storeCityAnswer.userId = :userId',
        { userId: userId },
      )
      .where('storeCityAnswer.id IS NULL')
      .orderBy('RAND()')
      .limit(TOTAL_FETCHED_COUNT)
      .getMany();

    // console.log(
    //   await this.citiesDataRepository
    //     .createQueryBuilder('cd')
    //     .leftJoinAndMapMany(
    //       'cd.storeCityAnswer',
    //       StoreCityAnswer,
    //       'storeCityAnswer',
    //       'storeCityAnswer.citiesDataId = cd.id AND storeCityAnswer.userId = :userId',
    //       { userId: userId },
    //     )
    //     .where('storeCityAnswer.id IS NULL')
    //     .orderBy('RAND()')
    //     .limit(TOTAL_FETCHED_COUNT)
    //     .getQueryAndParameters(),
    // );

    // select * from cities_data left

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

  async StoreAnswerofQuestion(storeAnswerDto: StoreAnswerDto) {
    const user = await this.userRepository.findOne({
      where: { id: storeAnswerDto.userId },
    });
    if (!user) throw new BadRequestException('User not found.');
    const city = await this.citiesDataRepository.findOne({
      where: { id: storeAnswerDto.citiesDataId },
    });
    if (!city) throw new BadRequestException('Question not found.');
    await this.storeCityAnswerRepository.save(
      this.storeCityAnswerRepository.create({
        citiesData: { id: +storeAnswerDto.citiesDataId },
        user: { id: +storeAnswerDto.userId },
        isCorrect: storeAnswerDto.isCorrect,
      }),
    );

    if (storeAnswerDto.isCorrect == true) {
      await this.userRepository.update(user.id, {
        score: user.score + 1,
      });
    }
  }
}
