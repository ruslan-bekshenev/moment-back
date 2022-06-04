import { Get, Inject, Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER')
  )  
}
