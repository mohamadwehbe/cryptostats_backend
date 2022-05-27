import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @ApiProperty({ required: true })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
