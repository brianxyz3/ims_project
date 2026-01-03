import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface EditInventoryHeaderProps {
  onSearch?: (query: string) => void;
  onStatusFilter?: (status: string) => void;
  onCategoryFilter?: (category: string) => void;
  onAddSupplier?: () => void;
}

const EditInventoryHeader: React.FC<EditInventoryHeaderProps> = ({
  
}) => {

  const navigate = useNavigate();


  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        {/* Title */}
        <div className="">
            <h1 className="text-3xl font-bold text-foreground">Stock In/Stock Out</h1>
            <p className="text-muted-foreground text-sm">Manage and record inventory movements.</p>
        </div>

        {/* Export Data Button */}
        <Button
          onClick={() => navigate("/ims/inventory")}
          className="h-10 bg-blue-700 hover:bg-blue-800 text-white font-medium"
        >
          Go To Inventory List
        </Button>
        {/* <Button
          onClick={onAddSupplier}
          className="h-7 bg-blue-700 hover:bg-blue-800 text-white font-medium"
        >
          Export Data
        </Button> */}
    </div>
  );
};

export { EditInventoryHeader };
