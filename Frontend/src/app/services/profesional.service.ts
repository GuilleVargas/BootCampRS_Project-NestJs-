import { Profesional } from './../components/models/profesional';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  selectedProfesional: Profesional;
  profesional: Profesional[];
  
  readonly URL_API = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {  }

  getProfesionals():Observable<Profesional[]>{
    return this.httpClient.get<Profesional[]>(`${this.URL_API}/profesional`);
  }

  getProfesional(_id: string):Observable<Profesional>{
    return this.httpClient.get<Profesional>(`${this.URL_API}/profesional/${_id}`);
  }

  createProfesional(profesional: Profesional): Observable<Profesional>{
    return this.httpClient.post<Profesional>(`${this.URL_API}/profesional/create`, profesional);
  }

  deleteProfesional(_id: string):Observable<Profesional>{
    return this.httpClient.delete<Profesional>(`${this.URL_API}/profesional/delete?profesionalID=${_id}`);
  }

  updateProfesional(_id: string, profesional: Profesional):Observable<Profesional>{
    return this.httpClient.put<Profesional>(`${this.URL_API}/profesional/update?profesionalID=${_id}`, profesional);
  }
}