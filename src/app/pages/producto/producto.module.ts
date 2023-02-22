import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { RouterModule } from '@angular/router';
import { CrearComponent } from './Catalogo/crear/crear.component';
import { EditComponent } from './Catalogo/edit/edit.component';
import { ProductosComponent } from './Catalogo/productos/productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Catalogo/navbar/navbar.component';
import { CrearAdminComponent } from './Catalogo/crear-admin/crear-admin.component';


@NgModule({
  declarations: [

  CrearComponent,
  EditComponent,
  ProductosComponent,
  NavbarComponent,
  CrearAdminComponent
  ],
  exports:[CrearComponent,
    EditComponent,
    ProductosComponent ],
  imports: [
    CommonModule,
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
export class ProductoModule { }
