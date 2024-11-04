
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ave } from '../interfaces/ave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvesApiService {

  private readonly urlApi: string = 'https://aves.ninjas.cl/api/birds';
  constructor(private readonly http: HttpClient) {};

  obtenerAves(): Observable<Ave[]>{
    return this.http.get<Ave[]>(this.urlApi);
  }
}
