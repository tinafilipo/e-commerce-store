import { Product } from "./product.model";

export interface ProductsResponse {
    data: {products: {
        items: Product[]
    }}
}