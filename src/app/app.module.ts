import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './Catalogo/productos/productos.component';
import { EditComponent } from './Catalogo/edit/edit.component';
import { CrearComponent } from './Catalogo/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    EditComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
