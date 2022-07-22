import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { StatusRepository } from '../repositories/status.repository';
import { StatusesController } from './statuses.controller';
import { StatusesService } from './statuses.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatusRepository]), AuthModule],
  controllers: [StatusesController],
  providers: [StatusesService]
})
export class StatusesModule { }
