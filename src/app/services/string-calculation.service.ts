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

    // if custom new delimiter comes the extract the delimiter and numbers string
    const delimiter = this.extractDelimiter(numbers);
    const numberString = this.extractString(numbers, delimiter);

    // splting the number using regex
    const numArr = this.splitNumbers(numberString, delimiter);

    // filter the negative value
    let negativeValArr = numArr.filter(x => x < 0); 

    // if negative number present throw error
    if(negativeValArr && negativeValArr.length > 0){
      throw new Error(`Negative numbers not allowed: ${negativeValArr.join(', ')}`);
    }

    return numArr.reduce((sum, current) => sum + current, 0);
  }

  private extractDelimiter(input: string): RegExp {
    if (input.startsWith('//')) {
      const delimiterSection = input.match(/\/\/(.+)\n/);
      if (delimiterSection) {
        return new RegExp(delimiterSection[1]);
      }
    }
    return /,|\n/;
  }

  private extractString(input: string, delimiter: RegExp): string {
    if (input.startsWith('//')) {
      const delimiterSection = input.match(/\/\/(.+)\n/);
      if (delimiterSection) {
        return input.substring(delimiterSection[0].length);
      }
    }
    return input;
  }

  private splitNumbers(input: string, delimiter: RegExp): number[] {
    return input.split(delimiter).map(Number);
  }

}
