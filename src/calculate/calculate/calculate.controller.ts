import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { CalculateService } from './calculate.service';
import { CalculateDto } from './dto/calculate.dto';

@Controller('calculate')
@UsePipes(new ValidationPipe())
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Post()
  calculate(@Body() createCalculateDto: CalculateDto, @Res() response) {
    try {
      response
        .status(200)
        .send(this.calculateService.calculate(createCalculateDto));
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
