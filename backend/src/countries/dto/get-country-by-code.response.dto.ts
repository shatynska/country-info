import { CountryExtendedInfoDto } from './country-extended-info.dto';

export class GetCountryByCodeResponseDto extends CountryExtendedInfoDto {
  constructor(country: GetCountryByCodeResponseDto) {
    super();
    Object.assign(this, country);
  }
}
