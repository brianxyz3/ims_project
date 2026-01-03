import React, { useState } from 'react';
import '../../stylesheets/tables.css';
import TableHeader from '../tables/TableHeader';
import { ProductInventoryHistoryRow } from './ProductInventoryHistoryRow';

export interface InventoryHistory {
  id?: string;
  date: string;
  event: string;
  quantity: number;
  stockLevel: string;
  txnId: string;
}

interface ProductInventoryHistoryProps {
  inventoryHistory: InventoryHistory[];
}

const ProductInventoryHistory: React.FC<ProductInventoryHistoryProps> = ({ inventoryHistory }) => {

  const [showSupplierInfo, setShowSupplierInfo] = useState<boolean>(
    
  );

  return (
    <div className="border border-border/80 text-muted-foreground rounded-xl py-2">
      <div className="flex px-5 font-medium">
        <button type='button' title='show inventory history' onClick={() => setShowSupplierInfo(false)} className={`transition-colors duration-200 p-3 ${!showSupplierInfo && " border-b-2 border-blue-400/90 text-blue-400/90"}`}>Inventory History</button>
        <button type='button' title='show supplier info' onClick={() => setShowSupplierInfo(true)} className={`transition-colors duration-200 p-3 ${showSupplierInfo && " border-b-2 border-blue-400/90 text-blue-400/90"}`}>Supplier Info</button>
      </div>
      <div className="p-5 border-t border-border/80">
        {!showSupplierInfo ? 
        <div className="overflow-auto">
          <TableHeader tableHeaderObj={[
              {title: "date"},
              {title: "event"},
              {title: "quantity"},
              {title: "new stock level",
              },
              {title: "reference"},
          ]}>
            {inventoryHistory.map((inventoryMovement) => (
              <ProductInventoryHistoryRow
                key={inventoryMovement.txnId}
                event={inventoryMovement.event}
                date={inventoryMovement.date}
                quantity={inventoryMovement.quantity}
                stockLevel={inventoryMovement.stockLevel}
                txnId={inventoryMovement.txnId}
              />
            ))}
          </TableHeader>
        </div>
        : <div>
          Supplier history
        </div>
        }
      </div>
    </div>
  );
};

export { ProductInventoryHistory };
