import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoModule } from './producto/producto.module';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';
import { ProductoRoutingModule } from './producto/producto-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EcommerceRoutingModule } from './ecommerce/ecommerce-routing.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';


@NgModule({
  declarations: [ProductoComponent,EcommerceComponent],
  exports:[ProductoComponent,EcommerceComponent],
  imports: [
    CommonModule,
    ProductoModule,
    RouterModule,
    ProductoRoutingModule,
    RouterModule,
    EcommerceRoutingModule,
    EcommerceModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ]
})
export class PagesModule { }
