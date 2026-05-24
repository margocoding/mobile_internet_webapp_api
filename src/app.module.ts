import { Module } from '@nestjs/common';
import { ReviewModule } from './review/review.module';
import { CountryModule } from './country/country.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ReviewModule, CountryModule],
})
export class AppModule {}
