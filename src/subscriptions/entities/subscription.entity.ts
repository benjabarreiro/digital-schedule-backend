import { CommonEntity } from '../../entities/common.entity';
import { Plan } from '../../plans/entities/plan.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('subscriptions')
export class Subscription extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'payment_processor_subscription_id' })
  paymentProcessorSubscriptionId: string;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'end_date', nullable: true, type: 'timestamp' })
  endDate: Date;

  @Column({ name: 'renewal_date', type: 'timestamp', default: null })
  renewalDate: Date;

  @Column()
  status: string;

  @ManyToOne(() => Plan, { eager: true })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
