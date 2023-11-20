import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private selectedItemsSubject = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.selectedItemsSubject.asObservable();

  sendSelectedItems(products: Product[]){
    this.selectedItemsSubject.next(products);
  }
  
  constructor() { }
 
}
