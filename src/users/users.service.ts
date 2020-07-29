import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from './users.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepositoryToken')
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find()
  }
}
