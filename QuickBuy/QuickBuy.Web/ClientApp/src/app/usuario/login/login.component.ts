import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from "@angular/router"
import { state } from '@angular/animations';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    public usuario;
    public returnUrl: string;

    constructor(private router: Router, private activatedRouter: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.usuario = new Usuario();
    }

    entrar() {
        if (this.usuario.email == "jadenir.p.s@gmail.com" && this.usuario.senha == "asdf") {
            sessionStorage.setItem("usuario-autenticado", "1");
            this.router.navigate([this.returnUrl]);
        }
    }
}
