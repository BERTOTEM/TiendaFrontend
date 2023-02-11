import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductosCarritoComponent } from './CatalogoCompras/productos-carrito/productos-carrito.component';
import { EcommerceComponent } from './ecommerce.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './CatalogoCompras/navbar/navbar.component';


@NgModule({
  declarations: [
    ProductosCarritoComponent,
    NavbarComponent,

  ],
  exports:[ProductosCarritoComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ]
})
export class EcommerceModule { }
