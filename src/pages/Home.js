import React,{useEffect} from "react";
import '../assets/css/style.css';
import '../assets/css/mystyle.css';
import '../assets/css/bootstrap.min.css';
import OwlCarousel1 from "../components/OwlCarousel1";
import OwlCarousel2 from "../components/OwlCarousel2";
import BannerGroup from '../components/BannerGroup';
import VideoBanner from "../components/VideoBanner";
import Testimonial from "../components/Testimonial";
import InstaFeed from "../components/InstaFeedContainer";
import Fotter from "../components/Footer";
import Headercontainer1 from "../container/Headercontainer1";
import Newproductcontainer from "../container/Newproductcontainer";
import FeatcuredproductContainer from "../container/FeatcuredproductContainer";

import '../assets/css/style.css'
 const Home=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
     return(
         <>
         {/* <div className="page-wrapper"> */}
          <Headercontainer1/>
          <OwlCarousel1/>
          <OwlCarousel2/>
          <BannerGroup/>
          <FeatcuredproductContainer/>
          <VideoBanner/>
          <Newproductcontainer/>
          <Testimonial/>
          <InstaFeed/>
          <Fotter/>
          {/* </div> */}
          </>
     );
 }
 export default Home;