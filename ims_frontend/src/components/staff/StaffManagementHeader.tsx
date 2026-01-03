import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


interface StaffManagementHeaderProps {
  onSearch?: (query: string) => void;
  onStatusFilter?: (status: string) => void;
  onCategoryFilter?: (category: string) => void;
  onAddSupplier?: () => void;
}

const StaffManagementHeader: React.FC<StaffManagementHeaderProps> = ({
  onSearch,
  onAddSupplier,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>

      {/* Search and Filters Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative max-w-96 flex-1">
          <Search className="absolute left-4 top-2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID…"
            className="pl-12 h-9 bg-muted/30 border-muted/50"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>



        {/* Add Supplier Button */}
        <Button
          onClick={onAddSupplier}
          className="h-9 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Staff
        </Button>
      </div>
    </div>
  );
};

export { StaffManagementHeader };
