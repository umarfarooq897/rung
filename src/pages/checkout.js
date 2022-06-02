import React from "react";
import HeaderContainer from "../container/HeaderContainer";
import PageTitle from "../components/PageTitle";
import CheckoutContainer from "../container/CheckoutContainer";
import Footer2 from '../components/Footer2';
const Checkout=()=>{
    return(
        <>
           <HeaderContainer/>
           <PageTitle/>
           <CheckoutContainer/>
           <Footer2/> 
        </>
    );
}
export default Checkout;