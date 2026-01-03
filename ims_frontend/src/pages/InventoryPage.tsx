import React, { useState, useMemo } from 'react';
import { InventoryHeader } from '@/components/product/InventoryHeader'; 
import type { Product } from '@/types/product';
import { ProductList } from '../components/product/ProductList';

// Mock products data matching the UI in the image
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    productName: "Wireless Mouse",
    productId: "PRD-001",
    productImageUrl: "https://picsum.photos/seed/mouse/200",
    location: "Warehouse A",
    price: 8500,
    stock: 42,
    status: "In Stock",
  },
  {
    id: "2",
    productName: "Mechanical Keyboard",
    productId: "PRD-002",
    productImageUrl: "https://picsum.photos/seed/keyboard/200",
    location: "Warehouse X",
    price: 27500,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "3",
    productName: "Office Chair",
    productId: "PRD-003",
    productImageUrl: "https://picsum.photos/seed/chair/200",
    location: "Warehouse B",
    price: 82000,
    stock: 12,
    status: "Low Stock",
  },
  {
    id: "4",
    productName: "Standing Desk",
    productId: "PRD-004",
    productImageUrl: "https://picsum.photos/seed/desk/200",
    location: "Warehouse Z",
    price: 155000,
    stock: 3,
    status: "Low Stock",
  },
  {
    id: "5",
    productName: "USB-C Hub",
    productId: "PRD-005",
    productImageUrl: "https://picsum.photos/seed/hub/200",
    location: "Warehouse A",
    price: 14500,
    stock: 97,
    status: "In Stock",
  },
  {
    id: "6",
    productName: "Noise Cancelling Headphones",
    productId: "PRD-006",
    productImageUrl: "https://picsum.photos/seed/headphones/200",
    location: "Warehouse S",
    price: 65000,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "7",
    productName: "LED Desk Lamp",
    productId: "PRD-007",
    productImageUrl: "https://picsum.photos/seed/lamp/200",
    location: "Warehouse B",
    price: 12500,
    stock: 21,
    status: "In Stock",
  },
  {
    id: "8",
    productName: "Portable SSD 1TB",
    productId: "PRD-008",
    productImageUrl: "https://picsum.photos/seed/ssd/200",
    location: "Warehouse A",
    price: 88000,
    stock: 5,
    status: "Low Stock",
  },
  {
    id: "9",
    productName: "Smartwatch Series 6",
    productId: "PRD-009",
    productImageUrl: "https://picsum.photos/seed/watch/200",
    location: "Warehouse Z",
    price: 120000,
    stock: 0,
    status: "Discontinued",
  },
  {
    id: "10",
    productName: "Bluetooth Speaker",
    productId: "PRD-010",
    productImageUrl: "https://picsum.photos/seed/speaker/200",
    location: "Warehouse A",
    price: 36000,
    stock: 64,
    status: "In Stock",
  },
];

interface InventoryPageProps {}

const InventoryPage: React.FC<InventoryPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  // Filter suppliers based on search and filters
  const filteredProductList = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.productId.toLowerCase().includes(searchQuery.toLowerCase())
      // Status filter
      const matchesStatus =
        statusFilter === 'all' || product.status === statusFilter;

        return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter, locationFilter]);

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product);
    // TODO: Open supplier details
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <InventoryHeader
        onSearch={setSearchQuery}
        onStatusFilter={setStatusFilter}
        onLocationFilter={setLocationFilter}
        onAddSupplier={handleAddSupplier}
      />

      {/* Product Grid */}
      <ProductList
        products={filteredProductList}
        
        onProductClick={handleProductClick}
      />

      {/* Empty State */}
      {filteredProductList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  );
};

export { InventoryPage };
