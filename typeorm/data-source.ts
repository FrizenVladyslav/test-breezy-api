import 'reflect-metadata';

import { config as dotenvConfig } from 'dotenv';
import { DataSource } from 'typeorm';

import config from '../src/config';

dotenvConfig({ path: '.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  ...config().database,
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['typeorm/migrations/*.ts'],
  subscribers: [],
});
