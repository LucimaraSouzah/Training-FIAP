import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLogin(): string {
    return 'Login';
  }
  getRegister(): string {
    return 'Cadastro';
  }
}
