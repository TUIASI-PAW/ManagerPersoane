import { Injectable } from '@angular/core';
import { Persoana } from './models'; // se uită în index.ts din directorul models și o să ia /persoana.model

import { environment } from '../../environments/environment'; // accesăm variabile de mediu

@Injectable({
  providedIn: 'root'
})
export class PersoaneService {
  private url = `${environment.apiUrl}persoane`;

  constructor() { }
}
