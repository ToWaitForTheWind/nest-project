import { Injectable, Inject, HttpException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from '../users.entity'

@Injectable()
export class LoginService {
  constructor(
    @Inject('UsersRepositoryToken')
    private usersRepository: Repository<Users>,
  ) {}

  async toLogin(accountInfo: Users): Promise<any> {
    const res = await this.usersRepository.findOne({
      account: accountInfo.account,
    })
    if (!res) {
      throw new HttpException('账号不存在', 404)
    }
    if (res.password === accountInfo.password) {
      return { code: '00000', message: '登录成功' }
    } else return { code: '00000', message: '账号密码错误' }
  }
}
