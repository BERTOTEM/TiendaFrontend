import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../models/product-i';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  push(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private url: string = 'http://localhost:9090/';

  constructor(private http:HttpClient) { }


  getAll(): Observable<ProductI[]>{
    let direction = this.url + 'getAllProducts' ;
    return this.http.get<ProductI[]>(direction);
  }

  getProductName(name: any): Observable<ProductI> {
    let direction = this.url + 'getName/' + name;
    return this.http.get<ProductI>(direction);
  }

  editProduc(product: ProductI): Observable<ProductI> {
    let direction = this.url + 'updateProductAll';
    return this.http.put<any>(direction, product,{
      responseType: 'text' as 'json'
    });
  }
  updateIDInventario(id: any, quantity: any): Observable<ProductI> {
    let direction = this.url + 'update/'+id+'/'+quantity;
    return this.http.patch<any>(direction,{
      responseType: 'text' as 'json',
    });
  }
  deleteLogico(id: any): Observable<ProductI> {
    let direction = this.url + 'changeState/'+id;
    return this.http.patch<any>(direction,{
      responseType: 'text' as 'json',
    });
  }
  createProduct(product : ProductI) : Observable<ProductI> {
    let direction = this.url + 'createProduct';
    return this.http.post<any>(direction, product, {
      responseType : 'text' as 'json'
    })
  }





}
