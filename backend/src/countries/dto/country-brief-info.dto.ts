import { ApiProperty } from '@nestjs/swagger';

export class CountryBriefInfoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  countryCode: string;
}
