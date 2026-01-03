import React from 'react';
import { AddProductHeader } from '@/components/product/AddProductHeader';
import { AddProductGrid } from '@/components/product/AddProductGrid';



interface AddProductPageProps {}

const AddProductPage: React.FC<AddProductPageProps> = () => {

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };


  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <AddProductHeader
        onAddSupplier={handleAddSupplier}
      />

      {/* New Product Form Grid */}
      <AddProductGrid
      />

    </div>
  );
};

export { AddProductPage };
