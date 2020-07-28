import { Controller, Post, HttpException, HttpStatus, Logger, Body, Get, UseGuards, Req } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user-dto';
import { UserService } from './Services/userService';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@Controller('users')
export class UsersController {

    constructor(private userService: UserService){}

    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto) {
            try{
                let data = this.userService.registerUser(registerUserDto);
                Logger.log(data);
        return data;
            }catch(Exception){
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