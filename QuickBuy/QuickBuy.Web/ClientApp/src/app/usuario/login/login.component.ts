import { Component } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styles: ["./login.component.css"]
})

export class LoginComponent {
    public usuario;
    public usuarioAutenticado: boolean = false;

    constructor() {
        this.usuario = new Usuario();
    }
    
    entrar() {
        if (this.usuario.email == "jadenir.p.s@gmail.com" && this.usuario.senha == "asdf") {
            this.usuarioAutenticado = true;
        }
    }
}
