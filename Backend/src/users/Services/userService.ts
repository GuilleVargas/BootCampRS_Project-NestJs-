import { Injectable, Logger, BadGatewayException, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisterUserDto } from '../dto/register-user-dto';
import { User } from '../interfaces/users.interface';
import   * as  bcrypt  from "bcrypt";

@Injectable()
export class UserService {



    constructor(@InjectModel("User") private userModel: Model<User>){}


    async registerUser(registerUserDto: RegisterUserDto){
        
        const UserCreated =  new this.userModel(registerUserDto);
        const session = await UserCreated.db.startSession();
        
        // try{
        //     session.startTransaction();
             let pass = await bcrypt.hash(registerUserDto.password, 10);
            let result = await this.userModel.create([{"email":registerUserDto.email,"password": pass}],{session: session})    
    //         await session.commitTransaction();
    //     }catch (error){
    //         Logger.error(error);
    //         await session.abortTransaction();
    //         if(error.code === 11000) throw new ConflictException("Usuario duplicado");
    //        throw new BadGatewayException();
    //     }finally{
    //        session.endSession();
    //     }
      }

      async findByEmail(email){
         return this.userModel.findOne({email:email});
      }

     async getAllUsers(){
      return await this.userModel.find();
   }

}
