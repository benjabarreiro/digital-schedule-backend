import { CommonEntity } from '../../entities/common.entity';
import { ScheduleProfession } from '../../schedule-professions/entities/schedule-profession.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professions')
export class Profession extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ScheduleProfession,
    (scheduleProfession) => scheduleProfession.profession,
  )
  scheduleProfessions: ScheduleProfession[];
}
