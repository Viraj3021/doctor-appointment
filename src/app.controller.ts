import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api') 
  getApiInfo(): string {
    return 'Welcome to the Doctor Booking API. Use /api for Swagger documentation.ss';
  }

  @Get() 
  getHello(): string {
    return this.appService.getHello();
  }
}
