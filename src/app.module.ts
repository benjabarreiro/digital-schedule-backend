import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { HealthInsurancesModule } from './health-insurances/health-insurances.module';
import { HealthInsurance } from './health-insurances/entities/health-insurance.entity';
import { PlansModule } from './plans/plans.module';
import { Plan } from './plans/entities/plan.entity';
import { UsersModule } from './users/users.module';
import { UserHealthInsurancesModule } from './user-health-insurances/user-health-insurances.module';
import { UserHealthInsurance } from './user-health-insurances/entities/user-health-insurance.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { BusinessesModule } from './businesses/businesses.module';
import { Business } from './businesses/entities/business.entity';
import { UserBusinessRolesModule } from './user-business-roles/user-business-roles.module';
import { RolesModule } from './roles/roles.module';
import { WeekdaysModule } from './weekdays/weekdays.module';
import { AppointmentDurationsModule } from './appointment-durations/appointment-durations.module';
import { ScheduleDaysModule } from './schedule-days/schedule-days.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ProfessionsModule } from './professions/professions.module';
import { ScheduleProfessionsModule } from './schedule-professions/schedule-professions.module';
import { ScheduleHealthInsurancesModule } from './schedule-health-insurances/schedule-health-insurances.module';
import { AppointmentDuration } from './appointment-durations/entities/appointment-duration.entity';
import { Profession } from './professions/entities/profession.entity';
import { Role } from './roles/entities/role.entity';
import { ScheduleDay } from './schedule-days/entities/schedule-day.entity';
import { ScheduleHealthInsurance } from './schedule-health-insurances/entities/schedule-health-insurance.entity';
import { ScheduleProfession } from './schedule-professions/entities/schedule-profession.entity';
import { Schedule } from './schedules/entities/schedule.entity';
import { UserBusinessRole } from './user-business-roles/entities/user-business-role.entity';
import { Weekday } from './weekdays/entities/weekday.entity';

const Entities = [
  User,
  HealthInsurance,
  Plan,
  UserHealthInsurance,
  Order,
  Subscription,
  Business,
  AppointmentDuration,
  Profession,
  Role,
  ScheduleDay,
  ScheduleHealthInsurance,
  ScheduleProfession,
  Schedule,
  UserBusinessRole,
  Weekday,
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    HealthInsurancesModule,
    PlansModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: Entities,
        synchronize: true,
        //dropSchema: true,
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        migrationsRun: true, // Automatically run migrations on app startup
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(Entities),
    UserHealthInsurancesModule,
    SubscriptionsModule,
    OrdersModule,
    BusinessesModule,
    UserBusinessRolesModule,
    RolesModule,
    WeekdaysModule,
    AppointmentDurationsModule,
    ScheduleDaysModule,
    SchedulesModule,
    ProfessionsModule,
    ScheduleProfessionsModule,
    ScheduleHealthInsurancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
