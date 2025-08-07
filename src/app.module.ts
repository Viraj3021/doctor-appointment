import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DoctorModule, AppointmentModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService,   PrismaService],
})
export class AppModule {}
