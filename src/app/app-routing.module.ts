import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/producto/Catalogo/productos/productos.component'
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { ProductosCarritoComponent } from './pages/ecommerce/CatalogoCompras/productos-carrito/productos-carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuyComponent } from './pages/ecommerce/CatalogoCompras/buy/buy.component';
import { FacturaComponent } from './pages/ecommerce/CatalogoCompras/factura/factura.component';
import { HistorialCompraComponent } from './pages/ecommerce/CatalogoCompras/historial-compra/historial-compra.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuardService } from './ServicioLogin/AuthGuard/auth-guard-service.service';


import {RoleGuardServiceService as RoleGuard} from './ServicioLogin/RoleGuard/role-guard-service.service';
import { ErroNotFoundComponent } from './erro-not-found/erro-not-found.component';


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
         canActivate : [RoleGuard],
         data:{
          expectedRole:"ROLE_ADMIN"
        }
      }
    ]
  },
  {
    path: 'Ecommers',
    component: EcommerceComponent,
    children: [
      {
        path: 'catalogoCompra',
        component:ProductosCarritoComponent , canActivate : [AuthGuardService]
      },
      {
        path: 'Compra',
        component:BuyComponent , canActivate : [AuthGuardService]
      },
      {
        path: 'Factura',
        component:FacturaComponent , canActivate : [AuthGuardService]
      },
      {
        path: 'Historial',
        component:HistorialCompraComponent , canActivate : [AuthGuardService]
      },
    ],
  },
  {path: '**', component:ErroNotFoundComponent}
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
