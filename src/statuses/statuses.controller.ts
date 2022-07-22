import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Status } from '../entities/status.entity';
import { StatusesService } from './statuses.service';

@Controller('statuses')
@ApiTags('Statuses')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class StatusesController {
    private logger = new Logger('StatusesController');
    constructor(private readonly statusesService: StatusesService) { }
    @Get()
    getStatuses(): Promise<Status[]> {
        this.logger.verbose(
            `Retrieving all statuses.`,
        );
        return this.statusesService.getStatuses();
    }
}
