import { CommonEntity } from '../../entities/common.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('weekdays')
export class Weekday extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
