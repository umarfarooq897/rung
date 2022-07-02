import React, { useEffect } from "react";
import ProductPageTitle from "../components/ProductPageTitle";
import Footer2 from '../components/Footer2';
import Sidebar from "../components/Shopsidbar";
import SearchContainer from "../container/SearchContainer";
import HeaderContainer from "../container/HeaderContainer";
const Search = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeaderContainer/>
            <ProductPageTitle />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <SearchContainer />
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
}
export default Search;
// export {Related_items};