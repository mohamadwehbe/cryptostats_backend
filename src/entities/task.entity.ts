import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../tasks/task-status.enum';
import { User } from './user.entity';

@Entity('Tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;
  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  user: User;
}
