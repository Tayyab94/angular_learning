import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

function GreetingFunction(value:string)
{
  return "Hi..!"+value
}

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {

  @Input({alias:"userkiAge"}) userAge: number=0;
  @Input({alias:"userkiName",transform:GreetingFunction}) userName: string = "";
  name: string="Tayyab"
  status="Active"
  salary: number=23.3

  address: string=""

  isButtonDisabled=false

 users = [
  { name: "Tayyab", isSingle: true, salary: 1000 },
  { name: "Ahmed", isSingle: false, salary: 1500 },
  { name: "Sara", isSingle: true, salary: 1200 },
  { name: "Ali", isSingle: false, salary: 1800 },
  { name: "Fatima", isSingle: true, salary: 950 },
  { name: "Usman", isSingle: false, salary: 2000 },
  { name: "Aisha", isSingle: true, salary: 1100 }
];

  OnChange(e:Event)
  {
    const inputValue= (e.target as HTMLInputElement ).value
    this.name= inputValue
    console.log(inputValue)
  }

   ButtonClick = async()=>{
      if(this.name=="admin" && this.status=="Active"){
        alert("Welcome Acdmmin")
  }
}
}
