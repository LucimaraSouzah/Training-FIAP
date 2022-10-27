import { IsNumber, IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateProductsDTO {
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumberString()
  @IsNotEmpty()
  price: string;
}
