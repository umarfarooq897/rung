import React, { createContext, useContext, useEffect } from 'react';
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/style.css';
import './assets/css/mystyle.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Catagory from './pages/Catagory';
import Products from "./pages/Products";
import Shop from './pages/Shop';
import Faq from "./pages/FAQ";
import Help from "./pages/Help";
import Terms from "./pages/Terms_Condition";
import Payments_Method from "./pages/PaymentsMethod";
import Money_Back from "./pages/MoneyBack";
import Shipping from "./pages/Shipping";
import Privacy_Policy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Return from "./pages/Return";
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, useNavigate, Navigate, NavLink } from "react-router-dom";
import Register from './pages/Registeration';
import Dashboard from './pages/Dashboard';
import ProductFullWidth from './pages/Singelproduct';
import Cart from './pages/Cart';
import Whishlist from './pages/Whishlist';
import Checkout from './pages/checkout';
import Search from './pages/Search';
import sessionStorage from 'redux-persist/es/storage/session';
import PrivateRoute from './components/Privateroute';
const Pagename = createContext();

function App() {

  return (
    <>
      <Pagename.Provider value="Shop">

        <BrowserRouter>
          <Routes>
            <Route exact index element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/shop/categories" element={<Catagory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop/product/catogeroy/:id" element={<Products />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/paymentsmethod" element={<Payments_Method />} />
            <Route exact path="/money-back-guarantee!" element={<Money_Back />} />
            <Route exact path="/returns" element={<Return />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route exact path="/privacypolicy" element={<Privacy_Policy />} />
            <Route exact path="/signup" element={<Register />} />
            <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>} />
            <Route exact path="/shop/product/catogeroy/fullwidth/:id" element={<ProductFullWidth />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/whishlist" element={<Whishlist />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/Search" element={<Search />} />
          </Routes>
        </BrowserRouter>

      </Pagename.Provider>


    </>
  );
}


export default App;



