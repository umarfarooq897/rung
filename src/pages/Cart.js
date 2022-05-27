import React  from "react";
import HeaderContainer from "../container/HeaderContainer";
import Cartcontainer from "../container/Cartcontainer";
import Footer2 from "../components/Footer2";
// import Cartdata from "../components/Cartdata";
const Cart =(props)=>{
  
    return (
        <>
            <HeaderContainer/>
            <Cartcontainer/>
            <Footer2/>
        </>
    );
}
export default Cart;