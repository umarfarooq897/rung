import React, { createContext, useContext } from 'react';
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Registeration';
import Dashboard from './pages/Dashboard';
import ProductFullWidth from './pages/Singelproduct';
import Cart from './pages/Cart';
import Whishlist from './pages/Whishlist';
const Pagename = createContext();


function App() {

  return (
    <>
      <Pagename.Provider value="Shop">
       
            <BrowserRouter>
              <Routes>
                <Route >
                  <Route exact index element={<Home />} />
                  <Route exact path="/about" element={<AboutUs  />} />
                  {/* navbar={'Product Catagory'} page={'Shop'} title={'Categories'} */}
                  <Route exact path="/shop/categories" element={<Catagory />} />
                  {/* page={'Shop'} title={'Shop'} */}
                  <Route exact path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  {/* navbar={'List'} page={'Shop'} title={'Categories'}   */}
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
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route exact path="/shop/product/catogeroy/fullwidth/:id" element={<ProductFullWidth />} />
                  <Route exact path="/cart" element={<Cart/>} />
                  <Route exact path="/whishlist" element={<Whishlist/>} />
                  {/* <Route path="*" element={<NoPage />} />  */}
                </Route>
              </Routes>
            </BrowserRouter>
      
      </Pagename.Provider>


    </>
  );
}


export default App;



