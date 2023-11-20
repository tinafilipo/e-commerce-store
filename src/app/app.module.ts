import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { HomeModule } from './home/home/home.module';
import { CartModule } from './cart/cart.module';
import { ProductDataService } from './services/product-data.service';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HomeModule,
    CartModule,
    NoopAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [ProductDataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
