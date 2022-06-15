import React, { useContext, useState, useEffect } from 'react';
import finel_logo from "../assets/images/finellogo-min.png";
import payamentsimg from "../assets/images/payments.png";
import { NavLink,Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import popup from "../assets/images/popup/newsletter/img-1.jpg";
import popuplogo from "../assets/images/popup/newsletter/logo.png";
import { phoneNumber } from './Testimonial';
const Fotter = () => {
    var insidData;
    var value
    const [Product, SetProduct] = useState([]);
    const newProductApi = async () => {
        const response = await fetch("https://beta.myrung.com/b/api/v2/categories");
        const data = await response.json();
        insidData = data.data;
        // console.log( Product)
        SetProduct(insidData);
        // alert("Helo");
        // value=Product[57].value;
        // console.log(insidData[57].value);
        // localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
        // { console.warn(insidData[57].value) }
    }
    useEffect(() => {
        newProductApi();
    }, []);
    var token
    const getData = async () => {
        const data = await JSON.parse((sessionStorage.getItem('user-info_token')))
        token = data
}
const notifywhish = () => {
    toast("Please Login first")
};
useEffect(() => {
        getData()
}, [getData])
const navigate = useNavigate();
const WhishlistHandler = () => {
        if (token!=null) {
                navigate('/whishlist')
        }
        else {
            notifywhish();
        }
}

    return (
        <>
            <footer className="footer footer-2">
                <div className="footer-middle border-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="widget widget-about">
                                    <img src={finel_logo} className="footer-logo" alt="Footer Logo"
                                        width="105" height="25" />
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate
                                        magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
                                        porttitor, facilisis luctus, metus. </p>

                                    {/* {insidData.map((item, index) => {
                                        console.log(item);
                                        return ( */}
                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <span className="widget-about-title">Got Question? Call us 24/7</span>


                                                <a href="tel:123456789"></a>

                                                {console.warn()}
                                            </div>
                                            {/* <!-- End .col-sm-6 --> */}
                                            <div className="col-sm-6 col-md-8">
                                                <span className="widget-about-title">Payment Method</span>
                                                <figure className="footer-payments">
                                                    <img src={payamentsimg} alt="Payment methods" width="272"
                                                        height="20" />
                                                </figure>
                                                {/* <!-- End .footer-payments --> */}
                                            </div>
                                            {/* <!-- End .col-sm-6 --> */}
                                        </div>
                                        {/* <!-- End .row --> */}
                                    </div>
                                    {/* );
                                    })} */}

                                    {/* <!-- End .widget-about-info --> */}
                                </div>
                                {/* <!-- End .widget about-widget --> */}
                            </div>
                            {/* <!-- End .col-sm-12 col-lg-3 --> */}

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>
                                    {/* <!-- End .widget-title --> */}

                                    <ul className="widget-list">
                                        <li><NavLink exact to="/about">About Rung</NavLink></li>
                                        {/* <li><a href="#">How to shop on Molla</a></li> */}
                                        <li><NavLink exact to="/faq">FAQ</NavLink></li>
                                        <li><NavLink exact to="/contact">Contact Us</NavLink></li>
                                        <li><NavLink exact to="/login">Log in</NavLink></li>

                                    </ul>
                                    {/* <!-- End .widget-list --> */}
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-sm-4 col-lg-3 --> */}

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    {/* <!-- End .widget-title --> */}

                                    <ul className="widget-list">
                                        <li><NavLink exact to="/paymentsmethod">Payment Methods</NavLink></li>
                                        <li><NavLink exact to="/money-back-guarantee!">Money-back guarantee!</NavLink></li>
                                        <li><NavLink exact to="/returns">Returns</NavLink></li>
                                        <li><NavLink exact to="/shipping">Shipping</NavLink></li>
                                        <li><NavLink exact to="/terms">Terms and conditions</NavLink> </li>
                                        <li><NavLink exact to="/privacypolicy">Privacy Policy</NavLink></li>
                                    </ul>
                                    {/* <!-- End .widget-list --> */}
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-sm-4 col-lg-3 --> */}

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>
                                    {/* <!-- End .widget-title --> */}

                                    <ul className="widget-list">
                                        <li><NavLink exact to="/signup">Sign Up</NavLink> </li>
                                        <li><NavLink exact to="/cart">View Cart</NavLink> </li>
                                        <li><a style={{ cursor: "pointer" }}  onClick={WhishlistHandler} >My Wishlist</a> </li>
										{/* <ToastContainer/> */}
                                        {/* <li><a href="#">Track My Order</a></li> */}
                                        <li><NavLink exact to="/help">Help</NavLink> </li>

                                    </ul>
                                    {/* <!-- End .widget-list --> */}
                                </div>
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .col-sm-64 col-lg-3 --> */}
                        </div>
                        {/* <!-- End .row --> */}
                    </div>
                    {/* <!-- End .container --> */}
                </div>
                {/* <!-- End .footer-middle --> */}

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                        {/* <!-- End .footer-copyright --> */}
                        <ul className="footer-menu">
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        {/* <!-- End .footer-menu --> */}
                        <div className="social-icons social-icons-color">
                            <span className="social-label">Social Media</span>
                            <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i
                                className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i
                                className="icon-twitter"></i></a>
                            <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i
                                className="icon-instagram"></i></a>
                            <a href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i
                                className="icon-youtube"></i></a>
                            <a href="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i
                                className="icon-pinterest"></i></a>
                        </div>
                        {/* <!-- End .soial-icons --> */}
                    </div>
                    {/* <!-- End .container --> */}
                </div>
                {/* <!-- End .footer-bottom --> */}
            </footer>
            {/* <!-- End .footer --> */}
            {/* </div> */}
            {/* End .page-wrapper  */}
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>

            {/* <!-- Mobile Menu --> */}

            {/* <!-- End .mobile-menu-container --> */}

            {/* <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
        <div className="row justify-content-center">
            <div className="col-10">
                <div className="row no-gutters bg-white newsletter-popup-content">
                    <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                        <div className="banner-content text-center">
                            <img src={popuplogo} className="logo" alt="logo" width="60"
                                height="15"/>
                            <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                            <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite
                                products.</p>
                            <form action="#">
                                <div className="input-group input-group-round">
                                    <input type="email" className="form-control form-control-white"
                                        placeholder="Your Email Address" aria-label="Email Adress" required/>
                                    <div className="input-group-append">
                                        <button className="btn" type="submit"><span>go</span></button>
                                    </div> */}
            {/* <!-- .End .input-group-append --> */}
            {/* </div> */}
            {/* <!-- .End .input-group --> */}
            {/* </form>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="register-policy-2" required/>
                                <label className="custom-control-label" for="register-policy-2">Do not show this popup
                                    again</label>
                            </div> */}
            {/* <!-- End .custom-checkbox --> */}
            {/* </div>
                    </div>
                    <div className="col-xl-2-5col col-lg-5 ">
                        <img src={popup} className="newsletter-img" alt="newsletter"/>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


            {/* <!--Start of Tawk.to Script--> */}
            {/* <script type="text/javascript">
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/625500747b967b11798a4105/1g0e0jia6';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();  */}
        </>
    );
}
export default Fotter;
