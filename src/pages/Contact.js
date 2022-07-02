import React,{useEffect} from "react";
import HeaderContainer from "../container/HeaderContainer";
import PageTitle from "../components/PageTitle";
import Footer2 from "../components/Footer2";
import Contact_content from "../components/ContactContent";
const Contact=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
           <HeaderContainer/>
           <PageTitle/>
           <Contact_content/>
           <Footer2/> 
        </>
    );
}
export default Contact;