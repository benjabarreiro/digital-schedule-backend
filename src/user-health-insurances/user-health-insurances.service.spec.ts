import { Test, TestingModule } from '@nestjs/testing';
import { UserHealthInsurancesService } from './user-health-insurances.service';

describe('UserHealthInsurancesService', () => {
  let service: UserHealthInsurancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHealthInsurancesService],
    }).compile();

    service = module.get<UserHealthInsurancesService>(UserHealthInsurancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
