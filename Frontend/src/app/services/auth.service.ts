import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private URL = 'http://localhost:3000' 

  
  constructor(private http: HttpClient, private router: Router) { }

  
  signUp(user){
    return this.http.post<any>(this.URL + '/users', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/auth', user); 
  }

  
  loggedIn(){
   return !!localStorage.getItem('token'); 
  }

  
  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token'); 
    this.router.navigate(['/signin']);
   }
}