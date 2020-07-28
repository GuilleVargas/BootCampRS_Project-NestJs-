import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { UserService } from '../users/Services/userService';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[UsersModule,
    PassportModule.register({defaultStrategy:'jwt', session:false}),
    JwtModule.register({
      secretOrPrivateKey:'estaesmiphrassecreate',
      signOptions:{
        expiresIn: 3600
      }
    })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
