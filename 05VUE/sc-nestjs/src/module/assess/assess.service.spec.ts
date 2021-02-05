import { Test, TestingModule } from '@nestjs/testing';
import { AssessService } from './assess.service';

describe('AssessService', () => {
  let service: AssessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssessService],
    }).compile();

    service = module.get<AssessService>(AssessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
