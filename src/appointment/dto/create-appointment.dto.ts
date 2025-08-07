import { IsString, IsDateString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  doctorId: string;

  @IsString()
  patientName: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;
}
