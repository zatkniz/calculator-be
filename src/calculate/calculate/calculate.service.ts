import { BadRequestException, Injectable } from '@nestjs/common';
import Big from 'big.js';
import { CalculateDto } from './dto/calculate.dto';

@Injectable()
export class CalculateService {
  calculate({ numberOne, numberTwo, operation }: CalculateDto) {
    const firstNumber: Big = Big(numberOne);
    const secondNumber: Big = Big(numberTwo);

    if (operation === '+') {
      return firstNumber.plus(secondNumber).toString();
    }

    if (operation === '-') {
      return firstNumber.minus(secondNumber).toString();
    }

    if (operation === 'x') {
      return firstNumber.times(secondNumber).toString();
    }

    try {
      if (operation === '÷') {
        return firstNumber.div(secondNumber).toString();
      }
    } catch {
      throw new BadRequestException('Undefined');
    }

    try {
      if (operation === '%') {
        return firstNumber.mod(secondNumber).toString();
      }
    } catch {
      throw new BadRequestException('Undefined');
    }

    throw Error(`Unknown operation '${operation}'`);
  }
}
