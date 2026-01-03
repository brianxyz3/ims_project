import React from 'react';
import { Mail, User } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/utils';
import type { Supplier } from './SupplierGrid';

interface SupplierCardProps extends Supplier{
  onClick?: () => void;
}

const SupplierCard: React.FC<SupplierCardProps> = ({
  companyName,
  supplierId,
  status,
  contactName,
  contactEmail,
  onClick,
}) => {
  return (
    <Card
      className={cn(
        "p-5 hover:shadow-lg hover:border-border/80 cursor-pointer hover:transition-all hover:duration-200",
        "border border-border/50 bg-linear-to-br from-background to-background/80"
      )}
      onClick={onClick}
    >
      {/* Header with Company Name and Status */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-foreground truncate">{companyName}</h3>
        <Badge
          variant={status.toLocaleLowerCase() as "active" | "inactive"}
          className={cn(
            "text-xs font-medium",
          )}
        >
          {status}
        </Badge>
      </div>

      {/* Supplier ID */}
      <p className="text-xs text-muted-foreground mb-4">ID: {supplierId}</p>

      {/* Divider */}
      <div className="h-px bg-border/30 my-4"></div>

      {/* Contact Information */}
      <div className="space-y-3">
        {/* Contact Name */}
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-foreground">{contactName}</span>
        </div>

        {/* Contact Email */}
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground truncate">{contactEmail}</span>
        </div>
      </div>
    </Card>
  );
};

export { SupplierCard };
