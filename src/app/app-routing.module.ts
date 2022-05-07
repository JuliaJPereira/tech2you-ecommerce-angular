import { ProdutosComponent } from './components/produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FinalizarCompraComponent } from './components/finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'finalizar-compra', component: FinalizarCompraComponent},
  {path: 'finalizar-compra', component: FinalizarCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
