import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';


interface DashboardHeaderProps {
  onSearch?: (query: string) => void;
  onStatusFilter?: (status: string) => void;
  onCategoryFilter?: (category: string) => void;
  onAddSupplier?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
}) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row gap-6 md:justify-between">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>

      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end md:justify-end">

        {/* Add Order Button */}
        <Button
          onClick={() => navigate("/ims/inventory/edit")}
          className="h-9 bg-muted-foreground hover:bg-blue-700 text-background font-medium flex items-center"
        >
          Create Purchase Order
        </Button>
        
        {/* Add Product Button */}
        <Button
          onClick={() => navigate("/ims/products/add")}
          className="h-9 bg-blue-600 hover:bg-blue-700 text-background font-medium flex items-center"
        >
          Add New Product
        </Button>
      </div>
    </div>
  );
};

export { DashboardHeader };
