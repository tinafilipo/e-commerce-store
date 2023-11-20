import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  product$!: Product ;
  displayedColumns: Array<string> = ["product", "name", "price", "total"];
  state: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.products$.subscribe({
      next: (response) => {
        this.state = response;
        this.totalPrice = this.getTotal(this.state);
      }
    })
  }

  getTotal(items: Array<Product>): number{
    return  items.reduce((acc, curr) => acc + curr.variants[0].price, 0)  
  }
  
}
