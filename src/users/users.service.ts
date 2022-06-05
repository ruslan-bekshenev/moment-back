import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  ) {}

  async getList(): Promise<User[]> {
    const users = await this.userService.find();
    return users;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.userService.create(data);
    return user;
  }
}
