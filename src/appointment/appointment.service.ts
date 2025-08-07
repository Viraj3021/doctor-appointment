import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
@Injectable()
export class AppointmentService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateAppointmentDto) {
        const { doctorId, startTime, endTime } = dto;


        const conflict = await this.prisma.appointment.findFirst({
            where: {
                doctorId,
                OR: [
                    {
                        startTime: {
                            lte: new Date(endTime),
                        },
                        endTime: {
                            gte: new Date(startTime),
                        },
                    }
                ]
            }
        });
        if (conflict) {
            throw new BadRequestException('Slot already booked choose another timezone please');
        }
        
        return this.prisma.appointment.create({
            data: dto,
        });
}

}
