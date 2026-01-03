import React from 'react';
import { InventoryRow } from './InventoryRow';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import TableHeader from '../tables/TableHeader';

export interface Inventory {
  id?: string;
  productName: string;
  productId: string;
  user: string;
  location: string;
  date: string; //to convert to date type later
  stock: number;
  type: 'In' | 'Out';
}

interface InventoryListProps {
  title: string;
  inventory: Inventory[];
  onProductClick?: (inventory: Inventory) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ inventory, title, onProductClick }) => {
  return (
    <div className="mt-6 rounded-xl border border-border/80 overflow-hidden">
      <h2 className="text-foreground p-5 text-xl font-medium">{title}</h2>
      <div className="overflow-auto">
        <TableHeader tableHeaderObj={[
            {title: "Type"},
            {title: "Product"},
            {title: "SKU"},
            {title: "Quantity"},
            {title: "Source Location"},
            {title: "Date"},
            {title: "User"},
        ]}>
            {inventory.map((product, index) => (
              <InventoryRow
                key={product.id}
                productName={product.productName}
                productId={product.productId}
                type={product.type}
                date={product.date}
                location={product.location}
                stock={product.stock}
                user={product.user}
                position={index}
                onClick={() => onProductClick?.(product)}
              />
            ))}
        </TableHeader>
      </div>

      <nav aria-label='table navigation' className="flex flex-wrap-reverse pt-6 gap-y-2 justify-center md:justify-between border-t border-[#e2e8f01a] items-center p-4">
        <p className="text-muted-foreground text-sm">
          Showing <span className="text-foreground font-semibold">1 of {Math.ceil(inventory.length/3)}</span> of <span className="text-foreground font-semibold">100</span>
        </p>

        <ul className="inline-flex items-center text-background -space-x-px">
          <li>
            <div className="block px-3 py-2 ml-0 leading-tight bg-muted-foreground border border-slate-300 rounded-l-lg hover:bg-slate-700 hover:text-white">
              <span className=""><ChevronLeft/></span>
            </div>
          </li>



          <li>
            <div className="px-3 py-2 leading-tight bg-muted-foreground border border-slate-300 hover:bg-slate-700 hover:text-white">
              1
            </div>
          </li>
          <li>
            <div aria-current="page" className="z-10 px-3 py-2 leading-tight text-primary bg-primary/10 border border-primary hover:bg-primary/20">
              2
            </div>
          </li>
          <li>
            <div className="px-3 py-2 leading-tight bg-muted-foreground border border-slate-300 hover:bg-slate-700 hover:text-white">
              ...
            </div>
          </li>
          <li>
            <div className="block px-3 py-2 leading-tight bg-muted-foreground border border-slate-300 rounded-r-lg hover:bg-slate-700 hover:text-white">
              <span className=""><ChevronRight/></span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { InventoryList };
