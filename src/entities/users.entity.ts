import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Schedule } from './schedules.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45 })
    email: string;

    @Column({ default: false })
    admin: boolean;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string | null;

    @OneToMany(() => Schedule, (schedules) => schedules.user)
    schedule: Schedule[];
}