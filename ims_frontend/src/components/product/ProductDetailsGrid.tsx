import React from 'react';
import type { Supplier } from '@/types/supplier';
import type { InventoryItem } from '@/types/inventoryItem';
import { ProductDetailsCard } from './ProductDetailsCard';
import { ProductInventoryHistory } from './ProductInventoryHistory';

interface ProductDetailsGridProps {
  product: InventoryItem;
  onSupplierClick?: (supplier: Supplier) => void;
}

const stockHistory = [
  {
    date: "2025-01-12",
    event: "Stock Added",
    quantity: 30,
    stockLevel: "120 units",
    txnId: "TXN-001",
  },
  {
    date: "2025-02-03",
    event: "Stock Removed",
    quantity: -10,
    stockLevel: "110 units",
    txnId: "TXN-002",
  },
  {
    date: "2025-02-15",
    event: "New Shipment Arrived",
    quantity: 50,
    stockLevel: "160 units",
    txnId: "TXN-003",
  },
  {
    date: "2025-03-01",
    event: "Damaged Items Removed",
    quantity: -3,
    stockLevel: "157 units",
    txnId: "TXN-004",
  },
  {
    date: "2025-03-18",
    event: "Manual Stock Adjustment",
    quantity: 5,
    stockLevel: "162 units",
    txnId: "TXN-005",
  },
];


const ProductDetailsGrid: React.FC<ProductDetailsGridProps> = ({ product }) => {

  const priceMargin: string = (((product.retailPrice - product.costPrice) / product.costPrice) * 100).toFixed(2) + '%';
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 md:row-2 gap-8">
      <div className="md:col-span-6 bg-muted/10 md:border border-border/80 rounded-xl overflow-hidden">
        <div className="h-full p-3">
          <img
            src={product.productImageUrl}
            alt={product.productName}
            className="h-full mx-auto object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="grid grid-row-3 gap-8">
          <ProductDetailsCard
            dataObject={{
            'Stock Level': product.stock,
            "SKU": product.productId,
            'Location': product.location,
            'Supplier': product.supplierName,
        }}
            title='Stock Information'
            status={product.status}
          />
          <ProductDetailsCard
            title='Pricing Details'
            dataObject={{
              'Retail Price': product.retailPrice,
              'Cost Price': product.costPrice,
              'Price Margin': priceMargin,
            }}
          />
        </div>
  
      </div>

      <div className="md:col-span-6">
        <ProductInventoryHistory
          inventoryHistory={stockHistory}
        />
      </div>
    </div>
  );
};

export { ProductDetailsGrid };
