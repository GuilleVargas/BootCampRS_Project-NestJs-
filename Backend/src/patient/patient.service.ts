import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './interfaces/patient.interface';
import { CreatePatientDTO } from './dto/patient.dto';

@Injectable()
export class PatientService {

    constructor(@InjectModel('Patient') private patientModel: Model<Patient>){}

async getPatients(): Promise<Patient[]>{
   const patients = await this.patientModel.find({});
    return patients;
}

async getPatient(patientID: string): Promise<Patient>{
     const patient = await this.patientModel.findById(patientID);
     if(!patient) throw new NotFoundException();
     return patient;
}

async createPatient(createPatientDTO: CreatePatientDTO): Promise<Patient>{
 const patient =  new this.patientModel(createPatientDTO);
 return await patient.save();
}

async deletePatient(patientID: string): Promise<Patient>{
const deletePatient = await this.patientModel.findByIdAndDelete(patientID);
return deletePatient;
}

async updatePatient(patientID: string, createPatientDTO: CreatePatientDTO): Promise<Patient>{
const updatePatient = await this.patientModel.findByIdAndUpdate(patientID, createPatientDTO, {new: true});
return updatePatient;
}




}
