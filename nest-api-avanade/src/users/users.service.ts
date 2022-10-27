import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    async createUser(req): Promise<string> {
        return 'Usuário criado com sucesso!';
    }

    async findAll(): Promise<string> {
        return 'Lista de usuários';
    }

    async findOne(id: string): Promise<string> {
        return `Usuário ${id}`;
    }

    async update(id: string, req): Promise<string> {
        return `Usuário ${id} atualizado com sucesso!`;
    }

    async delete(id: string): Promise<string> {
        return `Usuário ${id} deletado com sucesso!`;
    }
}
