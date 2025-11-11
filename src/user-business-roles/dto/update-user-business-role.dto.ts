import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBusinessRoleDto } from './create-user-business-role.dto';

export class UpdateUserBusinessRoleDto extends PartialType(CreateUserBusinessRoleDto) {}
