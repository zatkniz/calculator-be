import { Controller, Post, Body } from '@nestjs/common';
import { CalculateService } from './calculate.service';
import { CreateCalculateDto } from './dto/create-calculate.dto';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Post()
  create(@Body() createCalculateDto: CreateCalculateDto) {
    return this.calculateService.create(createCalculateDto);
  }
}
