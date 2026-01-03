import React from 'react';
import type { InventoryHistory } from './ProductInventoryHistory';

interface ProductInventoryHistoryRowProps extends InventoryHistory{
    
}

const ProductInventoryHistoryRow: React.FC<ProductInventoryHistoryRowProps> = ({
    date,
    event,
    quantity,
    stockLevel,
    txnId,
}) => {
//   const getVariant = () => {
//     switch (status) {
//       case 'In Stock':
//         return 'active';
//       case 'Out of Stock':
//         return 'destructive';
//       case 'Low Stock':
//         return 'warning';
//       default:
//         return 'inactive';
//     }
//   };
  return (
    <tr className="text-sm">
      <td className='truncate text-xs'>
        <span>{date}</span>
      </td>
      <td className=''>
        <span>{event}</span>
      </td>
      <td className=''>
        <span>{quantity}</span>
      </td>
      <td className=''>
        <span>{stockLevel}</span>
      </td>
      <td className=''>
        <span>{txnId}</span>
      </td>
     
    </tr>
  );
};

export { ProductInventoryHistoryRow };