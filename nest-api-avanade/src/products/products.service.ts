import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async createProduct(req): Promise<string> {
        return 'Produto criado com sucesso!';
    }
}
