import { Asset } from "./asset.model";
import { Variant } from './variant.model'

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    assets: Asset[],
    variants: Variant[]
}