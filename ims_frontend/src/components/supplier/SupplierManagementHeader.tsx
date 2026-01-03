import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SupplierManagementHeaderProps {
  onSearch?: (query: string) => void;
  onStatusFilter?: (status: string) => void;
  onCategoryFilter?: (category: string) => void;
  onAddSupplier?: () => void;
}

const SupplierManagementHeader: React.FC<SupplierManagementHeaderProps> = ({
  onSearch,
  onStatusFilter,
  onCategoryFilter,
  onAddSupplier,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground">Supplier Management</h1>

      {/* Search and Filters Row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID, or contact…"
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
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        {/* Category Filter */}
        <Select onValueChange={onCategoryFilter}>
          <SelectTrigger className="w-full md:w-40 h-11 bg-muted/30 border-muted/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="software">Software</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>

        {/* Add Supplier Button */}
        <Button
          onClick={onAddSupplier}
          className="h-9 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Supplier
        </Button>
      </div>
    </div>
  );
};

export { SupplierManagementHeader };
