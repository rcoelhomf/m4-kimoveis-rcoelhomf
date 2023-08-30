import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './users.entity'
import { RealEstate } from './realEstates.entity'

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'time' })
    hour: string;

    @ManyToOne(() => RealEstate, (realStates) => realStates.schedule)
    realEstate: RealEstate;
    
    @ManyToOne(() => User, (users) => users.schedule)
    user: User;
}