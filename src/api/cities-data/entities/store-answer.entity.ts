import { Exclude, Expose, Transform } from 'class-transformer';
import { dateToTimestamp } from 'src/common/helper/common.helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CitiesData } from './cities-data.entity';
import { User } from 'src/api/users/entities/user.entity';

@Entity()
export class StoreCityAnswer {
  @Expose()
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  @Transform(({ value }) => Number(value))
  id: number;

  @ManyToOne(() => CitiesData, (citiesData) => citiesData.id)
  @Expose()
  citiesData: CitiesData;

  @ManyToOne(() => User, (user) => user.id)
  @Expose()
  user: User;

  @Column({ type: 'bool' })
  @Expose()
  isCorrect: Boolean;

  @CreateDateColumn()
  @Expose()
  @Transform(({ value }) => dateToTimestamp(value))
  createdAt!: Date;

  @UpdateDateColumn()
  @Exclude()
  updatedAt!: Date;
}
