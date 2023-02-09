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
  private url: string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getPage(page:number): Observable<ProductI[]>{
    let direction = this.url + 'pagination/' + page;
    return this.http.get<ProductI[]>(direction);
  }
  getProduct(id: any): Observable<ProductI> {
    let direction = this.url + 'get/' + id;
    return this.http.get<ProductI>(direction);
  }
  getProductName(name: any): Observable<ProductI> {
    let direction = this.url + 'getName/' + name;
    return this.http.get<ProductI>(direction);
  }
  saveProduct(product: ProductI): Observable<any> {
    let direction = this.url + 'create';
    return this.http.post<any>(direction, product, {
      responseType: 'text' as 'json',
    });
  }
  editProduc(product: ProductI): Observable<any> {
    let direction = this.url + 'update';
    return this.http.post<any>(direction, product);
  }
  updateIDInventario(id: any, quantity: any): Observable<any> {
    let direction = this.url + 'update/'+id+'/'+quantity;
    return this.http.patch<any>(direction,{
      responseType: 'text' as 'json',
    });
  }
  deleteLogico(id: any): Observable<any> {
    let direction = this.url + 'changeState/'+id;
    return this.http.patch<any>(direction,{
      responseType: 'text' as 'json',
    });
  }





}
