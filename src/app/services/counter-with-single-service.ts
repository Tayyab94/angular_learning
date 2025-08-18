import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterWithSingleService {
 
  private countValue= signal(0)

  doubleCountValue:Signal<number>= computed(()=> this.countValue() *2);
  constructor() {
    effect(()=>{
      console.log("Count value "+ this.countValue() + "Double Count Value :"+ this.doubleCountValue())
    })
  }


  getCountValue()
  {
    return this.countValue()
  }


  IncrementCountValue()
  {
    // this.countValue.set(3)   Set is used to  pass direct value

    this.countValue.update((oldValue)=>{
      return oldValue +1;
    })
  }
}
