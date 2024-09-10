import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClienteModel } from 'src/app/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {


  constructor( private http: HttpClient) { }
  public getClient(documentNumber: string): Observable<ClienteModel> {
    return this.http.get<{ data: ClienteModel }>(`http://localhost:8080/api/client/${documentNumber}`).pipe(
      map(response => response.data)  // Extraer el campo `data`
    );
  }
  public saveClient(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>('http://localhost:8080/api/client/create', cliente); // Hacer POST con el modelo ClienteModel
  }
}
