import { Test, TestingModule } from '@nestjs/testing';
import { UserBusinessRolesService } from './user-business-roles.service';

describe('UserBusinessRolesService', () => {
  let service: UserBusinessRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBusinessRolesService],
    }).compile();

    service = module.get<UserBusinessRolesService>(UserBusinessRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
