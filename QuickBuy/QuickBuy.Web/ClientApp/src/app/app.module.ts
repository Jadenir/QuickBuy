import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component'
import { ProdutoComponent } from './produto/produto.component'
import { GuardaRotas } from './autorizacao/guarda.rotas'
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { ProdutoServico } from './servicos/produto/produto.servico';
import { PesquisaProdutodComponent } from './produto/pesquisa/pesquisa.produto.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { LojaProdutoComponent } from './loja/produto/loja.produto.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ProdutoComponent,
        LoginComponent,
        CadastroUsuarioComponent,
        PesquisaProdutodComponent,
        LojaPesquisaComponent,
        LojaProdutoComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        TruncateModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'produto', component: ProdutoComponent },
            { path: 'entrar', component: LoginComponent },
            { path: 'novo-usuario', component: CadastroUsuarioComponent },
            { path: 'pesquisar-produto', component: PesquisaProdutodComponent },
            { path: 'loja-produto', component: LojaProdutoComponent }
        ])
    ],
    providers: [UsuarioServico, ProdutoServico],
    bootstrap: [AppComponent]
})
export class AppModule { }

//{ path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
