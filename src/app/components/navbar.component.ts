import { Component, Input, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{exact: true}"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/carrello']"
                routerLinkActive="active"
                >Carrello({{this.carrelloSrv.getNumProd()}})</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(public carrelloSrv:CarrelloService) {}

  counter!: number

  ngOnInit(): void {
    this.counter = this.carrelloSrv.getNumProd();
  }



}
