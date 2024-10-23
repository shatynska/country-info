import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CountryBriefInfoDto } from './dto/country-brief-info.dto';

@Injectable()
export class CountriesService {
  constructor(private readonly configService: ConfigService) {}

  async getAll(): Promise<CountryBriefInfoDto[]> {
    const fetchCountriesData = async () => {
      try {
        const url =
          this.configService.get('DATE_NAGER_API_BASE_URL') +
          'AvailableCountries';

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch counties data');
        }
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    };

    const countries = await fetchCountriesData();

    return countries;
  }
}
