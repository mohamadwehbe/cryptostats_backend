import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from '../entities/status.entity';
import { StatusRepository } from '../repositories/status.repository';

@Injectable()
export class StatusesService {
    constructor(
        @InjectRepository(StatusRepository)
        private expenseRepository: StatusRepository,
    ) { }
    async getStatuses(): Promise<Status[]> {
        return this.expenseRepository.getStatuses();
    }
}
