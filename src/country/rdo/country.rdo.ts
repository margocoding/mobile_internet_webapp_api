import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TariffRdo } from 'src/tariff/rdo/tariff.rdo';

export class CountryRdo {
  @ApiProperty({ title: 'ID', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ title: 'Country name', example: 'Russian Federation' })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({ title: 'Country icon', example: '/uploads/icons/russia.svg' })
  @IsOptional()
  @IsString()
  @Expose()
  icon?: string;

  @ApiProperty({ title: 'One tariff with min price' })
  @ValidateNested({ each: true })
  @Type(() => TariffRdo)
  @IsArray()
  tariffs: TariffRdo[];
}
