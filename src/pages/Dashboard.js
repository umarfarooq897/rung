import React,{useEffect} from "react";
import HeaderContainer from "../container/HeaderContainer";
import Footer2 from "../components/Footer2";
import Dashboardcontent from "../components/Dashboardcontent";
const Dashboard = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
            <HeaderContainer/>
            <Dashboardcontent/>
            <Footer2/>
        </>
    );
}
export default Dashboard;