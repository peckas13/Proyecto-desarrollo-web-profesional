import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { CarCrudComponent } from './home/home/car-crud/car-crud.component';
import { HomeComponent } from './home/home/home.component';
import { ListProductsComponent } from './home/home/list-products/list-products.component';
import { OrdersComponent } from './home/home/orders/orders.component';
import { PedidosComponent } from './home/home/pedidos/pedidos.component';
import { ProductComponent } from './home/home/product/product.component';
import { RegisterComponent } from './home/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home/products', pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'products', component: ListProductsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'cart', component: CarCrudComponent, canActivate: [LoginGuard] },
      { path: 'pedido', component: PedidosComponent, canActivate: [LoginGuard] },
      { path: 'mis-pedidos', component: OrdersComponent, canActivate: [LoginGuard] },
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
