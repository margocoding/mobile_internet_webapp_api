import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRdo } from './rdo/review.rdo';
import { PrismaService } from 'prisma/prisma.service';
import { fillDto } from 'src/utils/fillDto';
import { PaginationDto } from 'src/utils/dto/pagination.dto';
import { ReviewsRdo } from './rdo/reviews.rdo';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(dto: CreateReviewDto): Promise<ReviewRdo> {
    const review = await this.prisma.review.create({ data: dto });

    return fillDto(ReviewRdo, review);
  }

  async fetchReviews({ page, limit }: PaginationDto): Promise<ReviewsRdo> {
    const [reviews, total] = await Promise.all([
      this.prisma.review.findMany({
        take: limit,
        skip: (page - 1) * limit,
        include: {
          country: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      this.prisma.review.count(),
    ]);

    return fillDto(ReviewsRdo, { reviews, total });
  }
}
