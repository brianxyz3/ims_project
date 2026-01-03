import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface StockTransactionsHeaderProps {
  onSearch?: (query: string) => void;
  onStatusFilter?: (status: string) => void;
  onLocationFilter?: (location: string) => void;
  onAddSupplier?: () => void;
}

const StockTransactionsHeader: React.FC<StockTransactionsHeaderProps> = ({
  onSearch,
  onStatusFilter,
  onAddSupplier,
}) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">Stock Transactions</h1>

      {/* Search and Filters Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by transaction id..."
            className="pl-12 h-11 bg-muted/30 border-muted/50"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        {/* Status Filter */}
        <Select onValueChange={onStatusFilter}>
          <SelectTrigger className="w-full md:w-40 h-11 bg-muted/30 border-muted/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="In Stock">In Stock</SelectItem>
            <SelectItem value="Low Stock">Low Stock</SelectItem>
            <SelectItem value="Out of Stock">Out of Stock</SelectItem>
            <SelectItem value="Discontinued">Discontinued</SelectItem>
          </SelectContent>
        </Select>

        {/* Add Product Button */}
        <Button
          onClick={() => navigate("/ims/products/add")}
          className="h-10 bg-green-700/80 hover:bg-green-800/80 text-white font-medium flex items-center gap-2"
        >
          <Plus className="size-5" />
          Add New Product
        </Button>
        
        {/* Edit Inventory Button */}
        <Button
          onClick={() => navigate("/ims/inventory/edit")}
          className="h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2"
        >
          Edit Inventory
        </Button>
      </div>
    </div>
  );
};

export { StockTransactionsHeader };
