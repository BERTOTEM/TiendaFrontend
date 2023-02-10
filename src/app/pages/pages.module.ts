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


@NgModule({
  declarations: [ProductoComponent],
  exports:[ProductoComponent],
  imports: [
    CommonModule,
    ProductoModule,
    RouterModule,
    ProductoRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ]
})
export class PagesModule { }
