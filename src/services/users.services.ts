import { User } from '../entities'
import { AppError } from '../errors'
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

export const updateUser = async (body: UserUpdate, id: number): Promise<UserReturn> => {
    const user: User | null = await userRepo.findOneBy({ id: id })
    const newUser: User = await userRepo.save({ ...user, ...body })

    return userReturnSchema.parse(newUser)
}

export const eraseUser = async (id: number): Promise<void> => {
    const user: User | null = await userRepo.findOneBy({ id: id })
    if(!user) throw new AppError('User not found', 404)

    await userRepo.softRemove(user)
}