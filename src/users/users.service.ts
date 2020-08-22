import { Injectable, Inject, HttpException } from '@nestjs/common'
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

  async getUserById(userId: string | number): Promise<any> {
    const id = Number(userId)
    const user = await this.usersRepository.findOne({ id })
    if (!user) {
      throw new HttpException('User does not exist', 404)
    }
    return user
  }

  async saveNewUser(userInfo: Users): Promise<any> {
    delete userInfo.id
    const res = await this.usersRepository.save(userInfo)
    return res
  }
}
