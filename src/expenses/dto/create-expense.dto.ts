import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({required: true})
  name: string;

  @ApiProperty({required: true})
  amount: number;
}