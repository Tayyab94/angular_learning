  import { Attribute, booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
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
    @Input({transform: numberAttribute}) customerSalary!: number;

    @Input({transform:booleanAttribute}) isCustomerActive!: boolean;

    name: string="Tayyab"
    status="Active"
    salary: number=23.3

    address: string=""

    isButtonDisabled=false



  @Input() userData!:any[]
  
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
