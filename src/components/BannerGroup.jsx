import React from 'react';
import banneimg1 from '../assets/images/demos/demo-5/banners/banner-1.jpg';
import banneimg2 from '../assets/images/demos/demo-5/banners/banner-2.jpg';
import banneimg3 from '../assets/images/demos/demo-5/banners/banner-3.jpg';
import { NavLink } from "react-router-dom";

 const Banner=()=>{
     return( 
         <>
        <div className="container mt-5">
        <div className="banner-group">
            <div className="row">
                <div className="col-md-6">
                    <div className="banner banner-border">
                        <a href="#">
                            <img src={banneimg1} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">Trending now</a></h4>
                            {/* <!-- End .banner-subtitle --> */}
                            <h3 className="banner-title"><a href="#"><span>This Week's<br/>Most Wanted</span></a></h3>
                            {/* <!-- End .banner-title --> */}
                            <NavLink to="shop/categories" className="btn btn-outline-primary-2 banner-link">Discover Now<i className="icon-long-arrow-right"></i></NavLink>
                        </div>
                        {/* <!-- End .banner-content --> */}
                    </div>
                    {/* <!-- End .banner --> */}
                </div>
                {/* <!-- End .col-md-6--> */}

                <div className="col-md-6">
                    <div className="banner banner-border-hover">
                        <a href="#">
                            <img src={banneimg2} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">Limited time only.</a></h4>
                            {/* \<!-- End .banner-subtitle --> */}
                            <h3 className="banner-title"><a href="#"><span>Trainers & Sportwear<br/>Sale Up to 70% off</span></a></h3>
                            {/* \<!-- End .banner-title --> */}
                            <NavLink to="shop/categories" className="btn btn-outline-primary-2 banner-link">Shop Now<i className="icon-long-arrow-right"></i></NavLink>
                        </div>
                        {/* <!-- End .banner-content --> */}
                    </div>
                    {/* <!-- End .banner --> */}

                    <div className="banner banner-border-hover">
                        <a href="#">
                            <img src={banneimg3} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">This week we love...</a></h4>
                            {/* <!-- End .banner-subtitle --> */}
                            <h3 className="banner-title"><a href="#"><span>Womens <br/>Holiday Clothes</span></a></h3>
                            {/* <!-- End .banner-title --> */}
                            <NavLink to="shop/categories" className="btn btn-outline-primary-2 banner-link">Discover Now<i className="icon-long-arrow-right"></i></NavLink>
                        </div>
                        {/* <!-- End .banner-content --> */}
                    </div>
                    {/* <!-- End .banner --> */}
                </div>
                {/* <!-- End .col-md-6 --> */}
            </div>
            {/* <!-- End .row --> */}
        </div>
        {/* <!-- End .banner-group --> */}
    </div>
    {/* <!-- End .container --> */}
    <div className="mb-4"></div>
    {/* <!-- End .mb-6 --> */}
    </>
     );
 }
 
 export default Banner;