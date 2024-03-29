import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateExpenseDto {
    @ApiProperty({ required: true })
    @IsString()
    name: string;
    @ApiProperty({ required: true })
    @IsNumber()
    amount: number;
    @ApiProperty({ required: true })
    typeId: number;
    @ApiProperty({ required: true })
    statusId: number;
}
