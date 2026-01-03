import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/utils';

interface ProductDetailsCardProps{
    title: string;
    dataObject: Record<string, any>;
    stock?: number;
    location?: string;
    costPrice?: number;
    retailPrice?: number;
    status?: 'In Stock' | 'Out of Stock' | 'Discontinued' | 'Low Stock';
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
    title,
    dataObject,
    status,
}) => {

    const getVariant = () => {
    switch (status) {
      case 'In Stock':
        return 'active';
      case 'Out of Stock':
        return 'destructive';
      case 'Low Stock':
        return 'warning';
      default:
        return 'inactive';
    }
  };


  return (
    <Card
      className={cn(
        "p-5 hover:shadow-lg hover:border-border/80 cursor-pointer text-sm hover:transition-all hover:duration-200",
        "border border-border/50 text-[13px] font-medium gap-2.5 bg-linear-to-br from-background to-background/80"
      )}
    >
        <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>

        {Object.entries(dataObject).map(([key, value], index) => (
          <div key={index} className="flex justify-between items-start">
            <p className="text-muted-foreground">{key}</p>
            <div className={`items-end ${status && index === 0 && 'flex font-medium text-sm gap-1.5'}`}>
              {value}
              {status && index === 0 && <Badge
              variant={getVariant()}
              className={cn(
                  "text-[10px]",
              )}
              >
              {status}
              </Badge>}
            </div>
          </div>
        ))}

    </Card>
  );
};

export { ProductDetailsCard };
