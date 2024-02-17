import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CasesModule } from './cases/cases.module';
import { CommonModule } from './common/common.module';
import config from './config';
import { OrganizationsModule } from './organizations/organizations.module';
import { PlansModule } from './plans/plans.module';
import { RunsModule } from './runs/runs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    OrganizationsModule,
    UsersModule,
    CasesModule,
    RunsModule,
    PlansModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('configService.get("database")', configService.get('database'));
        return {
          type: 'postgres',
          port: 3306,
          ...configService.get('database'),
          autoLoadEntities: true,
        } as TypeOrmModuleOptions;
      },
    }),
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
