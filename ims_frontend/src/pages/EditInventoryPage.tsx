import EditInventoryForm from '@/components/inventory/EditInventoryForm';
import type { Inventory } from '@/components/inventory/InventoryList'; 
import { EditInventoryHeader } from '@/components/inventory/EditInventoryHeader';
import { InventoryList } from '@/components/inventory/InventoryList';

// Mock supplier data matching the UI in the image
const MOCK_INVENTORY: Inventory[] = [
  {
    id: "1",
    productName: "Dumbbells 10kg",
    productId: "DB10-001",
    user: "admin",
    location: "Lagos Warehouse",
    date: "2025-01-12",
    stock: 50,
    type: "In",
  },
  {
    id: "2",
    productName: "Yoga Mat Deluxe",
    productId: "YM-204",
    user: "brian",
    location: "Abuja Branch",
    date: "2025-02-03",
    stock: 20,
    type: "Out",
  },
  {
    id: "3",
    productName: "Treadmill Pro X",
    productId: "TMX-503",
    user: "manager",
    location: "Port Harcourt Depot",
    date: "2025-03-18",
    stock: 5,
    type: "In",
  },
  {
    id: "4",
    productName: "Resistance Bands Set",
    productId: "RBS-332",
    user: "chima",
    location: "Ibadan Store",
    date: "2025-04-09",
    stock: 35,
    type: "Out",
  },
  {
    id: "5",
    productName: "Protein Shaker Bottle",
    productId: "PSB-778",
    user: "warehouse",
    location: "Kano Outlet",
    date: "2025-05-22",
    stock: 120,
    type: "In",
  },
];

const EditInventoryPage = () => {
    const handleAddSupplier = () => {
        console.log('Add supplier clicked');
        // TODO: Open add supplier dialog
    };

    // const handleProductClick = (product: Product) => {
    //     console.log('Product clicked:', product);
    // }

  return (
    <div className="space-y-6">
        {/* Header with Search and Filters */}
        <EditInventoryHeader
            onAddSupplier={handleAddSupplier}
        />

        <EditInventoryForm/>


        {/* Supplier Grid */}
        {/* <ProductList
          products={MOCK_PRODUCTS}
          onProductClick={handleProductClick}
        /> */}

        <InventoryList
          title='Recent Stock Movements'
          inventory={MOCK_INVENTORY}
        />


        {/* Empty State */}
        {MOCK_INVENTORY.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No products found</p>
            </div>
        )}
    </div>
  )
}

export default EditInventoryPage;