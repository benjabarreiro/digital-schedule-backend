import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentDurationsController } from './appointment-durations.controller';
import { AppointmentDurationsService } from './appointment-durations.service';

describe('AppointmentDurationsController', () => {
  let controller: AppointmentDurationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentDurationsController],
      providers: [AppointmentDurationsService],
    }).compile();

    controller = module.get<AppointmentDurationsController>(AppointmentDurationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
