import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { CommonEntity } from '../../entities/common.entity';
import { UserBusinessRole } from '../../user-business-roles/entities/user-business-role.entity';
import { UserHealthInsurance } from '../../user-health-insurances/entities/user-health-insurance.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'area_country_code', nullable: true })
  areaCountryCode: string;

  @Column({ name: 'area_code', nullable: true })
  areaCode: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ name: 'street_name', nullable: true })
  streetName: string;

  @Column({ name: 'street_number', nullable: true })
  streetNumber: string;

  @Column({ name: 'appartment_number', nullable: true })
  appartmentNumber: string;

  @Column({ name: 'zip_code', nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  province: string;

  @Column({ nullable: true })
  country: string;

  @OneToMany(
    () => UserHealthInsurance,
    (healthInsurance) => healthInsurance.user,
    { eager: true },
  )
  healthInsurances: UserHealthInsurance[];

  @OneToMany(() => UserBusinessRole, (businessRoles) => businessRoles.user)
  businessRoles: UserBusinessRole[];

  @OneToMany(() => Subscription, (subscriptions) => subscriptions.user, {
    eager: true,
  })
  subscriptions: Subscription[];
}
