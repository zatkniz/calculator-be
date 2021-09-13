import { IsNotEmpty } from 'class-validator';
export class CalculateDto {
  @IsNotEmpty()
  numberOne: string;

  @IsNotEmpty()
  numberTwo: string;

  @IsNotEmpty()
  operation: string;
}
