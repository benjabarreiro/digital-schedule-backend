import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class PlansService {
  private plansRepository: Repository<Plan>;

  constructor(private readonly connection: Connection) {
    this.plansRepository = this.connection.getRepository(Plan);
  }
  create(createPlanDto: CreatePlanDto) {
    return 'This action adds a new plan';
  }

  async findAll() {
    try {
      return await this.plansRepository.find();
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number) {
    return await this.plansRepository.findOne({ where: { id } });
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
