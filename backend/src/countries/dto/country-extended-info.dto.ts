import { CountryBriefInfoDto } from './country-brief-info.dto';

export class CountryExtendedInfoDto extends CountryBriefInfoDto {
  flagUrl: string;
  borderCountries: string[];
  populationCounts: {
    year: number;
    value: number;
  }[];
}
