import { CommonEntity } from '../../entities/common.entity';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { UserBusinessRole } from '../../user-business-roles/entities/user-business-role.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('businesses')
export class Business extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  email: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({ name: 'area_country_code', nullable: true })
  areaCountryCode: string;

  @Column({ name: 'area_code', nullable: true })
  areaCode: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ name: 'street_name' })
  streetName: string;

  @Column({ name: 'street_number' })
  streetNumber: string;

  @Column({ name: 'appartment_number' })
  appartmentNumber: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column({ nullable: true })
  country: string;

  @ManyToOne(() => Subscription)
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;

  @OneToMany(() => UserBusinessRole, (userRoles) => userRoles.business)
  userRoles: UserBusinessRole[];
}
