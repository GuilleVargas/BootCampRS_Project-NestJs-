 /*
! AYUDAR A TS ESCRIBIR EL CÓDIGO
*/
import { Document } from 'mongoose';


export interface Profesional extends Document{

    collegiate_number: number;
    name: string;
    surname: string;
    second_surname: string;
    gender: string;
    birth_date: string;
    nif:string;
    type_of_profesional:string;
    street: string;
    portal_number: number;
    door: string;
    postal_code: number;
    city: string;
    
}