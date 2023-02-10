import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './Catalogo/productos/productos.component';
import { ProductoComponent } from './producto.component';

const routes: Routes = [

  {
    path: '',
    component: ProductoComponent,
    children: [
      {
        path: 'catalogo',
        component:ProductosComponent ,
      }
    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
