import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';

@ApiTags('countries')
@Controller()
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAll() {
    return await this.countriesService.getAll();
  }
}
