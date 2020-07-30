import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
 
export class SignupComponent implements OnInit{

  form: FormGroup;
  show: boolean;

  constructor(private authservice: AuthService, 
    private router: Router) {
      this.show = false;
    }

    password() {
      this.show = !this.show;
  }

  user = {
    email: '',
    password: ''
  }

  private emailPattern: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', Validators.required)
    });
  }

  //Con este método autentico
  signUp(usuario){
    if(this.form.valid){this.authservice.signUp(usuario) //Hago la petición
    .subscribe( //Respuesta que me va a dar el servidor, me puede dar respuesta o error
    res=> {
      console.log(res)
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/signin']);
    },
    err => console.log(err)
    )}
  }
  
  get email() { return this.form.get('email'); }
 }