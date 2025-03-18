import { Module } from '@nestjs/common';
import { CitiesDataService } from './cities-data.service';
import { CitiesDataController } from './cities-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesData } from './entities/cities-data.entity';
import { StoreCityAnswer } from './entities/store-answer.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitiesData, StoreCityAnswer, User])],
  controllers: [CitiesDataController],
  providers: [CitiesDataService],
  exports: [CitiesDataService],
})
export class CitiesDataModule {}
