import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import {  MatSnackBar} from  '@angular/material/snack-bar' ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
 
export class SignupComponent implements OnInit{

  form: FormGroup;
  show: boolean;

  constructor(private authservice: AuthService, 
    private router: Router, private _snackBar: MatSnackBar) {
      this.show = false;
    }

    openSnackBar() {
      this._snackBar.open('¡Usuario registrado!', 'OK!', {
        duration: 2000,
      });
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
      this.openSnackBar();
      console.log(res)
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/signin']);
    },
    err => console.log(err)
    )}
  }
  
  get email() { return this.form.get('email'); }
 }