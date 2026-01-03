export interface Supplier {
    id: string;
    companyName: string;
    supplierId: string;
    status: 'Active' | 'Inactive';
    contactName: string;
    contactEmail: string;
}