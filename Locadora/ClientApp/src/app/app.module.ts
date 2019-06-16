import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { Http, HttpModule } from '@angular/http';
import { HeaderComponent } from './shared/header/header.component';
import { FilmesComponent } from './telas/filmes/filmes.component';
import { SeriesComponent } from './telas/series/series.component';
import { ProdutoComponent } from './telas/produto/produto.component';
import { CheckoutComponent } from './telas/checkout/checkout.component';


import { NgxViacepModule } from '@brunoc/ngx-viacep';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FilmesComponent,
    SeriesComponent,
    ProdutoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxViacepModule,
    RouterModule.forRoot([
      { path: 'Filmes', component: FilmesComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Produto', component: ProdutoComponent },
      { path: 'Checkout', component: CheckoutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
