import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Statuses')
export class Status{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string
}