import { NextFunction, Request, Response } from 'express'
import { realEstateRepo, scheduleRepo } from '../repositories'
import { AppError } from '../errors'

export const verifyRealEstateIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { realEstateId } = req.body
    const realEstate = await realEstateRepo.findOne({ where: { id: realEstateId } })

    if(!realEstate) throw new AppError('RealEstate not found', 404)

    return next()
}

export const verifyRealEstateScheduleExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { realEstateId, hour, date } = req.body
    const schedule = await scheduleRepo.findOne({ where: { hour, realEstate: { id: realEstateId }, date } })
    
    if(schedule) throw new AppError('Schedule to this real estate at this date and time already exists', 409)

    return next()
}

export const verifyUserScheduleExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let { sub } = res.locals.decoded
    sub = Number(sub)
    const { hour, date } = req.body
    const schedule = await scheduleRepo.findOne({ where: { hour, user: { id: sub }, date } })
    
    if(schedule) throw new AppError('User schedule to this real estate at this date and time already exists', 409)

    return next()
}