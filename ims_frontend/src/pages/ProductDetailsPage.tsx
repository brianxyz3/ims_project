import React from 'react';
import { ProductDetailsGrid } from '@/components/product/ProductDetailsGrid';
import type { Supplier } from '../components/supplier/SupplierGrid';
import { ProductDetailsHeader } from '@/components/product/ProductDetailsHeader';
import type { InventoryItem } from '@/types/inventoryItem';

// Mock Inventory Item data matching the UI in the image
const item: InventoryItem = {
  id: "1",
  productName: "Wireless Mouse",
  productId: "PRD-001",
  productImageUrl: "https://picsum.photos/seed/keyboard/200",
  location: "Warehouse A",
  retailPrice: 8500,
  costPrice: 5000, // added to match the type
  stock: 42,
  supplierName: 'Techtronics Inc.',
  status: "In Stock",
};


interface ProductDetailsPageProps {}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [categoryFilter, setCategoryFilter] = useState('all');

  // Filter suppliers based on search and filters

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };

  const handleSupplierClick = (supplier: Supplier) => {
    console.log('Supplier clicked:', supplier);
    // TODO: Open supplier details
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <ProductDetailsHeader
        productName={item.productName}
        onAddSupplier={handleAddSupplier}
      />

      {/* Supplier Grid */}
      <ProductDetailsGrid
        product={item}
        onSupplierClick={handleSupplierClick}
      />

    </div>
  );
};

export { ProductDetailsPage };
