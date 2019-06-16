import { Component, OnInit } from '@angular/core';

import { Endereco, ErroCep, ErrorValues, NgxViacepService } from '@brunoc/ngx-viacep';

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

  constructor(private viacep: NgxViacepService) { }

  ngOnInit() {
  }

  buscarCep(): void {
    this.endereco = null;
    this.error = false;
    this.errorMessage = '';

    this.viacep.buscarPorCep(this.cep).then((endereco: Endereco) => {
      // Endereço retornado :)
      console.log(endereco);
    }).catch((error: ErroCep) => {
      // Alguma coisa deu errado :/
      console.log(error.message);
    });
  }
}
