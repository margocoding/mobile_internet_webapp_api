import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { fillDto } from 'src/utils/fillDto';
import { FetchCountriesDto } from './dto/fetch-countries.dto';
import { CountriesRdo } from './rdo/countries.rdo';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchCountries({
    page,
    limit,
    search,
  }: FetchCountriesDto): Promise<CountriesRdo> {
    const where: Prisma.CountryWhereInput = {};

    if (search) {
      where.name = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const [countries, total] = await Promise.all([
      this.prisma.country.findMany({
        where,
        include: {
          tariffs: {
            take: 1,
            orderBy: {
              price: 'desc',
            },
          },
        },
        take: limit,
        skip: (page - 1) * limit,
      }),
      this.prisma.country.count({ where }),
    ]);

    return fillDto(CountriesRdo, { countries, total });
  }
}
