import { CreateProfesionalDTO } from './dto/profesional.dto';
import { Controller, Get, Post , Put, Delete, Res, HttpStatus, Body, NotFoundException, Param, Query, UseGuards } from '@nestjs/common';
import {ProfesionalService } from './profesional.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('profesional')
@UseGuards(AuthGuard('jwt'))
export class ProfesionalController {

    constructor(private profesionalService: ProfesionalService){}

    
    // Add Profesional: /profesional/create
    @Post('/create')
    async createPost(@Res() res, @Body() createProfesionalDTO : CreateProfesionalDTO) { //Metemos el Body para que coja los datos desde el cliente
        // console.log(createProfesionalDTO);
        const profesional =await this.profesionalService.createProfesional(createProfesionalDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Received',
            patient: profesional                 
        });
    }

    // Get Profesionals /profesional
    @Get('/')
    async getProfesionals(@Res() res) {
        const profesional = await this.profesionalService.getProfesionals();
        return res.status(HttpStatus.OK).json(profesional);
    }

     // GET single profesional: /profesional/5c9d46100e2e5c44c444b2d
    @Get('/:profesionalID')
    async getProfesional(@Res() res, @Param('profesionalID') profesionalID) {
        const profesional = await this.profesionalService.getProfesional(profesionalID);
        if (!profesional) throw new NotFoundException('Profesional does not exist!');
        return res.status(HttpStatus.OK).json(profesional);
    }

    // Delete Profesional: /profesional/delete?profesionalID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteProfesional(@Res() res, @Query('profesionalID') profesionalID) {
        const profesionalDeleted = await this.profesionalService.deleteProfesional(profesionalID);
        if (!profesionalDeleted) throw new NotFoundException('Profesional does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Profesional Deleted Successfully',
            profesionalDeleted
        });
    }

  // Update Profesional: /update?profesionalID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateProfesional(@Res() res, @Body() createProfesionalDTO: CreateProfesionalDTO, @Query('profesionalID') profesionalID) {
        const updatedProfesional = await this.profesionalService.updateProfesional(profesionalID, createProfesionalDTO);
        if (!updatedProfesional) throw new NotFoundException('Profesional does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Profesional Updated Successfully',
            updatedProfesional 
        });
    }
    

}
