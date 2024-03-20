import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Vendors from './Vendor/vendors';
import AddVendorForm from './Vendor/AppVendorForm';
import Bookings from './Bookings/bookings';
import Orders from './Orders/orders';
import Customizes from './Customizes/cutomizes';
import Categories from './categoryTable/category';
import Messages from './Messages/messages';
import Customers from './Customers/Customer';
import Products from './Products/products';
import AddProductForm from './Products/AddProductForm';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <ToastContainer />
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/add-vendor" element={<AddVendorForm />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customizes" element={<Customizes />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/category' element={<Categories />} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/products' element={<Products />} />
      <Route path="/add-product" element={<AddProductForm />} />

      </Routes>

    </div>
    </Router>
    </>
  )
}

export default App