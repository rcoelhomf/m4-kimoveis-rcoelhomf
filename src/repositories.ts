import { AppDataSource } from './data-source'
import { Address, Category, RealEstate, Schedule, User } from './entities'
import { CategoryRepo } from './interfaces/categories.interfaces'
import { AddressRepo, RealEstateRepo } from './interfaces/realEstates.interfaces'
import { ScheduleRepo } from './interfaces/schedules.interfaces'
import { UserRepo } from './interfaces/users.iterfaces'

export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)