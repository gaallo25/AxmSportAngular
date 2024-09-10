import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductoModel } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {


  constructor(private http: HttpClient) { }

  searchProducts(): Observable<ProductoModel[]> {
  return this.http.get<ProductoModel[]>(`http://localhost:8080/api/product`);
  }
}
