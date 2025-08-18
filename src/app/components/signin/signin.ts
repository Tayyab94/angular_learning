import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {


  constructor(private nagivation: Router){}
    user = {
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', this.user);
      // Add your authentication logic here
      this.nagivation.navigate(['/login']);

    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.user = { email: '', password: '' };
  }
}
