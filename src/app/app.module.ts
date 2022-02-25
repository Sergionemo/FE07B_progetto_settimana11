import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CarrelloComponent } from './pages/carrello.component';
import { DettagliComponent } from './pages/dettagli.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'carrello',
    component: CarrelloComponent,
  },
  {
    path: 'prodotti/:id',
    component: DettagliComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrelloComponent,
    DettagliComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
