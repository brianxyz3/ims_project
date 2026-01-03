import React, { useRef, useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';




interface FormDataType {
    product: string;
    quantity?: number;
    sourceLocation: string;
    destLocation: string;
    supplier: string;
    notes: string;
}

const EditInventoryForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState<FormDataType>({
        product: "",
        quantity: 0,
        sourceLocation: "",
        supplier: "",
        destLocation: "",
        notes: "",
    });
    const [isPurchase, setIsPurchase] = useState<Boolean>(true);
    const [isTransfer, setIsTransfer] = useState<Boolean>(false);

    const formRef = useRef<HTMLFormElement>(null)
    
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

    const switchToPurchaseForm = () => {
        setIsPurchase(true);
        setIsTransfer(false);
        clearForm();
    }

    const switchToTransferForm = () => {
        setIsPurchase(false);
        setIsTransfer(true);
        clearForm();
    }
    
    const switchToSalesForm = () => {
        setIsPurchase(false);
        setIsTransfer(false);
        clearForm();
    }

    const clearForm = () => {
        setFormData({
            product: "",
            quantity: 0,
            sourceLocation: "",
            destLocation: "",
            supplier: "",
            notes: "",
        })
        formRef.current?.reset()
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement> ) => {
        evt.preventDefault();
        const type = isPurchase ? "Purchase" : "Transfer";
        console.log(formData, type)
    }

  return (
    <div className='py-5 flex flex-col border border-border/80 rounded-lg'>
        <div className="flex flex-wrap md:flex-nowrap hover:cursor-pointer mx-5 mb-3 md:w-96 text-center justify-evenly text-foreground bg-muted/80 p-1 rounded-lg">
            <button type='button' onClick={switchToPurchaseForm} className={`w-full active p-1 rounded-md ${isPurchase && "bg-background"}`}>Stock In</button>
            <button type='button' onClick={switchToSalesForm} className={`w-full p-1 rounded-md ${!isPurchase && !isTransfer && "bg-background"}`}>Stock Out</button>
            <button type='button' onClick={switchToTransferForm} className={`w-full p-1 rounded-md ${isTransfer && "bg-background"}`}>Stock Transfer</button>
        </div>
        <div className="px-5 w-full text-foreground border-t border-border/80">
            <form ref={formRef} onSubmit={handleSubmit}>
                <legend className='text-muted-foreground text-lg mt-5 mb-3 font-medium'>
                    Record {isPurchase ? "New Purchase": isTransfer? "Stock Transfer" : "New Sale"}
                </legend>
                <div className="flex flex-col gap-3 mb-3">

                    {/* Product Input */}
                    <label htmlFor="product">Product:</label>
                    <div className="relative">
                        <Input 
                            type='text'
                            id='product'
                            placeholder='Search product name or SKU...' 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="hidden md:block absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap gap-6 py-3">
                        <div className='w-full'>

                            {/* Quantity Input */}
                            <label htmlFor="quantity">Quantity:</label>
                            <Input 
                                type='number'
                                id='quantity'
                                className='mt-3 h-9'
                                placeholder='e.g; 100' 
                                // value={formData.quantity}
                                onChange={(e) => setFormData((currState) => ({...currState, quantity: parseInt(e.target.value)}))}
                            />
                        </div>

                        {/* Sender Location Input */}
                        <div className='w-full flex flex-col gap-3'>
                            <label htmlFor="sourceLocation">Source Location:</label>
                            <Select value={formData.sourceLocation} onValueChange={(value) => setFormData((currState) => ({...currState, sourceLocation: value}))}>
                                <SelectTrigger id='sourceLocation' className="w-full h-11 bg-muted/30 border-muted/50">
                                    <SelectValue placeholder="Sender Warehouse" />
                                </SelectTrigger>
                                <SelectContent>
                                    {warehouses.map((warehouse, index) => (<SelectItem key={index} value={warehouse.toLowerCase()}>{warehouse}</SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Supplier Input */}
                        {isPurchase && <div className='w-full flex flex-col gap-3'>
                            <label htmlFor="supplier">Supplier:</label>
                            <Select value={formData.supplier} onValueChange={(value) => setFormData((currState) => ({...currState, supplier: value}))}>
                                <SelectTrigger id='supplier' className="w-full h-11 bg-muted/30 border-muted/50">
                                    <SelectValue placeholder="Product Supplier" />
                                </SelectTrigger>
                                <SelectContent>
                                    {suppliers.map((supplier, index) => (<SelectItem key={index} value={supplier.toLowerCase()}>{supplier}</SelectItem>))}
                                </SelectContent>
                            </Select> 
                        </div>}

                        {/* Receiver Location Input */}
                        {isTransfer && <div className='w-full flex flex-col gap-3'>
                            <label htmlFor="destLocation">Destination Location:</label>
                            <Select value={formData.destLocation} onValueChange={(value) => setFormData((currState) => ({...currState, destLocation: value}))}>
                                <SelectTrigger id='destLocation' className="w-full h-11 bg-muted/30 border-muted/50">
                                    <SelectValue placeholder="Destination Warehouse" />
                                </SelectTrigger>
                                <SelectContent>
                                    {warehouses.map((warehouse, index) => (<SelectItem key={index} value={warehouse.toLowerCase()}>{warehouse}</SelectItem>))}
                                </SelectContent>
                            </Select> 
                        </div>}
                    </div>

                    {/* Notes Input */}
                    <label htmlFor="notes">Notes/Reason:</label>
                    <Textarea 
                        id='notes'
                        placeholder='e.g; Received from supplier A'
                        value={formData.notes}
                        onChange={(e) => setFormData((currState) => ({...currState, notes: e.target.value}))}
                    />
                </div>

                <div className="flex flex-wrap justify-end gap-y-4 pt-4">
                    <Button 
                        type='button' 
                        className='ml-0 md:ml-auto px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity'
                        onClick={clearForm}>
                            Clear Form
                    </Button>
                    <Button type='submit' className='ml-4 px-4 py-2 bg-blue-700 text-primary-foreground rounded-md hover:opacity-90 transition-opacity'>Confirm Stock {isPurchase ? "In" : "Out"}</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditInventoryForm