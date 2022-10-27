import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUser';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
