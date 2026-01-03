export interface Product {
  id: string;
  productName: string;
  productId: string;
  productImageUrl?: string;
  location: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Out of Stock' | 'Discontinued' | 'Low Stock';
}