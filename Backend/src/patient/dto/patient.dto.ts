/*
! DICE QUE ES LO QUE SE ESTÁ RECIBIENDO Y ENVIANDO ENTRE LA APP CLIENTE Y EL SERVIDOR
*/

export class CreatePatientDTO{

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