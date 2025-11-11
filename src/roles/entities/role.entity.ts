import { CommonEntity } from '../../entities/common.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
