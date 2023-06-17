import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {vendasRoutes} from "./pages/vendas/vendas-routing.module";
import {FormVendasComponent} from "./pages/vendas/form-vendas/form-vendas.component";
import {ListVendasComponent} from "./pages/vendas/list-vendas/list-vendas.component";

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  {
    path: "",
    component: HomeComponent,
    children: [...vendasRoutes]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
