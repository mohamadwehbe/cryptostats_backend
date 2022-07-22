import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from '../entities/type.entity';
import { TypeRepository } from '../repositories/type.repository';

@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(TypeRepository)
        private expenseRepository: TypeRepository,
    ) { }
    async getTypes(): Promise<Type[]> {
        return this.expenseRepository.getTypes();
    }
}
