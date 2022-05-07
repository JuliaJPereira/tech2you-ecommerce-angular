import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  carrinhoProdutos: Produtos[] = [
    {
      "id": 0,
      "name": "Product Number 0",
      "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399",
      "oldPrice": 335,
      "price": 317,
      "description": "Product long description number 0 just to make more than one like of text.",
    },
    {
      "id": 1,
      "name": "Product Number 1",
      "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538",
      "oldPrice": 138,
      "price": 111,
      "description": "Product long description number 1 just to make more than one like of text.",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
