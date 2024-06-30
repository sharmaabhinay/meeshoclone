import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'tailwindcss'

import Signup from './pages/Signup';
import Orders from './pages/Orders';
import Buynow from './pages/Buynow';
import Cart from './pages/Cart';
import Notfound from './pages/Notfound';
import Products from './components/Products';
import Temperory from './pages/Temperory';
import Singleproduct from './pages/Singleproduct';
import Landing from './pages/Landing';
import Otpvarification from './pages/Otpvarification';
import Viewshop from './pages/Viewshop';
import Product from './components/Product';
import Admin from './pages/Admin';
import Cartaddress from './pages/Cartaddress';
import CartPayment from './pages/CartPayment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';

const App = () => {
  return (
    <Router>
      
      {/* <Hero />
      <Footer /> */}
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/checkout/bynow' element={<Buynow />} />
        <Route path='/checkout/cart' element={<Cart />} />
        <Route path='/checkout/products' element={<Products />} />
        <Route path="/temperory" element={<Temperory />} />
        <Route path="/signup/verification" element={<Otpvarification />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/shop" element={<Viewshop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout/cart-address" element={<Cartaddress />}/>
        <Route path="/checkout/cart-payment" element={<CartPayment />}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
      
      {/* <Signup /> */}
    </Router>
  );
}

export default App;
