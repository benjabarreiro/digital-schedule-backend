import { CommonEntity } from '../../entities/common.entity';
import { ScheduleDay } from '../../schedule-days/entities/schedule-day.entity';
import { ScheduleHealthInsurance } from '../../schedule-health-insurances/entities/schedule-health-insurance.entity';
import { ScheduleProfession } from '../../schedule-professions/entities/schedule-profession.entity';
import { UserBusinessRole } from '../../user-business-roles/entities/user-business-role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schedules')
export class Schedule extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  email: string;

  @Column({ name: 'country_area_code', nullable: true })
  countryAreaCode: string;

  @Column({ name: 'area_code', nullable: true })
  areaCode: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => ScheduleDay, (scheduleDays) => scheduleDays.schedule)
  scheduleDays: ScheduleDay[];

  @ManyToOne(() => UserBusinessRole, (userBusiness) => userBusiness.schedules)
  @JoinColumn({ name: 'user_business_role_id' })
  userBusiness: UserBusinessRole;

  @OneToMany(
    () => ScheduleProfession,
    (scheduleProfession) => scheduleProfession.schedule,
  )
  scheduleProfessions: ScheduleProfession[];

  @OneToMany(
    () => ScheduleHealthInsurance,
    (scheduleHealthInsurance) => scheduleHealthInsurance.schedule,
  )
  healthInsurances: ScheduleHealthInsurance[];
}
