  import { Attribute, booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { UserModel } from "../../../models/user.model"
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { CountryCodePipe } from '../../pipes/country-code-pipe';
  function GreetingFunction(value:string)
  {
    return "Hi..!"+value
  }

  @Component({
    selector: 'app-user-profile',
    imports: [FormsModule, TitleCasePipe, UpperCasePipe, CountryCodePipe],
    templateUrl: './user-profile.html',
    styleUrl: './user-profile.css'
  })
  export class UserProfile {

    @Input({alias:"userkiAge"}) userAge: number=0;
    @Input({alias:"userkiName",transform:GreetingFunction}) userName: string = "";
    @Input({transform: numberAttribute}) customerSalary!: number;

    @Input({transform:booleanAttribute}) isCustomerActive!: boolean;

    name: string="talha"
    status="Active"
    salary: number=23.3
    phoneNumer:string ="1231231"
    address: string=""

    isButtonDisabled=false



  @Input() userData!:any[]

  @Output() myEvent= new EventEmitter<string>();
  @Output() userDataEventEmit= new EventEmitter<UserModel[]>();

  @Output() EmitSingleUser= new EventEmitter<UserModel>();
  sendStringData()
  {
    this.myEvent.emit("Hello..!");
  }
  sendUseData()
  {
    this.userDataEventEmit.emit(this.userData)
  }

  SingleUser(user:UserModel)
  {
    this.EmitSingleUser.emit(user);
  }

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
