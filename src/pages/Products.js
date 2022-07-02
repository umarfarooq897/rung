import React from "react";
import ProductPageTitle from "../components/ProductPageTitle";
import Footer2 from '../components/Footer2';
import Related_product from "../components/Relatedproduct";
import HeaderContainer from "../container/HeaderContainer";



const Products = (props) => {
    // console.warn(props)

    return (
        <>
            <HeaderContainer />
            <ProductPageTitle />
            <Related_product />
            <Footer2 />
        </>
    );
}
export default Products;
// export {Related_items};