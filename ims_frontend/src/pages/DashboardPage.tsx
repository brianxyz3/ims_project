import DashboardGrid from '@/components/dashboard/DashboardGrid';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'; 

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {


  const handleAddSupplier = () => {
    console.log('Add supplier clicked');
    // TODO: Open add supplier dialog
  };

  // const handleProductClick = (product: Product) => {
  //   console.log('Product clicked:', product);
  //   // TODO: Open supplier details
  // };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <DashboardHeader
        onAddSupplier={handleAddSupplier}
      />

      {/* Supplier Grid */}
      <DashboardGrid/>

    </div>
  );
};

export { DashboardPage };
