import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from 'src/app/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 
  constructor(private http: HttpClient) { }

  searchClients(): Observable<ClienteModel[]> {
  return this.http.get<ClienteModel[]>(`http://localhost:8080/api/client`);
  }
}

