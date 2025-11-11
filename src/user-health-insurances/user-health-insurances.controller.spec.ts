import { Test, TestingModule } from '@nestjs/testing';
import { UserHealthInsurancesController } from './user-health-insurances.controller';
import { UserHealthInsurancesService } from './user-health-insurances.service';

describe('UserHealthInsurancesController', () => {
  let controller: UserHealthInsurancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHealthInsurancesController],
      providers: [UserHealthInsurancesService],
    }).compile();

    controller = module.get<UserHealthInsurancesController>(UserHealthInsurancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
