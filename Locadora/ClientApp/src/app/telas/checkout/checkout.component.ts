import { Component, OnInit } from '@angular/core';

import { Endereco, ErroCep, ErrorValues, NgxViacepService } from '@brunoc/ngx-viacep';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cep = '';
  endereco: Endereco;
  error: boolean;
  errorMessage: string;
  logradouro: string;
  uf: string;
  localidade: string;

  nome: string;
  sobrenome: string;

  email: string;
  celular: string;

  observacoes: string;

  parametros: string;

  preco: number;

  qtd: number;

  valorTotal: number;

  DadosCompra = [this.nome, this.sobrenome, this.email, this.celular, this.observacoes];

  nomeDVD: string;

  produtoId: number;

  constructor(private viacep: NgxViacepService, private http: HttpClient, private rota: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.rota.queryParams.subscribe(
      (queryParams: any) => {
        this.parametros = queryParams;
      })
    if (this.parametros["Nome"] == "Interestelar") {
      this.preco = 100;
    }
    if (this.parametros["Nome"] == "A Cabana") {
      this.preco = 80;
    }
    if (this.parametros["Nome"] == "Fragmentado") {
      this.preco = 2;
    }
    this.qtd = this.parametros["Qtd"];
    this.valorTotal = this.preco * this.qtd;
    this.nomeDVD = this.parametros["Nome"];
  }

  buscarCep(): void {
    this.endereco = null;
    this.error = false;
    this.errorMessage = '';

    this.viacep.buscarPorCep(this.cep).then((endereco: Endereco) => {
      // Endereço retornado :)
      this.endereco = endereco;
      this.logradouro = endereco.logradouro;
      this.uf = endereco.uf;
      this.localidade = endereco.localidade;
      console.log(endereco)
    }).catch((error: ErroCep) => {
      // Alguma coisa deu errado :/
      console.log(error.message);
    });
  }

  getPost() {
    this.http.post('/api/Api', this.DadosCompra).subscribe();
  }

  //pegarQP(): string {

  //}

  EnviarCompra() {
    if (this.parametros["Nome"] == "Interestelar") {
      this.preco = 100;
      this.produtoId = 1;
    }
    if (this.parametros["Nome"] == "A Cabana") {
      this.preco = 80;
      this.produtoId = 2;

    }
    if (this.parametros["Nome"] == "Fragmentado") {
      this.preco = 2;
      this.produtoId = 3;
    }

    var body = {
      "ProdutoId": this.produtoId,
      "Quantidade": this.parametros["Qtd"],
      "Total": this.valorTotal
    };
    this.toastr.success("Filme alugaado com sucesso, seu item foi salvo na tabela: ItemPedidos")
    return this.http.post('http://localhost:52849/api/Produto/Alugar', body)
      .subscribe();
  }

}
