import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../../producto/models/product-i';
import { InvoiceI } from '../models/Invoice-i';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url: string = 'http://localhost:9090/';

  constructor(private http:HttpClient) { }

  getPage(page:number): Observable<ProductI[]>{
    let direction = this.url + 'pagination/' + page;
    return this.http.get<ProductI[]>(direction);
  }
  getProductName(name: any): Observable<ProductI> {
    let direction = this.url + 'getName/' + name;
    return this.http.get<ProductI>(direction);
  }

  getProductById(id:string) : Observable<ProductI> {
    let direction = this.url +'get/'+id;
    return this.http.get<ProductI>(direction);
  }


  updateIDInventario(id: any, quantity: any): Observable<ProductI> {
    let direction = this.url + 'update/'+id+'/'+quantity;
    return this.http.patch<any>(direction,{
      responseType: 'text' as 'json',
    });
  }

  createInvoice(invoice : InvoiceI) : Observable<InvoiceI> {
    let direction = this.url + 'create';
    return this.http.post<any>(direction, invoice, {
      responseType : 'text' as 'json'
    })
  }



}
