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

  DadosCompra = [this.nome, this.sobrenome, this.email, this.celular, this.observacoes];

  constructor(private viacep: NgxViacepService, private http: HttpClient, private rota: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.rota.queryParams.subscribe(
      (queryParams: any) => {
        this.parametros = queryParams;
      })
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
    var body = {
      "Nome": this.parametros["Nome"],
      "Descricao": this.parametros["Descricao"],
      "Preco": 10
    };
    this.toastr.success("Compra salva no banco de dados");
    return this.http.post('http://localhost:52849/api/ObterCompra', body).subscribe();
  }

}
