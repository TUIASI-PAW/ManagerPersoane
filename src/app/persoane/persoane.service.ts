import { Injectable } from '@angular/core';
import { Persoana } from './models'; // se uită în index.ts din directorul models și o să ia /persoana.model

@Injectable({
  providedIn: 'root'
})
export class PersoaneService {

  constructor() { }
}
