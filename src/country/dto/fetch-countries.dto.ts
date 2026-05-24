import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/utils/dto/pagination.dto';

export class FetchCountriesDto extends PaginationDto {
  @ApiPropertyOptional({ title: 'Search', example: 'Russian Federation' })
  @IsOptional()
  @IsString()
  search?: string;
}
