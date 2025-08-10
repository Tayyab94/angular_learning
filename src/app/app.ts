import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './components/user-profile/user-profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



   users = [
  { name: "Tayyab", isSingle: true, salary: 1000 },
  { name: "Ahmed", isSingle: false, salary: 1500 },
  { name: "Sara", isSingle: true, salary: 1200 },
  { name: "Ali", isSingle: false, salary: 1800 },
  { name: "Fatima", isSingle: true, salary: 950 },
  { name: "Usman", isSingle: false, salary: 2000 },
  { name: "Aisha", isSingle: true, salary: 1100 }
];
  protected readonly title = signal('my-first-angular-app');
}
