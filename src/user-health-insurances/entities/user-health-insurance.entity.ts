import { CommonEntity } from '../../entities/common.entity';
import { HealthInsurance } from '../../health-insurances/entities/health-insurance.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_health_insurances')
export class UserHealthInsurance extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.healthInsurances, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => HealthInsurance,
    (healthInsurance) => healthInsurance.users,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'health_insurance_id' })
  healthInsurance: HealthInsurance;
}
