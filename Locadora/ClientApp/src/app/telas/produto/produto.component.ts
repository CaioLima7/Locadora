import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  valor: number = 0;

  aumentar() {
    this.valor++
  }
  diminuir() {
    this.valor--
  }

  parametros: string;

  constructor(private rota: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.rota.queryParams.subscribe(
        (queryParams: any) => {
          this.parametros = queryParams;
        })
  }

  enviarQP() {
    //this.router.navigate(['/Checkout'], { queryParams: { 'Nome': 'interestelar', 'Descricao': this.valor } });
    this.router.navigate(['/Checkout'], { queryParams: { 'Nome': this.parametros["Nome"] , 'Descricao': this.valor } });
  }   
}
