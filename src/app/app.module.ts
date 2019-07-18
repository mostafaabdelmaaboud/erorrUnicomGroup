import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { ToGetAllShopComponent } from './to-get-all-shop/to-get-all-shop.component';
import { MatSidenavModule, MatListModule, MatTableModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShopeEffect } from './Store/effects/shop.effects';
import { ShopReducer } from './Store/Reducer/shop.reducer';
import {MatDialogModule} from '@angular/material/dialog';
import { InfoShopComponent } from './info-shop/info-shop.component';
import { MaterialFormModule } from './material/materialForm.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    ToGetAllShopComponent,
    InfoShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MaterialFormModule,
    MatDialogModule,

    StoreModule.forRoot({"DataShops": ShopReducer}),
    EffectsModule.forRoot([ShopeEffect]),
    !environment.production ? StoreDevtoolsModule.instrument(): []
  ],
  entryComponents: [
    InfoShopComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
