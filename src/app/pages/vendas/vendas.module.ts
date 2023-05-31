import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVendasComponent } from './list-vendas/list-vendas.component';
import { HomeVendasComponent } from './home-vendas/home-vendas.component';
import {RouterModule} from "@angular/router";
import {vendasRoutes} from "./vendas-routing.module";


@NgModule({
  declarations: [
    ListVendasComponent,
    HomeVendasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vendasRoutes)

  ]
})
export class VendasModule { }
