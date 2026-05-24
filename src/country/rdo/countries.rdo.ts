import { ApiProperty } from '@nestjs/swagger';
import { PaginationRdo } from 'src/utils/rdo/pagination.rdo';
import { CountryRdo } from './country.rdo';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CountriesRdo extends PaginationRdo {
  @ApiProperty({ title: 'Countries list', type: [CountryRdo] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountryRdo)
  countries: CountryRdo[];
}
