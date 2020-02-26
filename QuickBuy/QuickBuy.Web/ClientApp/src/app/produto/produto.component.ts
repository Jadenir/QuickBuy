import { Component } from "@angular/core";

@Component({
    selector: "app-produto",
    template: "<html><body>{{ obterNome() }}</body></html>"
})

export class ProdutoComponent {
    id: number;
    public nome: string;
    public descricao: string;
    preco: number;

    public obterNome(): string {
        return "Samsung";
    }

}
