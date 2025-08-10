import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './components/user-profile/user-profile';
import { CommonModule } from '@angular/common';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



  users = [
  { id: 1, name: "Tayyab", isSingle: true, salary: 1000 },
  { id: 2, name: "Ahmed", isSingle: false, salary: 1500 },
  { id: 3, name: "Sara", isSingle: true, salary: 1200 },
  { id: 4, name: "Ali", isSingle: false, salary: 1800 },
  { id: 5, name: "Fatima", isSingle: true, salary: 950 },
  { id: 6, name: "Usman", isSingle: false, salary: 2000 },
  { id: 7, name: "Aisha", isSingle: true, salary: 1100 }
];
  protected readonly title = signal('my-first-angular-app');

  receivedData(e:string)
  {
    console.log(e)
  }

    receivedUserData(e:UserModel[])
  {
    console.log(e)
  }

  receivedSingleUser(e:UserModel)
  {
    
    // let indexData= this.users.findIndex(s=>s.name== e.name);
    // console.log(indexData)
   
    let result=this.users.findIndex(s=>s.name==e.name);

    this.users[result].salary= e.salary*2;
    
  }
}
