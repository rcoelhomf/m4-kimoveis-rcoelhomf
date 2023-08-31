import { z } from 'zod'
import { createUserSchema, updateUserSchema, userLoginSchema, userReturnSchema } from '../schemas/users.schema'
import { DeepPartial, Repository } from 'typeorm'
import { User } from '../entities'

export type UserCreate = z.infer<typeof createUserSchema>
type UserBodyUpdate = Omit<UserCreate, 'admin'>
export type UserUpdate = DeepPartial<UserBodyUpdate>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = { token: string }

export type UserRepo = Repository<User>