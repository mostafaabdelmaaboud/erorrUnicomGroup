import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToAddShopRoutingModule } from './to-add-shop-routing.module';
import{ ToAddShopComponent } from './to-add-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialFormModule } from '../material/materialForm.module';
@NgModule({
  declarations: [
    ToAddShopComponent
  ],
  imports: [
    CommonModule,
    ToAddShopRoutingModule,
    FormsModule,
    MaterialFormModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ]
})
export class ToAddShopModule { }
