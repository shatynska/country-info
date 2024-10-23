import { ApiProperty } from '@nestjs/swagger';
import { CountryBriefInfoDto } from './country-brief-info.dto';

export class CountryExtendedInfoDto extends CountryBriefInfoDto {
  @ApiProperty()
  flagUrl: string;

  @ApiProperty()
  borderCountries: string[];

  @ApiProperty()
  populationCounts: {
    year: number;
    value: number;
  }[];
}
