import { Subscription } from 'src/subscriptions/entities/subscription.entity';

export class CreateOrderDto {
  status: string;
  amount: number;
  currency: string;
  planName: string;
  subscription: Subscription;
}
