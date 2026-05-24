import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReviewService } from './review.service';
import { PaginationDto } from 'src/utils/dto/pagination.dto';
import { ReviewsRdo } from './rdo/reviews.rdo';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRdo } from './rdo/review.rdo';

@ApiTags('Reviews')
@Controller('/review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  fetchReviews(@Query() dto: PaginationDto): Promise<ReviewsRdo> {
    return this.reviewService.fetchReviews(dto);
  }

  @Post()
  createReview(@Query() dto: CreateReviewDto): Promise<ReviewRdo> {
    return this.reviewService.createReview(dto);
  }
}
