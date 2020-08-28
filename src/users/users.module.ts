import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { usersProviders } from './users.providers'

import { UsersController } from './userInfo/users.controller'
import { UsersService } from './userInfo/users.service'

import { LoginController } from './login/login.controller'
import { LoginService } from './login/login.service'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, LoginController],
  providers: [...usersProviders, UsersService, LoginService],
})
export class UsersModule {}
