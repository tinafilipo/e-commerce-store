import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  
  product!: Product;
  state: Product[] = [];
  addedItems: Array<Product> = [];

  constructor(private cartService: CartService,
              private productDataService: ProductDataService,
              private route: ActivatedRoute,
              private apiService: ApiService,
              private stateService: StateService,
              private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.apiService.getProductById(res['id']).subscribe({
        next: (response) => {
          this.product = response.data.product;
        },
        error: (error) => {
          console.error('GraphQL error:', error);
        }
      })
    })
  }  

  onAddItemToCart(): void {
    this.productDataService.sendProduct(this.product);
    
    if(this.stateService.state$.getValue()) {
      this.state = this.stateService.state$.getValue();
      this.addedItems = [...this.state];
    }

    this.productDataService.product$.subscribe((item) => {
      if (item) {
     
        if (!this.checkIfProductAlreadyAdded(item.id)) {
          this.addedItems = [...this.addedItems, item];
          this.stateService.state$.next(this.addedItems);
          this.snackBar.open('Item added to cart.', 'OK', { duration: 2000 }); 
        }
      }
    });
    
    this.cartService.sendSelectedItems(this.addedItems); 
  }

  checkIfProductAlreadyAdded(id: string): boolean {
    const exists = this.addedItems.find(item => item.id === id);
    return (exists) ?  true : false;
  }
}
