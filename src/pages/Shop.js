import React from 'react';
import HeaderContainer from "../container/HeaderContainer";
import PageTitle from '../components/PageTitle';
import ShopMainArea from '../components/ShopMainArea'
import Footer2 from '../components/Footer2';

const Shop=(props)=>{
    return(
        <>
            <HeaderContainer/>
             <PageTitle page={props.page} navbar={props.navbar} title={props.title} />
             <ShopMainArea/>
            <Footer2/> 
        </>
    );
}
export default Shop;