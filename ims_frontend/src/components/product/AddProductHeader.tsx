import React from 'react';
import { Save } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';


interface AddProductHeaderProps {
    onAddSupplier?: () => void;
}

const AddProductHeader: React.FC<AddProductHeaderProps> = ({
}) => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">Add New Product</h1>

      {/* Search and Filters Row */}
      <div className="hidden md:flex flex-col md:flex-row gap-3 items-stretch md:items-end">

        {/* Add Product Button */}
        <Button
          form='addProductForm'
          className="h-9 bg-blue-600 hover:bg-blue-700 text-background font-medium flex items-center gap-2"
        >
          <Save className="w-5 h-5" />
          Save Product
        </Button>
        
        {/* Delete Product Button */}
        <Button
          onClick={() => navigate("/ims/inventory")}
          className="h-9 bg-foreground/80 hover:bg-blue-700 text-background font-medium flex items-center gap-2"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export { AddProductHeader };
