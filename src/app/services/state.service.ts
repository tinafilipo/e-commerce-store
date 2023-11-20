import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state$ = new BehaviorSubject<Product[]>([]);
  constructor() { }
}
