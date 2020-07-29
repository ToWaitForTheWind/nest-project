import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { Users } from './users.entity'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    const users = await this.usersService.findAll()
    return users
  }
}