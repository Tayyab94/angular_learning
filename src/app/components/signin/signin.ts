import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {


    user = {
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', this.user);
      // Add your authentication logic here
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.user = { email: '', password: '' };
  }
}
