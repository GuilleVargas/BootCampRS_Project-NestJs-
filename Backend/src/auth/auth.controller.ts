import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    async login(@Body() loginUserDto:LoginUserDto){
        let result = await this.authService.login(loginUserDto);

        Logger.log("Resultado ->"+ result);
         return result;
    }
}
