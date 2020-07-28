
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Profesional } from './interfaces/profesional.interface';
import { CreateProfesionalDTO } from './dto/profesional.dto';

@Injectable()
export class ProfesionalService {

    constructor(@InjectModel('Profesional') private profesionalModel: Model<Profesional>){}

async getProfesionals(): Promise<Profesional[]>{
   const profesionals = await this.profesionalModel.find()
    return profesionals;
}

async getProfesional(profesionalID: string): Promise<Profesional>{
     const profesional = await this.profesionalModel.findById(profesionalID);
     if(!profesional) throw new NotFoundException();
     return profesional;
}

async createProfesional(createProfesionalDTO: CreateProfesionalDTO): Promise<Profesional>{
 const profesional =  new this.profesionalModel(createProfesionalDTO);
 return await profesional.save();
}

async deleteProfesional(profesionalID: string): Promise<Profesional>{
const deleteProfesional = await this.profesionalModel.findByIdAndDelete(profesionalID);
return deleteProfesional;
}

async updateProfesional(profesionalID: string, createProfesionalDTO: CreateProfesionalDTO): Promise<Profesional>{
const updateProfesional = await this.profesionalModel.findByIdAndUpdate(profesionalID, createProfesionalDTO, {new: true});
return updateProfesional;
}




}