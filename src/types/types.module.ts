import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { TypeRepository } from '../repositories/type.repository';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeRepository]), AuthModule],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule { }
