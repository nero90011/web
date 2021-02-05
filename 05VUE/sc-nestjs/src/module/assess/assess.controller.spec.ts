import { Test, TestingModule } from '@nestjs/testing';
import { AssessController } from './assess.controller';

describe('Assess Controller', () => {
  let controller: AssessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssessController],
    }).compile();

    controller = module.get<AssessController>(AssessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
