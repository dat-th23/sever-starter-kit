import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Guys!, This application is running on NestJS with TypeORM and PostgreSQL';
  }
}
