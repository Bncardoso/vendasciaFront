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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { FormVendasComponent } from './form-vendas/form-vendas.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListVendasComponent,
    HomeVendasComponent,
    FormVendasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vendasRoutes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class VendasModule { }
