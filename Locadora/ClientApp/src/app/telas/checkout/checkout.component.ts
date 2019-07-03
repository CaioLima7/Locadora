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
    this.qtd = this.parametros["Descricao"];
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
    }
    if (this.parametros["Nome"] == "A Cabana") {
      this.preco = 3;
    }
    if (this.parametros["Nome"] == "Fragmentado") {
      this.preco = 2;
    }

    var body = {
      "Nome": this.parametros["Nome"],
      "Descricao": this.parametros["Descricao"],
      "Preco": this.preco
    };
    this.toastr.success("Compra salva no banco de dados");
    return this.http.post('http://localhost:52849/api/ObterCompra', body).subscribe();
  }

}
