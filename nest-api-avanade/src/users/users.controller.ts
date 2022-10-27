import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser';
import { UpdateUserDTO } from './dto/updateUser';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // criar
  @Post()
  async createUser(@Body() req: CreateUserDTO): Promise<string> {
    return this.usersService.createUser(req);
  }

  // listar todos
  @Get()
  async findAll(): Promise<string> {
    return this.usersService.findAll();
  }

  // listar um
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    return this.usersService.findOne(id);
  }

  // atualizar
    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateUserDTO): Promise<string> {
        return this.usersService.update(id, req);
    }

  // deletar
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string> {
        return this.usersService.delete(id);
    }
}
