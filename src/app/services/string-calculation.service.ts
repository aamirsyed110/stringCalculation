import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculationService {

  constructor() { }


  add(numbers:string):number{

    // return as 0 if blank string comes
    if(!numbers){
      return 0;
    }


    let regExp = /,|\n/;

    // if custom new delimiter comes the extract the delimiter and numbers string
    if (numbers.startsWith('//')) {
      const delimiterSection = numbers.match(/\/\/(.+)\n/);
      if (delimiterSection) {
        regExp = new RegExp(delimiterSection[1]);
        numbers = numbers.substring(delimiterSection[0].length);
      }
    }

    // splting the number using regex
    let numArr = numbers.split(regExp);

    return eval(numArr.join("+"));
  }
}
