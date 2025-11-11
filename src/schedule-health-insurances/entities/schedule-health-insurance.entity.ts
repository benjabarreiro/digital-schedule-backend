import { HealthInsurance } from '../../health-insurances/entities/health-insurance.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedule_health_insurances')
export class ScheduleHealthInsurance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Schedule, (schedule) => schedule.healthInsurances, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;

  @ManyToOne(
    () => HealthInsurance,
    (healthInsurance) => healthInsurance.schedules,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'health_insurance_id' })
  healthInsurance: HealthInsurance;
}
