import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodotto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:4201';
  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Prodotto[]>(`${this.url}/products`)
  }
  getProduct(id:number) {
    return this.http.get<Prodotto>(`${this.url}/products/${id}`);
  }
}
