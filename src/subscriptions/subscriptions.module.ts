import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { PlansModule } from 'src/plans/plans.module';
import { UsersModule } from 'src/users/users.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [PlansModule, UsersModule, OrdersModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
