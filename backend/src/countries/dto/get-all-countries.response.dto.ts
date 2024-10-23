import { CountryBriefInfoDto } from './country-brief-info.dto';

export class GetAllCountriesResponseDto {
  countries: CountryBriefInfoDto[];

  constructor(countries: GetAllCountriesResponseDto) {
    Object.assign(this, countries);
  }
}
