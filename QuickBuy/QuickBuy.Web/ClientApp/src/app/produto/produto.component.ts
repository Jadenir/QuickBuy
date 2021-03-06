import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";
import { Router } from "@angular/router";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]

})

export class ProdutoComponent implements OnInit {
    public produto: Produto;
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;
    public mensagem: string;

    constructor(private produtoServico: ProdutoServico,
        private router: Router) {

    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem('produtoSession');
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new Produto();
        }
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativarEspera();
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.desativarEspera();
                },
                err => {
                    console.log(err.error);
                    this.desativarEspera();
                }
            );
    }

    public cadastrar() {
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produto_json => {
                    console.log(produto_json);
                    this.desativarEspera();
                    this.router.navigate(['/pesquisar-produto']);
                },
                err => {
                    console.log(err.error);
                    this.mensagem = err.error;
                    this.desativarEspera();
                }
            );
    }

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }

}
