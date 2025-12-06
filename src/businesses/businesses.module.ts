import { Module } from '@nestjs/common';
import { BusinessesService } from './businesses.service';
import { BusinessesController } from './businesses.controller';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';

@Module({
  controllers: [BusinessesController],
  providers: [BusinessesService],
  imports: [SubscriptionsModule],
})
export class BusinessesModule {}
