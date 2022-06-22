import React, { createContext } from "react";
import { useLocation } from "react-router-dom";
import Header2 from '../components/Header2';
// import PageTitle from '../components/PageTitle';
import ProductPageTitle from "../components/ProductPageTitle";
import Footer2 from '../components/Footer2';
import Navigation from "../components/Pagenavigation";
import Sidebar from "../components/Shopsidbar";
import Related_product from "../components/Relatedproduct";
import Homecontainer from "../container/Homecontainer";
import HeaderContainer from "../container/HeaderContainer";



const Products = (props) => {
    // console.warn(props)

    return (
        <>
            <HeaderContainer/>
            {/* page={props.page} navbar={props.navbar} title={props.title} */}
            <ProductPageTitle />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <Homecontainer />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Navigation /> */}
            <Footer2 />
        </>
    );
}
export default Products;
// export {Related_items};