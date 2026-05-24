import { Controller, Get, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiTags } from '@nestjs/swagger';
import { FetchCountriesDto } from './dto/fetch-countries.dto';
import { CountriesRdo } from './rdo/countries.rdo';

@ApiTags('Country')
@Controller()
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('/')
  fetchCountries(@Query() data: FetchCountriesDto): Promise<CountriesRdo> {
    return this.countryService.fetchCountries(data);
  }
}
