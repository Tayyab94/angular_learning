import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = new FormControl("",[Validators.required, Validators.email])
  password = new FormControl("",[Validators.required, Validators.minLength(4)])

  loginForm= new FormGroup({
    email: this.email,
    password: this.password
  })


  loginSubmit(){
    console.log(this.loginForm.value)
  }
  resetForm(){
    this.loginForm.reset();
  }
}

