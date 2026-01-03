import React, { useState, useMemo } from 'react';
import { StaffManagementHeader } from '@/components/staff/StaffManagementHeader';
import { StaffGrid } from '@/components/staff/StaffGrid';

interface StaffPageProps {}

const StaffPage: React.FC<StaffPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Filter suppliers based on search and filters

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };


  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <StaffManagementHeader
        onSearch={setSearchQuery}
        onStatusFilter={setStatusFilter}
        onCategoryFilter={setCategoryFilter}
        onAddSupplier={handleAddSupplier}
      />

      {/* Staff Grid */}
      <StaffGrid/>

      {/* Empty State */}
      {/* {filteredSuppliers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground">No suppliers found</p>
        </div>
      )} */}
    </div>
  );
};

export { StaffPage };
