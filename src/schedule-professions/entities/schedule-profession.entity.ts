import { CommonEntity } from '../../entities/common.entity';
import { Profession } from '../../professions/entities/profession.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedule_professions')
export class ScheduleProfession extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profession, (profession) => profession.scheduleProfessions)
  @JoinColumn({ name: 'profession_id' })
  profession: Profession;

  @ManyToOne(() => Schedule, (schedule) => schedule.scheduleProfessions)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
}
