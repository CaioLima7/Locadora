import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  valorTotal: number;
  valor: number = 1;
  valorNegativo: boolean;

  aumentar() {
    this.valor++
    this.valorTotal = this.valorTotal + this.preco;
    if (this.valor <= 1) {
      this.valor = 1
      this.valorNegativo = true;
    }
    else 
      this.valorNegativo = false;
  }
  diminuir() {
    this.valor--
    this.valorTotal = this.valorTotal - this.preco;
    if (this.valor <= 1) {
      this.valor = 1
      this.valorNegativo = true;
  }
    else
      this.valorNegativo = false;
  }

  cartaz: number;
  parametros: string;
  nomeDVD: string;
  preco: number;
  preco2: number;
  
  constructor(private rota: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.nomeDVD = "teste";
      this.rota.queryParams.subscribe(
        (queryParams: any) => {
          this.parametros = queryParams;
        })
    if (this.parametros["Nome"] == "Interestelar") {
      this.cartaz = 1;
      this.nomeDVD = "Interestelar";
      this.preco = 100;
    }
    if (this.parametros["Nome"] == "A Cabana") {
      this.cartaz = 2;
      this.nomeDVD = "A Cabana";
      this.preco = 80;
    }
    if (this.parametros["Nome"] == "Fragmentado") {
      this.cartaz = 3;
      this.nomeDVD = "Fragmentado";
      this.preco = 2;
    }
    this.valorTotal = this.preco ;
  } 

  enviarQP() {
    //this.router.navigate(['/Checkout'], { queryParams: { 'Nome': 'interestelar', 'Descricao': this.valor } });
    this.router.navigate(['/Checkout'], { queryParams: { 'Nome': this.parametros["Nome"] , 'Qtd': this.valor } });
  }


}
