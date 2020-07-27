import { Connection, Repository } from 'typeorm'
import { Users } from './users.entity'

export const usersProviders = [
  {
    provide: 'UsersRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Users),
    inject: ['DbConnectionToken'],
  },
]
