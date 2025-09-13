import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Pasientes {
  id: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  fechaNacimiento: string;
  telefono: string;
}
@Injectable({
  providedIn: 'root'
})
export class Pasiente {
   private apiUrl = 'https://localhost:7226/api/Pasiente'; 

  constructor(private http: HttpClient) {}

  getPasientes(): Observable<Pasientes[]> {
    return this.http.get<Pasientes[]>(this.apiUrl);
  }

  getPasiente(id: number): Observable<Pasientes> {
    return this.http.get<Pasientes>(`${this.apiUrl}/${id}`);
  }

  addPasiente(pasiente: Pasientes): Observable<Pasientes> {
    return this.http.post<Pasientes>(this.apiUrl, pasiente);
  }

  updatePasiente(id: number, pasiente: Pasientes): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, pasiente);
  }

  deletePasiente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
