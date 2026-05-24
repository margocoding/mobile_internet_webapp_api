import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PaginationRdo {
  @ApiProperty({ title: 'Total items', example: 100 })
  @IsInt()
  @Expose()
  total: number;
}
