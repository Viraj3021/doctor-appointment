import { Test, TestingModule } from '@nestjs/testing';
import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorService],
    }).compile();

    service = module.get<DoctorService>(DoctorService);
  });

  it('define 1st please', () => {
    expect(service).toBeDefined();
  });
});
