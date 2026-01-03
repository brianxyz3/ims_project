import React from 'react';
import { EditProductHeader } from '@/components/product/EditProductHeader';
import { EditProductForm } from '@/components/product/EditProductForm';



interface EditProductPageProps {}

const EditProductPage: React.FC<EditProductPageProps> = () => {

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };


  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <EditProductHeader
        onAddSupplier={handleAddSupplier}
      />

      {/* New Product Form Grid */}
      <EditProductForm/>

    </div>
  );
};

export { EditProductPage };
