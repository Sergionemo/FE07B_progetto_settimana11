import { Injectable } from '@angular/core';
import { Prodotto } from './models/prodotto';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  i: number = 0;
  carrello: Prodotto[] = [];
  constructor() {}

  aggiungiCarrello(prod: Prodotto) {
    this.carrello.push(prod);
  }
  getCarrello() {
    console.log('get carrello:');
    console.log(this.carrello);
    return this.carrello;
  }
  getNumProd() {
    return this.carrello.length;
  }
  svuotaCarrello() {
    this.carrello = [];
  }
}
