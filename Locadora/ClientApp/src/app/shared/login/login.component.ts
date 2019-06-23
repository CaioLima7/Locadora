import { UserService } from './usuario.service'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    NomeUsuario: '',
    Senha: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/Filmes');
  }

  aoEnvio(form: NgForm) {
    this.service.logar(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/Filmes');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Nome ou senha incorretos', 'Falha na autentificação.');
        else
          this.toastr.error("Falha ", err)
      }
    );
  }

  esqueceuSenha() {
    alert("Em desenvolvimento");
  }
}
