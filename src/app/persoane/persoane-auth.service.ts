import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersoaneAuthService {

  constructor() { }

  isValidUserPass(username:String, password:String):Boolean {
    if (username == password) {
      return true;
    } else {
      return false;
    }
  }
}
