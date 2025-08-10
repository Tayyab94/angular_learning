  import { Attribute, booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { UserModel } from "../../../models/user.model"
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
    @Input({transform: numberAttribute}) customerSalary!: number;

    @Input({transform:booleanAttribute}) isCustomerActive!: boolean;

    name: string="Tayyab"
    status="Active"
    salary: number=23.3

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
