import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
}
