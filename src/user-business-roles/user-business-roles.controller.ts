import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBusinessRolesService } from './user-business-roles.service';
import { CreateUserBusinessRoleDto } from './dto/create-user-business-role.dto';
import { UpdateUserBusinessRoleDto } from './dto/update-user-business-role.dto';

@Controller('user-business-roles')
export class UserBusinessRolesController {
  constructor(private readonly userBusinessRolesService: UserBusinessRolesService) {}

  @Post()
  create(@Body() createUserBusinessRoleDto: CreateUserBusinessRoleDto) {
    return this.userBusinessRolesService.create(createUserBusinessRoleDto);
  }

  @Get()
  findAll() {
    return this.userBusinessRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBusinessRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBusinessRoleDto: UpdateUserBusinessRoleDto) {
    return this.userBusinessRolesService.update(+id, updateUserBusinessRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBusinessRolesService.remove(+id);
  }
}
