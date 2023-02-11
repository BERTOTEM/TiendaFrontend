import { Component } from '@angular/core';
import { InvoiceI } from '../../models/Invoice-i';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {

  InvoiceCrear: InvoiceI={
    id:"",
    Idtype:"",
    Date:"" ,
    clientId:"",
    ClientName:"",
    products:[],


  }

}
