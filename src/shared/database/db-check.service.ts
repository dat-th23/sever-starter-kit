import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DBCheckService {
  constructor(private dataSource: DataSource) {}

  async testConnection(): Promise<{
    message: string;
    time?: string;
    error?: string;
  }> {
    try {
      const result = await this.dataSource.query('SELECT NOW()');
      return {
        message: 'Database connected successfully!',
        time: result[0].now,
      };
    } catch (error) {
      return {
        message: 'Database connection failed!!!',
        error: error.message,
      };
    }
  }
}
