import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/producto/Catalogo/productos/productos.component'

const routes: Routes = [
  // {path:"",redirectTo : "catalogo",pathMatch:"full"},
  // { path: 'catalogo', component:ProductosComponent },
  // {path: '**', pathMatch: 'full', redirectTo:'catalogo'}
  {path:"",redirectTo : "Productos/catalogo",pathMatch:"full"},
  {
    path: 'Productos',
    component: ProductoComponent,
    children: [
      {
        path: 'catalogo',
        component:ProductosComponent ,
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
