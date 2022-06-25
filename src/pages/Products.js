import React from "react";
import ProductPageTitle from "../components/ProductPageTitle";
import Footer2 from '../components/Footer2';
import Related_productcontainer from "../container/Related_productcontainer";
import HeaderContainer from "../container/HeaderContainer";



const Products = (props) => {
    // console.warn(props)

    return (
        <>
            <HeaderContainer />
            <ProductPageTitle />
            <Related_productcontainer />
            <Footer2 />
        </>
    );
}
export default Products;
// export {Related_items};