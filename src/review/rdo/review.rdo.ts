import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class ReviewRdo {
  @ApiProperty({ title: 'ID', example: 1 })
  @IsInt()
  @Expose()
  id: number;

  @ApiProperty({ title: 'Fullname', example: 'Danil Bashirov' })
  @IsString()
  @Expose()
  fullName: string;

  @ApiProperty({ title: 'Rating', example: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  @Expose()
  rating: number;

  @ApiProperty({ title: 'Country ID', example: 1 })
  @IsInt()
  @Expose()
  countryId: number;

  @ApiProperty({ title: 'Text', example: '@flofeyka is a great developer!' })
  @IsString()
  @Expose()
  text: string;
}
