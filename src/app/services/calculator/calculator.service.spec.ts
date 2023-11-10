// import { TestBed } from '@angular/core/testing';

import { LoggerService } from "../logger/logger.service";
import { CalculatorService } from "./calculator.service";


// import { CalculatorService } from './calculator.service';

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('calculator' , () => {

  // let mockLoggerServices : any;
  // let calculator : CalculatorService;

  // beforeEach(() =>
  // {
  //   let mockLoggerServices = jasmine.createSpyObj('LoggerService' , ['log']); // createSpyObj is help to create dummie object of any class , it's automatic generate log method dummie object
  //   const calculator = new CalculatorService(mockLoggerServices);
  // });

  it('should return addition of 2 value', () =>{});
  it('should return subtraction of 2 value', () => {
    pending();
  });
  xit('should return addition of 2 value', ()=> {});

  it('should return addition of 2 value', () =>{
    let mockLoggerServices = jasmine.createSpyObj('LoggerService' , ['log']); // createSpyObj is help to create dummie object of any class , it's automatic generate log method dummie object
    const calculator = new CalculatorService(mockLoggerServices);
    let result = calculator.add(8,2);
    expect(result).toBe(10);
    expect(mockLoggerServices.log).toHaveBeenCalledTimes(1); // if method run 2 times than define 2 or number 
  });

  it('should return subtraction of 2 value', () =>{
    const loggerServices = new LoggerService();
    spyOn(loggerServices, 'log') // this method don't excute log method ,  spyOn check how many method excute
  //  spyOn(loggerServices, 'log').and.callThrough(); // we spyOn log method and callThrough excute log method
    const calculator = new CalculatorService(loggerServices);
    let result = calculator.sub(10,3);
    expect(result).toBe(7);
    expect(loggerServices.log).toHaveBeenCalledTimes(1);
    })

  it('should return multiplication of 2 value', () => {
    const loggerServices = new LoggerService();
    const calculator = new CalculatorService(loggerServices);
    let result = calculator.mul(3,3);
    expect(result).toBe(9);
    
  })
})

