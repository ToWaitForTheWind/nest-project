import { createConnection } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<any> =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'zoom',
        password: '0515',
        database: 'nest',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
  },
]
