import { Patient } from './../components/models/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  selectedPatient: Patient;
  patients: Patient[];
  readonly URL_API = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }


  getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.URL_API}/patient`);
  }

  getPatient(_id: string):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.URL_API}/patient/${_id}`);
  }

  createPatient(patient: Patient): Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.URL_API}/patient/create`, patient);
  }

  deletePatient(_id: string):Observable<Patient>{
    return this.httpClient.delete<Patient>(`${this.URL_API}/patient/delete?patientID=${_id}`);
  }

  updatePatient(_id: string, patient: Patient): Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.URL_API}/patient/update?patientID=${_id}`, patient);
  }


 

  
}