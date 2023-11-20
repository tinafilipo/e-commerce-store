import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private productSubject = new BehaviorSubject<Product | null>(null);
  public product$: Observable<Product | null> = this.productSubject.asObservable();

  constructor() { }

  sendProduct(product: Product){
    this.productSubject.next(product);
  }
}
