import React from 'react';
import { Pen, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';


interface ProductDetailsHeaderProps {
    onAddSupplier?: () => void;
    productName: string;
}

const ProductDetailsHeader: React.FC<ProductDetailsHeaderProps> = ({
    onAddSupplier,
    productName,
}) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">{productName}</h1>

      {/* Search and Filters Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end">

        {/* Edit Product Button */}
        <Button
          onClick={() => navigate("edit")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2"
        >
          <Pen className="w-5 h-5" />
          Edit Product
        </Button>
        
        {/* Delete Product Button */}
        <Button
          onClick={onAddSupplier}
          className="bg-muted/80 hover:bg-foreground/30 text-foreground font-medium flex items-center gap-2"
        >
          <Trash2 className="w-5 h-5" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export { ProductDetailsHeader };
