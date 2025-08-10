import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return "+92-"+ value;
  // }


    transform(value: string, countryName?: string): string {
      let code="+92-";

      if(countryName==="USA") 
      {
        code="+1-"
      }else if (countryName==="IND") {
        code="+91-"
      }
      
      return code+value   ;
  }

}
