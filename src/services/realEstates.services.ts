import { RealEstate } from '../entities'
import { CreateRealEstate } from '../interfaces/realEstates.interfaces'
import { addressRepo, categoryRepo, realEstateRepo } from '../repositories'

export const createRealState = async (body: CreateRealEstate): Promise<RealEstate> => {
    const category = await categoryRepo.findOneBy({ id: body.categoryId })
    const address = await addressRepo.save(body.address)
    const realEstate = await realEstateRepo.save({ ...body, address: address, category: category! })

    return realEstate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
}

export const listAllRealEstates = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({ relations: { address: true } }) 
}