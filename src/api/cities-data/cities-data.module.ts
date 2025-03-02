import { Module } from '@nestjs/common';
import { CitiesDataService } from './cities-data.service';
import { CitiesDataController } from './cities-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesData } from './entities/cities-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitiesData])],
  controllers: [CitiesDataController],
  providers: [CitiesDataService],
  exports: [CitiesDataService],
})
export class CitiesDataModule {}
