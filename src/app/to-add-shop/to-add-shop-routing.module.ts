import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToAddShopComponent } from './to-add-shop.component';
const routes: Routes = [
  {path: "", component: ToAddShopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToAddShopRoutingModule { }
