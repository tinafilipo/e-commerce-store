import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  constructor(private apiService: ApiService){}
  
  ngOnInit(){
    this.apiService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products.data.products.items;
      }
    });
  }

}
