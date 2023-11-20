import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
