import React from 'react';
import type { Inventory } from './InventoryList'; 
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { MoveDown, MoveUp } from 'lucide-react';

interface InventoryRowProps extends Inventory {
  position: number;
  onClick?: () => void;
}

const InventoryRow: React.FC<InventoryRowProps> = ({
  productId,
  productName,
  location,
  date,
  stock,
  type,
  user,
  // onClick,
}) => {
  const getVariant = () => {
    switch (type) {
      case 'In':
        return 'up';
        break;
      default:
        return 'down';
    }
  };
  return (
    <tr className="text-xs" onClick={() => console.log(`clicked ${productName}`)}>
      <td className=''>
        <Badge
          variant={getVariant() as "up" | "down"}
          className={cn(
            "text-sm font-normal px-2 py-1",
          )}
        >
          {type === "In" ? <MoveUp/> : <MoveDown/>}{type}
        </Badge>
      </td>
      <td className="">{productName}</td>
      <td className="">{productId}</td>
      <td className='text-right text-foreground'>{type.toLowerCase() === "in" ? "+" : "-"} {stock}</td>          
      <td className=''>{location}</td>
      <td className=''>{date}</td>
      <td className=''>{user}</td>
      
    </tr>
  );
};

export { InventoryRow };