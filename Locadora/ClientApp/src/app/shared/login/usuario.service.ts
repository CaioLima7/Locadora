import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  //readonly BaseURI = 'http://localhost:52849/api';
  readonly BaseURI = 'http://localhost:52849/api';

  formModel = this.fb.group({
    NomeUsuario: ['', Validators.required],
    Email: ['', Validators.email],
    NomeCompleto: [''],
    Senha_registro: ['', [Validators.required, Validators.minLength(4)]]
    //Senhas: this.fb.group({
    //Senha_registro: ['', [Validators.required, Validators.minLength(4)]],
    //ConfirmarSenha: ['', Validators.required]
  });
  
    //}, { validator: this.comparePasswords })

  //});

  //comparePasswords(fb: FormGroup) {
  //  let confirmPswrdCtrl = fb.get('ConfirmarSenha');
  //  //passwordMismatch
  //  //confirmPswrdCtrl.errors={passwordMismatch:true}
  //  if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //    if (fb.get('Senha_registro').value != confirmPswrdCtrl.value)
  //      confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //    else
  //      confirmPswrdCtrl.setErrors(null);
  //  }
  //}

  registrar() {
    var body = {
      NomeUsuario: this.formModel.value.NomeUsuario,
      Email: this.formModel.value.Email,
      NomeCompleto: this.formModel.value.NomeCompleto,
      Senha: this.formModel.value.Senha_registro
    };
    return this.http.post(this.BaseURI + '/Acesso/Registrar', body);
  }

  logar(formData) {
    return this.http.post(this.BaseURI + '/Acesso/Logar', formData);
  }

  getPerfil() {
    return this.http.get(this.BaseURI + '/Perfil');
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
