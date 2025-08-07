import { Injectable , NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.doctor.findMany();
    }

    findbyId(id: string) { {
        return this.prisma.doctor.findUnique({
            where: {
                id: id,
            
            },
        }).catch((error : any) => {
            throw new NotFoundException('No Doctor found with this id please check out the id!');
        });
    }
}
}
