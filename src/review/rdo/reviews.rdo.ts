import { PaginationRdo } from 'src/utils/rdo/pagination.rdo';
import { ReviewRdo } from './review.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class ReviewsRdo extends PaginationRdo {
  @ApiProperty({ title: 'Reviews list', example: [ReviewsRdo] })
  @ValidateNested()
  @Type(() => ReviewRdo)
  @IsArray()
  @Expose()
  reviews: ReviewRdo[];
}
