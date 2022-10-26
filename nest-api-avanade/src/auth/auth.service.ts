import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validaLogin(login: string, password: string) {
    console.log('No Service - login', login);
    console.log('No Service - senha', password);
    return { login, password, msg: 'Dados cadastrados com sucesso!' };
  }
}
