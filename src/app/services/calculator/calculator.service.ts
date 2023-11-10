import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerServices : LoggerService) { }

  add(n1 : number , n2 : number){
    let result = n1 + n2;
    this.loggerServices.log('addition method called');
  //  this.loggerServices.log('addition method called second time');  if you call log method 2 times than spyOn give u error
    return result;
  }

  sub (n1 : number , n2  : number){
    let result = n1 - n2;
    this.loggerServices.log('subtraction method called');
    return result;
  }

  mul(n1 : number , n2 : number){
    let result = n1 * n2;
    this.loggerServices.log('multiplication method called');
    return result;
  }
}
