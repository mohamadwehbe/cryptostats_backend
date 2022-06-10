import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expense } from './expense.entity';
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
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  expenses: Expense[];
}
