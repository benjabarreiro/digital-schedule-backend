import { Test, TestingModule } from '@nestjs/testing';
import { UserBusinessRolesController } from './user-business-roles.controller';
import { UserBusinessRolesService } from './user-business-roles.service';

describe('UserBusinessRolesController', () => {
  let controller: UserBusinessRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBusinessRolesController],
      providers: [UserBusinessRolesService],
    }).compile();

    controller = module.get<UserBusinessRolesController>(UserBusinessRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
