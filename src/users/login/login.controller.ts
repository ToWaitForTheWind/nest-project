import { Controller, Post, Body } from '@nestjs/common'
import { LoginService } from './login.service'
import { Users } from '../users.entity'

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async toLogin(@Body() accountInfo: Users): Promise<any> {
    console.log(accountInfo)
    const res = await this.loginService.toLogin(accountInfo)
    return res
  }
}
