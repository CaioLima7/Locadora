import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  body: string;

  constructor(private rota: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    var body = {
      
    }
  }


  baseURI = "http://localhost:52849/api/Produto";

  criarProduto() {
    this.http.post(this.baseURI, this.body)
    this.toastr.success("teste");
  }

  deletarProduto() {
    this.http.post(this.baseURI, this.body)
    this.toastr.success("teste");
  }

  atualizarProduto() {
    this.http.post(this.baseURI, this.body)
    this.toastr.success("teste");
  }
}
