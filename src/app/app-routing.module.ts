import { ProdutosComponent } from './components/produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FinalizarCompraComponent } from './components/finalizar-compra/finalizar-compra.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'finalizar-compra', component: FinalizarCompraComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
