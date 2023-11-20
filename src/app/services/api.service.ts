import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response.model';
import { ProductsResponse } from '../models/products-response.model';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private graphqlEndpoint = "https://demo.vendure.io/shop-api";

  constructor(private http: HttpClient) { }

  getProductById(productId: string): Observable<ProductResponse> {
    const graphqlQuery = `
    query GetProductById($productId: ID) {
      product(id: $productId) {
        id
        name
        description
          assets {
                source 
                width
                height
              }
          variants {
              price
            }
      }
    }
    `;
    
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const variables = {
      productId,
    };

    return this.http.post<ProductResponse>(this.graphqlEndpoint, { query: graphqlQuery, variables }, httpOptions);

  }

  getAllProducts(): Observable<ProductsResponse>{
    const graphqlQuery = `
      query {
        products(options: {take: 100}){
          items{
            id
            name
            description
              assets {
                source 
                width
                height
              }
            variants {
              price
            }
          }
        }
      }
    `;
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.http.post<ProductsResponse>(this.graphqlEndpoint, { query: graphqlQuery }, httpOptions);
  }
}


