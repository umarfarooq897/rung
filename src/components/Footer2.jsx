import React,{useEffect} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import finel_logo from "../assets/images/finellogo-min.png";
import payaments_img from "../assets/images/payments.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer2 = () => {
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
const loginHandler  = () => {
    if (token) {
        // SetLog("Logout")
        sessionStorage.removeItem('user-info_token')
        localStorage.removeItem('user-info')
        navigate('/login')
    }
    else{
        // SetLog("Login")
        navigate('/login')
    }

}
	return (
		<>
			<footer className="footer">
				<div className="footer-middle border-0">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-lg-3">
								<div className="widget widget-about">
									<img src={finel_logo} className="footer-logo" alt="Footer Logo" width="105" height="25" />
									<p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

									<div className="social-icons">
										<a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
										<a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
										<a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
										<a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
										<a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></a>
									</div>
									{/* <!-- End .soial-icons --> */}
								</div>
								{/* <!-- End .widget about-widget --> */}
							</div>
							{/* <!-- End .col-sm-6 col-lg-3 --> */}

							<div className="col-sm-6 col-lg-3">
								<div className="widget">
									<h4 className="widget-title">Quick Links</h4>
									{/* <!-- End .widget-title --> */}
									<ul className="widget-list">
										<li><NavLink exact to="/about">About Rung</NavLink></li>
										{/* <li><a href="#">How to shop on Molla</a></li> */}
										<li><NavLink exact to="/faq">FAQ</NavLink></li>
										<li><NavLink exact to="/contact">Contact Us</NavLink></li>
										<li><a onClick={loginHandler} style={{ cursor: "pointer" }} >
										{sessionStorage.getItem('user-info_token') ? 'Logout' : 'Login'}</a> </li>
									</ul>
									{/* <!-- End .widget-list --> */}
								</div>
								{/* <!-- End .widget --> */}
							</div>
							{/* <!-- End .col-sm-6 col-lg-3 --> */}

							<div className="col-sm-6 col-lg-3">
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
							{/* <!-- End .col-sm-6 col-lg-3 --> */}

							<div className="col-sm-6 col-lg-3">
								<div className="widget">
									<h4 className="widget-title">My Account</h4>
									{/* <!-- End .widget-title --> */}

									<ul className="widget-list">
										<li><NavLink exact to="/signup">Sign Up</NavLink> </li>
										<li><NavLink to="/cart">View Cart</NavLink></li>
                                        <li><a style={{ cursor: "pointer" }}  onClick={WhishlistHandler} >My Wishlist</a> </li>
										{/* <li><a href="#">Track My Order</a></li> */}
										<li><NavLink exact to="/help">Help</NavLink> </li>
									</ul>
									{/* <!-- End .widget-list --> */}
								</div>
								{/* <!-- End .widget --> */}
							</div>
							{/* <!-- End .col-sm-6 col-lg-3 --> */}
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
						<figure className="footer-payments">
							<img src={payaments_img} alt="Payment methods" width="272" height="20" />
						</figure>
						{/* <!-- End .footer-payments --> */}
					</div>
					{/* <!-- End .container --> */}
				</div>
				{/* <!-- End .footer-bottom --> */}
			</footer>
			{/* <!-- End .footer --> */}
		</>
	);
}
export default Footer2;