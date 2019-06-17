import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
