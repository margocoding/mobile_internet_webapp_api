import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max } from 'class-validator';

export class PaginationDto {
  @ApiProperty({ title: 'Page number', example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  page: number = 1;

  @ApiProperty({ title: 'Page size', example: 15 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Max(100)
  limit: number = 10;
}
