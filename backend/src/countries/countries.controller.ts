import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';

@ApiTags('countries')
@Controller()
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
}
