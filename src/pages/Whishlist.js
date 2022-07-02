import React,{useEffect} from "react";
import Whishlist_to_cart_container from "../container/Whishlist_to_cart_container";
import HeaderContainer from "../container/HeaderContainer";
import Footer2 from "../components/Footer2";
const Whishlist=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(<>
        <HeaderContainer/>
        <Whishlist_to_cart_container/>
        <Footer2/>
        </>
    );
}
export default Whishlist;