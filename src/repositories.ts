import { AppDataSource } from './data-source'
import { User } from './entities'
import { UserRepo } from './interfaces/users.iterfaces'

export const userRepo: UserRepo = AppDataSource.getRepository(User)