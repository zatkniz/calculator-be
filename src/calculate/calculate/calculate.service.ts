import { Injectable } from '@nestjs/common';
import { CreateCalculateDto } from './dto/create-calculate.dto';
import { UpdateCalculateDto } from './dto/update-calculate.dto';

@Injectable()
export class CalculateService {
  create(createCalculateDto: CreateCalculateDto) {
    return 'This action adds a new calculate';
  }

  findAll() {
    return `This action returns all calculate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calculate`;
  }

  update(id: number, updateCalculateDto: UpdateCalculateDto) {
    return `This action updates a #${id} calculate`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculate`;
  }
}
