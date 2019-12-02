import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/products/search/search.component';
import { ListComponent } from './components/products/list/list.component';
import { DetailComponent } from './components/products/detail/detail.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
