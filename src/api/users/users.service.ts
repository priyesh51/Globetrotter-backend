import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Create a user
   * @param createUserDto
   * @returns
   */
  async createUser(createUserDto: CreateUserDto) {
    createUserDto.username = createUserDto.username.toLowerCase().trim();

    const user = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });

    if (!user) {
      await this.userRepository.save(
        this.userRepository.create({
          username: createUserDto.username,
          score: createUserDto.score,
          link: createUserDto.link,
        }),
      );
    } else {
      await this.userRepository.update(user.id, {
        score: createUserDto.score,
        link: createUserDto.link,
      });
    }
  }

  /**
   * Get a user by username
   * @param username
   * @returns
   */
  async getUserByUsername(username: string) {
    username = username.toLowerCase().trim();

    const user = await this.userRepository.findOne({
      where: { username: username },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
