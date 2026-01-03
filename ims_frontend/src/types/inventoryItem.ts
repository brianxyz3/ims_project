export interface InventoryItem {
    id?: string;
    productName: string;
    productId: string;
    productImageUrl?: string;
    location: string;
    retailPrice: number;
    costPrice: number;
    stock: number;
    supplierName?: string;
    status: 'In Stock' | 'Out of Stock' | 'Discontinued' | 'Low Stock';
}