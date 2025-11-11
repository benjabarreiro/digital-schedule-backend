import { CommonEntity } from '../../entities/common.entity';
import { ScheduleHealthInsurance } from '../../schedule-health-insurances/entities/schedule-health-insurance.entity';
import { UserHealthInsurance } from '../../user-health-insurances/entities/user-health-insurance.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('health_insurances')
export class HealthInsurance extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UserHealthInsurance, (user) => user.healthInsurance)
  users: UserHealthInsurance[];

  @OneToMany(
    () => ScheduleHealthInsurance,
    (schedules) => schedules.healthInsurance,
  )
  schedules: ScheduleHealthInsurance[];
}
