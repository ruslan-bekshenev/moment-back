import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  controllers: [UsersController],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
})
export class UsersModule {}
