import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    debugger;
    console.log("constructor called from logger services");
  }

  messages: string[] = [];

  log(message: string) {
    debugger;
    console.log(message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
