import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { Prodotto } from '../models/prodotto';


@Component({
  template: `
    <div class="container">
      <h1>Articoli</h1>
      <ng-container *ngIf="carrello.length > 0; else zeroProd">
        <ul class="list-group">
          <li
            *ngFor="let item of carrello"
            class="list-group-item d-flex justify-content-between"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.price }}€</div>
          </li>
        </ul>
      </ng-container>
      <ng-template #zeroProd>
        <h2>Non ci sono prodotti</h2>
      </ng-template>
      <form (ngSubmit)="submit(f)" #f="ngForm">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            type="text"
            ngModel
            name="nome"
            class="form-control m-1"
            id="nome"
          />
        </div>
        <div class="form-group">
          <label for="indirizzo">Indirizzo</label>
          <input
            type="text"
            ngModel
            name="indirizzo"
            class="form-control m-1"
            id="indirizzo"
          />
        </div>
        <button type="submit" class="btn btn-primary m-1">Submit</button>
      </form>
    </div>
  `,
  styles: [],
})
export class CarrelloComponent implements OnInit {
  constructor(private carrelloSrv: CarrelloService) {}

  carrello!: Prodotto[];

  ngOnInit(): void {
    this.carrello = this.carrelloSrv.getCarrello();
  }
  submit(form: any) {
    console.log('Ordine inviato con successo!', form.value);
    form.reset();
    this.carrelloSrv.svuotaCarrello();
    this.carrello = this.carrelloSrv.getCarrello();
  }
}
