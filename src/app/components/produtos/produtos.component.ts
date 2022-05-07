import { ServiceService } from '../../service.service'
import { Produtos } from 'src/app/models/produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  listProducts = [] as Produtos[]

  constructor(private route: ActivatedRoute,
    private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getListProdutos().subscribe({
      next: (value) => {
        this.listProducts = value.products;
      }
    })
    
  }

}
