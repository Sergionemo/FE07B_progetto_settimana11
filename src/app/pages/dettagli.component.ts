import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotto } from '../models/prodotto';
import { ProductsService } from '../products.service';
import { CarrelloService } from '../carrello.service';


@Component({
  template: `
    <div *ngIf="prod">
        <div
          class="d-flex align-items-center flex-wrap justify-content-center flex-column"
        >
          <h1>Dettagli Prodotto</h1>
          <h3>{{ prod.name }}</h3>
          <h4>{{ prod.price }}€</h4>
          <button class="btn btn-primary" (click)="aggiungi()">
            Aggiungi al carrello
          </button>
        </div>
      </div>
  `,
  styles: [],
})
export class DettagliComponent implements OnInit {
  constructor(
    private productSrv: ProductsService,
    private router: ActivatedRoute,
    private carrelloSrv: CarrelloService
  ) { }

  prod!: Prodotto;
  sub!: Subscription;



  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.productSrv.getProduct(id).subscribe((response: Prodotto) => {
        this.prod = response;
        // console.log(this.prod);
      });
    });
  }
  aggiungi() {
    this.carrelloSrv.aggiungiCarrello( this.prod)
  }
}
