import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { ProductsService } from '../products.service';



@Component({
  template: `
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <div *ngFor="let prod of prodArr; let i = index">
        <div class="card mt-5" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ prod.name }}</h5>
            <p class="card-text">
              {{ prod.description }}
            </p>
            <a [routerLink]="['/prodotti', prod.id]" routerLinkActive="active"  class="card-link btn btn-primary">Dettagli</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private productsSrv: ProductsService) {}

  prodArr: Prodotto[] = [];

  ngOnInit(): void {
    const prodArr = this.productsSrv.get().subscribe((prodArr) => {
      this.prodArr = prodArr;
    });
  }
}
