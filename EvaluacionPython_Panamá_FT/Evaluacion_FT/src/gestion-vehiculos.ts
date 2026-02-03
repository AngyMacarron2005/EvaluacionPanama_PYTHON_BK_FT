import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../src/domain/models';

@Injectable({
  providedIn: 'root',
})
export class GestionVehiculos {

  private urlBase = "http://localhost:8000/api/matriculas";

  constructor(private http: HttpClient) {}

  create(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.urlBase, vehiculo);
  }

  getAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.urlBase);
}

}