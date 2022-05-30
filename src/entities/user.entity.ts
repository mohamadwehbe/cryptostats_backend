import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
