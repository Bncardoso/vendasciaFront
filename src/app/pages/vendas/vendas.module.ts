import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVendasComponent } from './list-vendas/list-vendas.component';
import { HomeVendasComponent } from './home-vendas/home-vendas.component';
import {RouterModule} from "@angular/router";
import {vendasRoutes} from "./vendas-routing.module";
import {MatCardModule} from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListVendasComponent,
    HomeVendasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vendasRoutes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class VendasModule { }
