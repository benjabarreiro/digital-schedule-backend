import { CommonEntity } from '../../entities/common.entity';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  amount: number;

  @Column()
  currency: string;

  @Column({ name: 'plan_name' })
  planName: string;

  @ManyToOne(() => Subscription)
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription;
}
