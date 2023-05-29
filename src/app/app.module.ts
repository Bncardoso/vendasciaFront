import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaVendasComponent } from './pages/lista-vendas/lista-vendas.component';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiModule} from "./api/api.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
