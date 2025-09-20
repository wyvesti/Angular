import { ProductDto } from "../services/products.service";

export interface OrderDTO{
    id: string;
    items: ProductDto[];
    createdAt: string;
    total: number;
}