import { Produtos } from './models/produtos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getListProdutos(){
    let url:string = `${environment.urlBase}/products`;
    return this.http.get<{ products: Produtos[]}>(url);
  }

  getProductByNameOrId(nameOrId: string){
    let url:string = `${environment.urlBase}/products/${nameOrId}/`;

    return this.http.get<{ products: Produtos[]}>(url);
  }
}
