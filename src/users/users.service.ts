import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserHealthInsurance } from 'src/user-health-insurances/entities/user-health-insurance.entity';
import { HealthInsurance } from 'src/health-insurances/entities/health-insurance.entity';

@Injectable()
export class UsersService {
  private userRepository: Repository<User>;
  private healthInsuranceRepository: Repository<HealthInsurance>;
  private userHealthInsuranceRepository: Repository<UserHealthInsurance>;
  constructor(private readonly connection: Connection) {
    this.userRepository = this.connection.getRepository(User);
    this.userHealthInsuranceRepository =
      this.connection.getRepository(UserHealthInsurance);
    this.healthInsuranceRepository =
      this.connection.getRepository(HealthInsurance);
  }
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create({
        email: createUserDto.email,
        password: createUserDto.password,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      });

      await this.userRepository.save(user);

      if (createUserDto.healthInsurances?.length) {
        const healthInsurances = await this.healthInsuranceRepository.findByIds(
          createUserDto.healthInsurances,
        );

        const userHealthInsurances = healthInsurances.map((hi) =>
          this.userHealthInsuranceRepository.create({
            user,
            healthInsurance: hi,
            createdAt: new Date(),
          }),
        );

        await this.userHealthInsuranceRepository.save(userHealthInsurances);

        return 'user created correctly';
      }
    } catch (err) {
      throw err;
    }
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
