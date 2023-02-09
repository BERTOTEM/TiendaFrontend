import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './Catalogo/productos/productos.component';

const routes: Routes = [
  {path:"",redirectTo : "catalogo",pathMatch:"full"},
  { path: 'catalogo', component:ProductosComponent },
  {path: '**', pathMatch: 'full', redirectTo:'catalogo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
