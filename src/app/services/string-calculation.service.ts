import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculationService {

  constructor() { }


  add(numbers:string):number{

    if(!numbers){
      return 0;
    }
    let regExp = /,|\n/;
    let numArr = numbers.split(regExp);

    return eval(numArr.join("+"));
  }
}
