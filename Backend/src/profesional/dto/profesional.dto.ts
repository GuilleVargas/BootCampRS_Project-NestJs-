/*
! DICE QUE ES LO QUE SE ESTÁ ENVIADO ENTRE LA APP CLIENTE Y EL SERVIDOR
*/

export class CreateProfesionalDTO{

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