import { Module } from '@nestjs/common';
import { UserBusinessRolesService } from './user-business-roles.service';
import { UserBusinessRolesController } from './user-business-roles.controller';

@Module({
  controllers: [UserBusinessRolesController],
  providers: [UserBusinessRolesService],
})
export class UserBusinessRolesModule {}
