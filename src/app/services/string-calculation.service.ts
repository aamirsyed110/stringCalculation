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
    let numArr = numbers.split(regExp).map(Number);

    // filter the negative value
    let negativeValArr = numArr.filter(x => x < 0); 

    // if negative number present throw error
    if(negativeValArr && negativeValArr.length > 0){
      throw new Error(`Negative numbers not allowed: ${negativeValArr.join(', ')}`);
    }

    return eval(numArr.join("+"));
  }
}
