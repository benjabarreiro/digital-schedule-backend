import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Connection, IsNull, Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private ordersRepository: Repository<Order>;

  constructor(private readonly connection: Connection) {
    this.ordersRepository = this.connection.getRepository(Order);
  }

  async create(createOrderDto: CreateOrderDto) {
    try {
      const newOrder = this.ordersRepository.create(createOrderDto);
      return await this.ordersRepository.save(newOrder);
    } catch (err) {}
  }

  /* async findByPaymentProcessorId(id: string) {
    return await this.ordersRepository.findOneBy({ paymentProcessorId: id });
  } */

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async findLatestBySubscriptionId(subscriptionId: number) {
    const order = await this.ordersRepository.findOne({
      where: {
        subscription: { id: subscriptionId },
        status: 'pending',
      },
      order: { createdAt: 'DESC' },
    });

    return order;
  }

  async update(orderId: number, updateOrderDto: UpdateOrderDto) {
    return await this.ordersRepository.update(orderId, {
      ...updateOrderDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
