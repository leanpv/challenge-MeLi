import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/products/detail/detail.component';
import { ListComponent } from './components/products/list/list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: '', component: ProductsComponent },
  { path: 'item/search/:param', component: ListComponent },
  { path: 'item/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
