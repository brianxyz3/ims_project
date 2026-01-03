import { DashboardLayout } from './layouts/DashboardLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { SuppliersPage } from './pages/SuppliersPage';
import { InventoryPage } from './pages/InventoryPage';
import { DashboardPage } from './pages/DashboardPage';
import EditInventoryPage from './pages/EditInventoryPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { AddProductPage } from './pages/AddProductPage';
import { StaffPage } from './pages/StaffPage';
import SignUpPage from './pages/SignUpPage';
import { MainLayout } from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import AuthPageLayout from './layouts/AuthPageLayout';
import StockTransactionsPage from './pages/StockTransactionsPage';
import { EditProductPage } from './pages/EditProductPage';



function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <>   
          <Route element={<AuthPageLayout/>}>
            <Route path="/register" element={<SignUpPage/>}/>
            <Route path="/login" element={<SignInPage/>}/>
          </Route>       

          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="faq" element={<FaqPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
          </Route>
          <Route path='/ims' element={<DashboardLayout/>}>
            <Route path="dashboard" element={<DashboardPage/>}/>
            <Route path="inventory" element={<InventoryPage/>}/>
            <Route path="inventory/edit" element={<EditInventoryPage/>}/>
            <Route path="products/add" element={<AddProductPage/>}/>
            <Route path="products/:productId" element={<ProductDetailsPage/>}/>
            <Route path="products/:productId/edit" element={<EditProductPage/>}/>
            <Route path="staff" element={<StaffPage/>}/>
            <Route path="stock-transactions" element={<StockTransactionsPage/>}/>
            <Route path="suppliers" element={<SuppliersPage/>}/>
          </Route>
        </>
      ));
  return <RouterProvider router={router} />
}

export default App

