import { UserService } from 'src/users/Services/userService';
import { Injectable, NotFoundException, Logger, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';
import *  as  bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from '../dto/payload.dto';

@Injectable()
export class AuthService {

 constructor(private userService: UserService, private jwtService:JwtService){};

 async login(loginUserDto: LoginUserDto){
     let result = await this.userService.findByEmail(loginUserDto.email);
     if(!result) throw new NotFoundException();
     Logger.log("password"+result.password);
     let checkPass = await bcrypt.compare(loginUserDto.password, result.password);
    if(! checkPass) throw new UnauthorizedException();
    
    return this.createJwtPayload(result);
    
 }


 createJwtPayload(user){
     let data = {
            email : user.email,
            id: user._id
     }
     let jwt = this.jwtService.sign(data);
     return {
         expiresIn: 3600,
         token:jwt
     }
 }

 async validateUserByJwt(payload: JwtPayLoad){
    Logger.log("Entra en validateUserByJWT");
   let user = await this.userService.findByEmail(payload.email);
   if(user) return this.createJwtPayload(user);
    throw new UnauthorizedException();
}

}

