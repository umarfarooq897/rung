import React from 'react';
import HeaderContainer from "../container/HeaderContainer";
import PageTitle from '../components/PageTitle';
import WhoWeAre from '../components/WhoWeAre';
import CounterArea from '../components/CounterArea';
import Team from '../components/OurTeam';
import Brands from '../components/Brands';
import Footer2 from '../components/Footer2';


const AboutUs=(props)=>{
    return(
        <>
            <HeaderContainer/>
            {/* <PageTitle  navbar={props.navbar} title={props.title}/> */}
            <WhoWeAre/>
            <CounterArea/>
            <Team/>
            <Brands/>
            <Footer2/>
        </>
    );
}
export default AboutUs;