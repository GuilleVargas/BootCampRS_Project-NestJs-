
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PatientModule, 
    ProfesionalModule, 
    MongooseModule.forRoot('mongodb://localhost/proyectoRS', {
    useNewUrlParser: true  //Esto en mi versión no hace falta ponerlo, pero hay versiones anteriores en las que si, sino da error
  }), 
  UsersModule,
  AuthModule

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
