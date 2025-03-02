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
export class User {
  @Expose()
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  @Transform(({ value }) => Number(value))
  id: number;

  @Expose()
  @Column({ unique: true })
  username: string;

  @Expose()
  @Column()
  score: number;

  @Expose()
  @Column({ type: 'text' })
  link: string;

  @CreateDateColumn()
  @Expose()
  @Transform(({ value }) => dateToTimestamp(value))
  createdAt!: Date;

  @UpdateDateColumn()
  @Exclude()
  updatedAt!: Date;
}
