import { CommonEntity } from '../../entities/common.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointment_durations')
export class AppointmentDuration extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string;
}
