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

    return parseInt(numbers);
  }
}
