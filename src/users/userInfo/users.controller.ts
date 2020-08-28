import { Controller, Get, Query, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { Users } from '../users.entity'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/getList')
  async getUserById(
    @Query('userId') userId: string | number,
  ): Promise<Users[]> {
    let user: any
    if (!userId) user = await this.usersService.findAll()
    else user = await this.usersService.getUserById(userId)
    return user
  }

  @Post('/saveUser')
  async saveNewUser(@Body() userInfo: Users): Promise<any> {
    console.log(userInfo)
    const user = await this.usersService.saveNewUser(userInfo)
    return user
  }
}
