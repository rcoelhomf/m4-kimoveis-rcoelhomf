import { RealEstate, User } from '../entities'
import { AppError } from '../errors'
import { CreateSchedule } from '../interfaces/schedules.interfaces'
import { realEstateRepo, scheduleRepo, userRepo } from '../repositories'

export const createNewSchedule = async (body: CreateSchedule, userId: number): Promise<void> => {
    const newDate = new Date(body.date).getDay()
    if((newDate === 0) || (newDate === 6)) throw new AppError('Invalid date, work days are monday to friday', 400)
    const time = Number(body.hour.split(':')[0])
    if((time < 8) || (time > 18)) throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)

    const realEstate: RealEstate | null = await realEstateRepo.findOneBy({ id: body.realEstateId })
    const user: User | null = await userRepo.findOneBy({ id: userId })
    await scheduleRepo.save({ ...body, realEstate: realEstate!, user: user! })
}

export const listAllSchedulesRealEstate = async (id: number): Promise<any> => { 
    const realEstate = await realEstateRepo.findOne({ where: { id: id }, relations: { schedules: { user: true }, address: true, category: true } })

    if(!realEstate) throw new AppError('RealEstate not found', 404)

    return realEstate
}