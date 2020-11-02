import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persoana } from './models'; // se uită în index.ts din directorul models și o să ia /persoana.model
import { environment } from '../../environments/environment'; // accesăm variabile de mediu

@Injectable({
  providedIn: 'root'
})
export class PersoaneService {
  private url = `${environment.apiUrl}persoane`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Persoana[]> {
    return this.httpClient.get<Persoana[]>(this.url);
  }

  save(persoana: Persoana): Observable<any> {
    return this.httpClient.post(this.url, persoana);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
