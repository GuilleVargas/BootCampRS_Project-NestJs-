import { Test, TestingModule } from '@nestjs/testing';
import { ProfesionalController } from './profesional.controller';

describe('Profesional Controller', () => {
  let controller: ProfesionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesionalController],
    }).compile();

    controller = module.get<ProfesionalController>(ProfesionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
