import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from "@angular/router"
import { state } from '@angular/animations';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    public usuario;
    public returnUrl: string;
    public mensagem: string;
    private ativar_spinner: boolean;

    constructor(private router: Router,
        private activatedRouter: ActivatedRoute,
        private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.usuario = new Usuario();
    }

    entrar() {
        this.ativar_spinner = true;
        //verifica usuario no serviço criado
        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    //essa linha será executado quando não houver erros
                    this.usuarioServico.usuario = usuario_json;
                    //valida retorno da tela que chamou o login
                    if (this.returnUrl == null) {
                        this.router.navigate(['/'])
                    } else {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                err => {
                    //será executada quando houver erros
                    console.log(err.error);
                    this.mensagem = err.error;
                    this.ativar_spinner = false;
                }
            );
    }
}
