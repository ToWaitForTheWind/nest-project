import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  name: string

  @Column({ length: 20 })
  account: string

  @Column({ length: 20 })
  password: string

  @Column({ length: 11 })
  phone: string
}
