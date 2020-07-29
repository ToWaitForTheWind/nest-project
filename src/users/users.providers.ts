import { Connection } from 'typeorm'
import { Users } from './users.entity'

export const usersProviders = [
  {
    provide: 'UsersRepositoryToken',
    useFactory: async (connection: Connection): Promise<any> =>
      connection.getRepository(Users),
    inject: ['DbConnectionToken'],
  },
]
