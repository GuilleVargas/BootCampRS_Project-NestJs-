/*
! AYUDAR A TS ESCRIBIR EL CÓDIGO, DEFINE LO QUE ESTOY ESCRIBIENDO EN MI CÓDIGO
*/
import { Document } from 'mongoose';


export interface Patient extends Document{

    nhc: number;
    name: string;
    surname: string;
    second_surname: string;
    gender: string;
    birth_date: string;
    nif:string;
    street: string;
    portal_number: number;
    door: string;
    postal_code: number;
    city: string;
    tarjet_number: number;
    insurance_name: string;
    type_of_insurance: string;
    
}