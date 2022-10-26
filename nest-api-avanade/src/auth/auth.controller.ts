import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async validaLogin(@Body() req) {
    const { login, password } = req;

    if (!login) {
      throw new HttpException('Login não informado!', HttpStatus.FORBIDDEN);
    }
    console.log('No Controller - login', login);
    console.log('No Controller - senha', password);
    return this.authService.validaLogin(login, password);
  }
}
