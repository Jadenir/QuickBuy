import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../modelo/produto";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]

})

export class ProdutoComponent implements OnInit {
    public produto: Produto;
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;

    constructor(private produtoServico: ProdutoServico) {

    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativar_spinner = true;
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.ativar_spinner = false;
                },
                err => {
                    console.log(err.error);
                    this.ativar_spinner = false;
                }
            );
    }

    public cadastrar() {
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produto_json => {
                    console.log(produto_json);
                },
                err => {
                    console.log(err.error);
                }
            );
    }


}
