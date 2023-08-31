import { compare } from 'bcryptjs'
import { User } from '../entities'
import { AppError } from '../errors'
import { userRepo } from '../repositories'
import { sign } from 'jsonwebtoken'
import { LoginReturn, UserLogin } from '../interfaces/users.iterfaces'

export const loginUser = async ( body: UserLogin ): Promise<LoginReturn> => {
    const { email } = body
    const user: User | null = await userRepo.findOneBy({ email: email })
    if(!user) {
        throw new AppError('Invalid credentials', 401)
    }
    
    const comaparePassword = await compare(body.password, user.password)
    if(!comaparePassword) {
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = sign(
        { email: user.email, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    )

    return { token }
}