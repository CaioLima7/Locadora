import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  categoryForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
  }


  validarEmail() {
    this.categoryForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  esqueceuSenha() {
    alert("Em desenvolvimento");
  }

}
