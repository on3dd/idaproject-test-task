import { Product } from '@/@types/product';

interface mockDeletionResponse {
  message: string;
}

export function getProducts(): Promise<Product[]>;
export function deleteProducts(): Promise<mockDeletionResponse>;
