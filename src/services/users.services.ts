import { User } from '../entities'
import { UserCreate, UserReturn, UserUpdate } from '../interfaces/users.iterfaces'
import { userRepo } from '../repositories'
import { userReturnListSchema, userReturnSchema } from '../schemas/users.schema'

export const createNewUser = async (body: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(body)
    await userRepo.save(user)
    
    return userReturnSchema.parse(user)
}

export const listAllUsers = async (): Promise<UserReturn[]> => {
    const users: User[] = await userRepo.find()
    return userReturnListSchema.parse(users)
}

export const updateUser = async (body: UserUpdate, user: User): Promise<UserReturn> => {
    const newUser: User = await userRepo.save({ ...user, ...body })

    return userReturnSchema.parse(newUser)
}

export const eraseUser = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
}