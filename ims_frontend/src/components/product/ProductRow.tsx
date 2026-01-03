import React from 'react';
import { Avatar, AvatarImage,  AvatarFallback } from '../ui/avatar';

import type { Product } from '@/types/product';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProductRowProps extends Product {
  position: number;
  onClick?: () => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  productId,
  productName,
  status,
  location,
  stock,
  productImageUrl,
  price,
  position
  // onClick,
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
    <tr className="text-xs" onClick={() => console.log(`clicked ${productName}`)}>
      <td className='text-foreground font-semibold'>
        <Avatar className='rounded-lg'>
          <AvatarImage
            src={productImageUrl}
            alt={`photo of ${productName}`}
            width={40}
            height={40}
            className="object-cover grayscale"
          />
          <AvatarFallback>{productName.charAt(0)}</AvatarFallback>
        </Avatar>
        <span>{productName}</span>
      </td>
      <td className="">{productId}</td>
      <td className="">{location}</td>
      <td className=''>{price}</td>          
      <td className=''>{stock} units</td>
      <td className=''>
        <Badge
          variant={getVariant() as "active" | "inactive" | "destructive" | "warning"}
          className={cn(
            "text-xs px-2 py-1",
          )}
        >
          {status}
        </Badge>
      </td>
      
      <td className='tracking-widest group relative font-bold'>
        ...
        <ul className={`text-xs absolute hidden group-hover:flex flex-col text-center text-black left-full -translate-x-full z-50 bg-muted ${position === 0 ? "top-13" : "-top-15"}`}>
          <li>
            <Link 
              to={`/ims/products/${productId}`}
              className='px-4 py-1.5 block hover:bg-blue-900/80 border-b'>Veiw</Link></li>
          <li>
            <Link
              to="/ims/products/edit"
              className='px-4 py-1.5 block hover:bg-blue-900/80 border-b'>Edit</Link></li>
          <li className='px-4 py-1.5 hover:bg-blue-900/80'>Delete</li>
        </ul>
      </td>
    </tr>
  );
};

export { ProductRow };