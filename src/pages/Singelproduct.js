import React from "react";
import Fullwitdh from "../components/Fullwitdh";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import HeaderContainer from "../container/HeaderContainer";
import Singleproduct_add_to_cart_contanier from "../container/Singleproduct_add_to_cart_contanier";
const ProductFullWidth = () =>{
  
    return(
        <>
        <HeaderContainer/>
        <Singleproduct_add_to_cart_contanier/>
        <Footer2/>
        </>
    );
}
export default ProductFullWidth;