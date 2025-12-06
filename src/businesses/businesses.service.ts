import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Connection, Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';

@Injectable()
export class BusinessesService {
  private businessesRepository: Repository<Business>;
  constructor(
    private readonly subscriptionsService: SubscriptionsService,
    private readonly connection: Connection,
  ) {
    this.businessesRepository = this.connection.getRepository(Business);
  }
  async create(createBusinessDto: CreateBusinessDto) {
    try {
      const subscription = await this.subscriptionsService.findOne(
        createBusinessDto.subscription,
      );

      if (!subscription) {
        throw new HttpException(
          "Can't create business without subscription",
          HttpStatus.BAD_REQUEST,
        );
      }

      if (subscription.status !== 'active') {
        throw new HttpException(
          "Can't create business without active subscription",
          HttpStatus.BAD_REQUEST,
        );
      }

      const store = { ...createBusinessDto, isActive: true, subscription };

      const newBusiness = await this.businessesRepository.create(store);
      return await this.businessesRepository.save(newBusiness);
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(subscriptionId: number) {
    try {
      return await this.businessesRepository.find({
        where: { subscription: { id: subscriptionId } },
      });
    } catch (err) {}
  }

  findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
