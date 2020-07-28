import { CreatePatientDTO } from './dto/patient.dto';
import { Controller, Get, Post , Put, Delete, Res, HttpStatus, Body, NotFoundException, Param, Query } from '@nestjs/common';
import {PatientService } from './patient.service';


@Controller('patient')
export class PatientController {

    constructor(private patientService: PatientService){}

    
    // Add Patient: /patient/create
    @Post('/create')
    async createPost(@Res() res, @Body() createPatientDTO : CreatePatientDTO) { //Metemos el Body para que coja los datos desde el cliente
        // console.log(createPatientDTO);
        const patient =await this.patientService.createPatient(createPatientDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Received',
            patient: patient                 
        });
    }

    // Get Patients /patient
    @Get('/')
    async getPatients(@Res() res) {
        const patient = await this.patientService.getPatients();
        return res.status(HttpStatus.OK).json(patient);
    }

     // GET single patient: /patient/5c9d46100e2e5c44c444b2d
    @Get('/:patientID')
    async getPatient(@Res() res, @Param('patientID') patientID) {
        const patient = await this.patientService.getPatient(patientID);
        if (!patient) throw new NotFoundException('Patient does not exist!');
        return res.status(HttpStatus.OK).json(patient);
    }

    // Delete Patient: /delete?patientID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deletePatient(@Res() res, @Query('patientID') patientID) {
        const patientDeleted = await this.patientService.deletePatient(patientID);
        if (!patientDeleted) throw new NotFoundException('Patient does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Patient Deleted Successfully',
            patientDeleted
        });
    }

  // Update Patient: /update?patientID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updatePatient(@Res() res, @Body() createPatientDTO: CreatePatientDTO, @Query('patientID') patientID) {
        const updatedPatient = await this.patientService.updatePatient(patientID, createPatientDTO);
        if (!updatedPatient) throw new NotFoundException('Patient does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Patient Updated Successfully',
            updatedPatient 
        });
    }
    

}
