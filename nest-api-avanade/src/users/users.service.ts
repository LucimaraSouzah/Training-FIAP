import { PrismaService } from './../prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { EmailService } from '../email/email.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  // FindUnique é um método do Prisma que retorna um único registro, que contém a constraint unique
  // FindFirst é um método do Prisma que retorna o primeiro registro que satisfaz a condição

  async getUserById(id: string): Promise<users> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async verifyUserExists(email: string): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });
    return user ? true : false;
  }

  async crypto(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async createUser(data): Promise<users> {
    const { name, email, password } = data;

    const checkUser = await this.verifyUserExists(email);

    if (!checkUser) {
      const user = await this.prisma.users.create({
        data: {
          name,
          email,
          password: await this.crypto(password),
        },
      });

      if (
        await this.emailService.sendEmail(
          email,
          'Bem vindo ao sistema',
          'Seja muito bem vindo',
          {},
        )
      ) {
        console.log('Email, enviado com sucesso!');
      }

      if (!user) {
        throw new Error('Erro ao criar usuário');
      }
      return user;
    } else {
      throw new HttpException('Usuário já cadastrado', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<users[]> {
    return this.prisma.users.findMany();
  }

  async findOne(id: string): Promise<users> {
    return this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async update(id: string, req) {
    const user = await this.getUserById(id);

    const { name, email, password } = req;

    if (email) {
      const checkEmail = await this.prisma.users.findMany({
        where: {
          AND: [{ email: email }, { id: { not: Number(id) } }],
        },
      });

      if (checkEmail.length > 0) {
        throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST);
      }
    }

    const updatedUser = await this.prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? await this.crypto(password) : user.password,
      },
    });

    if (!updatedUser) {
      throw new HttpException(
        'Erro ao atualizar usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { msg: `Usuário ${updatedUser.name} atualizado com sucesso!` };
  }

  async delete(id: string) {
    const user = await this.getUserById(id);

    const deletedUser = await this.prisma.users.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedUser) {
      throw new HttpException(
        'Erro ao deletar usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { msg: `Usuário ${user.name} deletado com sucesso!` };
  }
}
