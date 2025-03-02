import { Exclude, Expose, Transform } from 'class-transformer';
import { dateToTimestamp } from 'src/common/helper/common.helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CitiesData {
  @Expose()
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  @Transform(({ value }) => Number(value))
  id: number;

  @Expose()
  @Column()
  city: string;

  @Expose()
  @Column()
  country: string;

  @Expose()
  @Column({ type: 'text' })
  @Transform(({ value }) => JSON.parse(value))
  clues: string;

  @Expose()
  @Column({ type: 'text' })
  @Transform(({ value }) => JSON.parse(value))
  fun_fact: string;

  @Expose()
  @Column({ type: 'text' })
  @Transform(({ value }) => JSON.parse(value))
  trivia: string;

  @CreateDateColumn()
  @Expose()
  @Transform(({ value }) => dateToTimestamp(value))
  createdAt!: Date;

  @UpdateDateColumn()
  @Exclude()
  updatedAt!: Date;
}
