import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PlansService } from 'src/plans/plans.service';
import { UsersService } from 'src/users/users.service';
import axios from 'axios';
import { Connection, Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { OrdersService } from 'src/orders/orders.service';
import { PreApproval, MercadoPagoConfig } from 'mercadopago';

@Injectable()
export class SubscriptionsService {
  private subcriptionsRepository: Repository<Subscription>;
  private readonly mercadopago;
  constructor(
    private readonly plansService: PlansService,
    private readonly usersService: UsersService,
    private readonly ordersService: OrdersService,
    private readonly connection: Connection,
  ) {
    this.subcriptionsRepository = this.connection.getRepository(Subscription);
    this.mercadopago = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN || '',
    });
  }

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    try {
      const { planId, userId } = createSubscriptionDto;

      const plan = await this.plansService.findOne(planId);

      if (!plan) {
        throw new HttpException('Plan does not exist', HttpStatus.BAD_REQUEST);
      }

      const user = await this.usersService.findOne(userId);

      if (!user) {
        throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
      }

      const { data: subscription }: any = await axios.post(
        'https://api.mercadopago.com/preapproval',
        {
          back_url: 'https://www.mercadopago.com.ar',
          reason: plan.name,
          auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: plan.price,
            currency_id: plan.currency,
          },
          payer_email: user.email,
          status: 'pending',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const newSubscription = this.subcriptionsRepository.create({
        startDate: new Date(),
        renewalDate: subscription.next_payment_date,
        paymentProcessorSubscriptionId: subscription.id,
        status: 'pending',
        user,
        plan,
      });

      const savedSubscription =
        await this.subcriptionsRepository.save(newSubscription);

      const order = await this.ordersService.create({
        status: 'pending',
        amount: plan.price,
        currency: plan.currency,
        planName: plan.name,
        subscription: savedSubscription,
      });

      return { savedSubscription, order, subscription };
    } catch (err) {
      throw err;
    }
  }

  async webhook(paymentProcessorDto: any) {
    try {
      const {
        data: { id },
      } = paymentProcessorDto;

      const data = await new PreApproval(this.mercadopago).get({
        id,
      });

      const { status, id: externalSubscriptionId, next_payment_date } = data;

      console.log(status, id, externalSubscriptionId);

      if (status === 'authorized') {
        const subscription = await this.subcriptionsRepository.findOneBy({
          paymentProcessorSubscriptionId: externalSubscriptionId,
        });

        if (!subscription) {
          return;
        }

        console.log('paymentProcessorSubscriptionId', externalSubscriptionId);
        console.log('paymentProcessorOrderId', id);
        console.log('data', paymentProcessorDto, data);

        const order = await this.ordersService.findLatestBySubscriptionId(
          subscription.id,
        );

        if (!order) {
          await this.ordersService.create({
            status: 'paid',
            amount: subscription.plan.price,
            currency: subscription.plan.currency,
            planName: subscription.plan.name,
            subscription: subscription,
          });
        } else {
          await this.ordersService.update(order.id, { status: 'paid' });
        }

        await this.subcriptionsRepository.update(subscription?.id, {
          renewalDate: next_payment_date,
          status: 'active',
        });
      } else if (status === 'cancelled') {
        const subscription = await this.subcriptionsRepository.findOneBy({
          paymentProcessorSubscriptionId: externalSubscriptionId,
        });

        if (!subscription) {
          return;
        }

        const endDate = new Date();
        const renewalDate = subscription.renewalDate;

        const status =
          endDate > renewalDate ? 'pending_cancellation' : 'cancelled';

        await this.subcriptionsRepository.update(subscription?.id, {
          status,
          endDate,
        });
      }
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  }

  findAll() {
    return `This action returns all subscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
