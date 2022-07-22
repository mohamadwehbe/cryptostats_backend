import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Type } from '../entities/type.entity';
import { TypesService } from './types.service';

@Controller('types')
@ApiTags('Types')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class TypesController {
    private logger = new Logger('Types Controller');
    constructor(private readonly typesService: TypesService) { }
    @Get()
    getTypes(): Promise<Type[]> {
        this.logger.verbose(
            `Retrieving all Types.`,
        );
        return this.typesService.getTypes();
    }
}
