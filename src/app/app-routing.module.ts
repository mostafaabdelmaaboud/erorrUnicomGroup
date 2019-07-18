import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToGetAllShopComponent } from './to-get-all-shop/to-get-all-shop.component';

const routes: Routes = [
  {path: "", component: ToGetAllShopComponent},
  {path: "createShop", loadChildren: () => import("./to-add-shop/to-add-shop.module").then(m => m.ToAddShopModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
