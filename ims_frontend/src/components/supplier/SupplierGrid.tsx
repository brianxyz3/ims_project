import React from 'react';
import { SupplierCard } from './SupplierCard';

export interface Supplier {
  id: string;
  companyName: string;
  supplierId: string;
  status: 'Active' | 'Inactive';
  contactName: string;
  contactEmail: string;
}

interface SupplierGridProps {
  suppliers: Supplier[];
  onSupplierClick?: (supplier: Supplier) => void;
}

const SupplierGrid: React.FC<SupplierGridProps> = ({ suppliers, onSupplierClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {suppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          id={supplier.id}
          companyName={supplier.companyName}
          supplierId={supplier.supplierId}
          status={supplier.status}
          contactName={supplier.contactName}
          contactEmail={supplier.contactEmail}
          onClick={() => onSupplierClick?.(supplier)}
        />
      ))}
    </div>
  );
};

export { SupplierGrid };
