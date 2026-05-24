import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEnum, IsInt } from 'class-validator';
import { TariffType } from 'generated/prisma/enums';

export class TariffRdo {
  @ApiProperty({ title: 'ID', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ title: 'Price', example: 500 })
  @IsInt()
  @Expose()
  price: number;

  @ApiProperty({ title: 'Type', example: TariffType.FIXED, enum: TariffType })
  @IsEnum(TariffType)
  @Expose()
  type: TariffType;
}
