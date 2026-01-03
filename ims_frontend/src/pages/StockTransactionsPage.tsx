import { InventoryList, type Inventory } from '@/components/inventory/InventoryList'
import { StockTransactionsHeader } from '@/components/transactions/StockTransactionHeader';

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


const StockTransactionsPage = () => {
  return (
    <div className="space-y-6">
        <StockTransactionsHeader/>
        <InventoryList
          title='Stock Movements'
          inventory={MOCK_INVENTORY}
        />
    </div>
  )
}

export default StockTransactionsPage