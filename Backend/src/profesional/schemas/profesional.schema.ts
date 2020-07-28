/*
! DEFINIR LOS DATOS QUE VAMOS A GUARDAR DENTRO DE MONGODB
*/

import { Schema } from 'mongoose';

export const ProfesionalSchema = new Schema({
    collegiate_number : {type: Number, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    second_surname: {type: String},
    gender: {type: String},
    birth_date: {type: String},
    nif: {type: String},
    type_of_profesional:{type: String},
    street: {type: String},
    portal_number: {type: Number},
    door: {type: String},
    postal_code: {type: Number},
    city: {type: String}

})