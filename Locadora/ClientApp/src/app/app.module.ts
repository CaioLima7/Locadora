import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { ProcessadoComponent } from './telas/processado/processado.component';
import { UserService } from './shared/login/usuario.service';
import { AuthInterceptor } from './shared/autentificacao/auth.interceptor';

import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './shared/autentificacao/auth.guard';
import { RegistroComponent } from './shared/registro/registro.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EstoqueComponent } from './admin/estoque/estoque.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FilmesComponent,
    SeriesComponent,
    ProdutoComponent,
    CheckoutComponent,
    ProcessadoComponent,
    RegistroComponent,
    EstoqueComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxViacepModule,
    ToastrModule.forRoot({  
      progressBar: true
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'registro', component: RegistroComponent },
      { path: 'Checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
      { path: 'Filmes', component: FilmesComponent, canActivate: [AuthGuard] },
      { path: 'Series', component: SeriesComponent, canActivate: [AuthGuard] },
      { path: 'Produto', component: ProdutoComponent, canActivate: [AuthGuard]  },
      { path: 'Checkout', component: CheckoutComponent, canActivate: [AuthGuard]  },
      { path: 'Admin', component: EstoqueComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] } }
    ])
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
