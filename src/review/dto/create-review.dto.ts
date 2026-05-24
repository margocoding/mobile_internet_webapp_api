import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ title: 'Fullname', example: 'Danil Bashirov' })
  @IsString()
  fullName: string;

  @ApiProperty({ title: 'Rating', example: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ title: 'Country ID', example: 1 })
  @IsInt()
  countryId: number;

  @ApiProperty({ title: 'Text', example: '@flofeyka is a great developer!' })
  @IsString()
  text: string;
}
