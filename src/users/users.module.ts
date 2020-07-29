import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { usersProviders } from './users.providers'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}