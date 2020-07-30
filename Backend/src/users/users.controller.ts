import { Controller, Post, HttpException, HttpStatus, Logger, Body, Get, UseGuards, Req, ConflictException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user-dto';
import { UserService } from './Services/userService';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { exception } from 'console';


@Controller('users')
export class UsersController {

    constructor(private userService: UserService){}

    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto) {
            Logger.log(registerUserDto);
            try{
                let data = this.userService.registerUser(registerUserDto);
                Logger.log(data);
        return data;
            }catch(Exception){
                if(Exception.code === 11000) throw new ConflictException("Usuario duplicado");
                throw new HttpException("Exception", HttpStatus.CONFLICT);
            }
    }

    @Get()
    @UseGuards(AuthGuard())
    getAllUsers(){
        try{
          return   this.userService.getAllUsers();
        }
        catch(Exception){
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }


    @Get('/guard')
    @UseGuards(AuthGuard())
    getGuarUser(@Req() req: Request){
        Logger.log(JSON.stringify(req['user']));
        return "Entra";
        
    }

}