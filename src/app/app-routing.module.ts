import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/producto/Catalogo/productos/productos.component'
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { ProductosCarritoComponent } from './pages/ecommerce/CatalogoCompras/productos-carrito/productos-carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuyComponent } from './pages/ecommerce/CatalogoCompras/buy/buy.component';
import { FacturaComponent } from './pages/ecommerce/CatalogoCompras/factura/factura.component';
import { HistorialCompraComponent } from './pages/ecommerce/CatalogoCompras/historial-compra/historial-compra.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  // {path:"",redirectTo : "catalogo",pathMatch:"full"},
  // { path: 'catalogo', component:ProductosComponent },
  // {path: '**', pathMatch: 'full', redirectTo:'catalogo'}
  {path:"",redirectTo : "inicio",pathMatch:"full"},
  { path: 'inicio', component:InicioComponent },
  { path: 'Registro', component:RegistroComponent },
  {
    path: 'Productos',
    component: ProductoComponent,
    children: [
      {
        path: 'catalogo',
        component:ProductosComponent ,
      }
    ]
  },
  {
    path: 'Ecommers',
    component: EcommerceComponent,
    children: [
      {
        path: 'catalogoCompra',
        component:ProductosCarritoComponent ,
      },
      {
        path: 'Compra',
        component:BuyComponent ,
      },
      {
        path: 'Factura',
        component:FacturaComponent ,
      },
      {
        path: 'Historial',
        component:HistorialCompraComponent ,
      },
    ],
  },
  {path: '**', pathMatch: 'full', redirectTo:'inicio'}
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
