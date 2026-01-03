export interface User {
    firstName: string;
    lastName: string;
    email?: string;
    isCompanyAdmin?: boolean;
    companyId?: string;
    password?: string
}