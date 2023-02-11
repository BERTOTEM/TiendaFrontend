import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from '../../producto/models/product-i';

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
  
}
