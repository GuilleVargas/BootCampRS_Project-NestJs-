import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesionalController } from './profesional.controller';
import { ProfesionalService } from './profesional.service';
import { ProfesionalSchema } from './schemas/profesional.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Profesional', schema: ProfesionalSchema}]),
    PassportModule.register({defaultStrategy: 'jwt', session : false})
],
  controllers: [ProfesionalController],
  providers: [ProfesionalService]
})
export class ProfesionalModule {}