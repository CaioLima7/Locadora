import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.registrar().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Novo cliente cadastrado :)', 'Registro feito com sucesso.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Nome de usuário já existente', 'Registro não concluído.');
                break;

              default:
                this.toastr.error(element.description, 'Registro não concluído.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
