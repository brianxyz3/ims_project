import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Save } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';



const EditProductForm = () => {

    
    const warehouses =[
        "Warehouse A",
        "Warehouse W",
        "Warehouse X",
        "Warehouse D",
        "Warehouse Z",
    ]

    const suppliers = [
        "Supplier B",
        "Supplier X",
        "Supplier Z",
        "Supplier K",
        "Supplier P",
        "Supplier W",
    ]

    const navigate = useNavigate();

    const [addProductFormData, setAddProductFormData] = useState({
        retailPrice: 0.00,
        costPrice: 0.00,
        quantity: 0,
        warehouse: "",
        supplier: "",
        productName: "",
        tags: ""
    })

    const handleformSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();
        console.log(addProductFormData);
    }

  return (
    <form id='addProductForm' onSubmit={handleformSubmit} action="">
        <div className="grid grid-cols-1 md:grid-cols-8 md:row-2 gap-8 text-sm text-card-foreground">
            <div className="md:col-span-5 flex md:flex-col flex-wrap-reverse gap-8">
                <div className="w-full h-fit bg-muted/10 border border-border/80 rounded-xl overflow-hidden">
                    <div className="p-4">
                        <h3 className='text-lg font-medium mb-4'>Basic Information</h3>
                        <label className="pb-2 inline-block" htmlFor="productName">Product Name</label>
                        <Input
                            className="text-foreground mb-3 h-11"
                            value={addProductFormData.productName}
                            id='productName'
                            placeholder='e.g. Ergonomic Office Chair'
                            onChange={(e) => setAddProductFormData((currState) => ({...currState, productName: e.target.value}))}
                        />
                        
                        <div className="">
                            <label className="pb-2 inline-block" htmlFor="tags">Tags</label>
                            <Input
                                className="text-foreground h-11" 
                                id='tags'
                                value={addProductFormData.tags}
                                placeholder='e.g. furniture, electronics'
                                onChange={(e) => setAddProductFormData((currState) => ({...currState, tags: e.target.value}))}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3">
                <div className="grid grid-row-3 gap-8">
                    <div className="p-4 bg-muted/10 border border-border/80 rounded-xl">
                        <h3 className="text-lg font-medium mb-4">Inventory</h3>

                        <div className="flex gap-3">
                            <div className="flex-1">
                                <label className="pb-2 inline-block" htmlFor="retailPrice">Warehouse</label>
                                <Select onValueChange={(value) => setAddProductFormData(() => ({...addProductFormData, warehouse: value}))}>
                                    <SelectTrigger className="w-full h-11 bg-muted/30 border-muted/50">
                                        <SelectValue placeholder="Warehouse" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {warehouses.map((warehouse, index) => (<SelectItem key={index} value={warehouse.toLowerCase()}>{warehouse}</SelectItem>))}
                                    </SelectContent>
                                </Select>                            
                            </div>
                            <div className="flex-1">
                                <label className="pb-2 inline-block" htmlFor="retailPrice">Supplier</label>
                                <Select onValueChange={(value) => setAddProductFormData(() => ({...addProductFormData, supplier: value}))}>
                                    <SelectTrigger className="w-full h-11 bg-muted/30 border-muted/50">
                                        <SelectValue placeholder="Supplier" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {suppliers.map((supplier, index) => (<SelectItem key={index} value={supplier.toLowerCase()}>{supplier}</SelectItem>))}
                                    </SelectContent>
                                </Select>                            
                            </div>
                        </div>

                    </div>
                </div>
        
            </div>

        
        </div>

        <div className="flex md:hidden mt-6 flex-col md:flex-row gap-3 items-stretch md:items-end">

            {/* Mobile Add Product Button */}
            <Button
            size={"lg"}
            form='addProductForm'
            className="bg-blue-600 hover:bg-blue-700 text-background font-medium flex items-center gap-2"
            >
            <Save className="w-5 h-5" />
            Save Product
            </Button>
            
            {/* Mobile Delete Product Button */}
            <Button
            size={"lg"}
            onClick={() => navigate("/ims/inventory")}
            className="bg-foreground/80 hover:bg-destructive text-background font-medium flex items-center gap-2"
            >
            Cancel
            </Button>
        </div>
    </form>
  );
};

export { EditProductForm };
