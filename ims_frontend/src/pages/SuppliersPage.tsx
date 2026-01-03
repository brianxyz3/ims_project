import React, { useState, useMemo } from 'react';
import { SupplierManagementHeader } from '../components/supplier/SupplierManagementHeader';
import { SupplierGrid } from '../components/supplier/SupplierGrid';
import type { Supplier } from '../components/supplier/SupplierGrid';

// Mock supplier data matching the UI in the image
const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: '1',
    companyName: 'Techtronics Inc.',
    supplierId: 'SUP-001',
    status: 'Active',
    contactName: 'Alex Johnson',
    contactEmail: 'alex.j@techtronics.com',
  },
  {
    id: '2',
    companyName: 'Global Parts Co.',
    supplierId: 'SUP-002',
    status: 'Active',
    contactName: 'Maria Garcia',
    contactEmail: 'm.garcia@globalparts.com',
  },
  {
    id: '3',
    companyName: 'Innovate Solutions',
    supplierId: 'SUP-003',
    status: 'Inactive',
    contactName: 'Chen Wei',
    contactEmail: 'chen.w@innovate.dev',
  },
  {
    id: '4',
    companyName: 'Office Essentials',
    supplierId: 'SUP-004',
    status: 'Active',
    contactName: 'Sarah Miller',
    contactEmail: 's.miller@office-essentials.net',
  },
];

interface SuppliersPageProps {}

const SuppliersPage: React.FC<SuppliersPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Filter suppliers based on search and filters
  const filteredSuppliers = useMemo(() => {
    return MOCK_SUPPLIERS.filter((supplier) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        supplier.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.supplierId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.contactEmail.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === 'all' || supplier.status.toLowerCase() === statusFilter;

        return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter, categoryFilter]);

  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };

  const handleSupplierClick = (supplier: Supplier) => {
    console.log('Supplier clicked:', supplier);
    // TODO: Open supplier details
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <SupplierManagementHeader
        onSearch={setSearchQuery}
        onStatusFilter={setStatusFilter}
        onCategoryFilter={setCategoryFilter}
        onAddSupplier={handleAddSupplier}
      />

      {/* Supplier Grid */}
      <SupplierGrid
        suppliers={filteredSuppliers}
        onSupplierClick={handleSupplierClick}
      />

      {/* Empty State */}
      {filteredSuppliers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground">No suppliers found</p>
        </div>
      )}
    </div>
  );
};

export { SuppliersPage };
