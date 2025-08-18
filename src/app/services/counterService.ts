import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class counterService {
  
  private countValue=0;

  getCounter(){
    return this.countValue;
  }

  incrementCounter()
  {
    return this.countValue = this.countValue+1;
  }

  
}
