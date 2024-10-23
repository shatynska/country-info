import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { GetAllCountriesResponseDto } from './dto/get-all-countries.response.dto';

@ApiTags('countries')
@Controller()
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAll() {
    const countries = await this.countriesService.getAll();

    return new GetAllCountriesResponseDto({ countries });
  }
}
