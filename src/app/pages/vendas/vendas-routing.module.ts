import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeVendasComponent} from "./home-vendas/home-vendas.component";
import {ListVendasComponent} from "./list-vendas/list-vendas.component";
import {HomeComponent} from "../../core/home/home.component";
import {FormVendasComponent} from "./form-vendas/form-vendas.component";
import {VendasDeleteComponent} from "./vendas-delete/vendas-delete.component";

export const vendasRoutes: Routes = [
  {
    path: "vendas",
    component: HomeVendasComponent,
    children: [
      {
        path: "",
        component: ListVendasComponent,
      },
      {
        path: "new",
        component: FormVendasComponent,
      },
      {
        path: "excluir",
        component: VendasDeleteComponent,
      },
      {
        path: ":id",
        component: FormVendasComponent,
      }
    ]
  }
];

