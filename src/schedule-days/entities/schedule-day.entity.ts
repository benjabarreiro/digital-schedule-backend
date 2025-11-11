import { AppointmentDuration } from '../../appointment-durations/entities/appointment-duration.entity';
import { CommonEntity } from '../../entities/common.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
import { Weekday } from '../../weekdays/entities/weekday.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('schedule_days')
export class ScheduleDay extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'shift_start' })
  shiftStart: string;

  @Column({ name: 'shift_end' })
  shiftEnd: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @ManyToOne(() => AppointmentDuration)
  @JoinColumn({ name: 'appointment_duration_id' })
  appointmentDuration: AppointmentDuration;

  @ManyToOne(() => Weekday)
  @JoinColumn({ name: 'weekday_id' })
  weekday: Weekday;

  @ManyToOne(() => Schedule)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
}
