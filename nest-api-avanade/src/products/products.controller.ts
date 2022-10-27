import { CreateProductsDTO } from './dto/createProducts';
import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor (private readonly productsService: ProductsService) {}
  // name, price, description, categoryId
  @Post()
  async createProduct(@Body() req: CreateProductsDTO): Promise<string> {
    return this.productsService.createProduct(req);
  }
}
