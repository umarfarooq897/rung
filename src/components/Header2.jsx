import { Toast } from "bootstrap";
import React , {useState,useEffect} from "react";
import { Outlet, NavLink, Navigate ,useNavigate} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
 
import finel_logo from '../assets/images/finellogo-min.png';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cart_product1 from "../assets/images/products/cart/product-1.jpg";
import cart_product2 from "../assets/images/products/cart/product-2.jpg";
const Header2=(props)=>{
    const [hiddenmenu,setHiddenmenu]=useState(false)
    const navigate = useNavigate();
    const notify = () => toast("Succesfully Deleted from cart");
    var user_id;
    console.warn('header',props.data)
    var data=props.data.cardData;
    const notifynotLogin=()=>{
            toast("Please Login first")
            
    }
    // console.warn('header',props.data)
    // Toastdel_Fo_cart=()=>{
    //     if(data.length = data.lerngth-1){

    //     }
    // }
    // Toastdel_Fo_cart()
    const getData = async () => {
        const data = await JSON.parse((localStorage.getItem('user-info')))
        user_id = data.user.id
    }
    useEffect(() => {
        getData()
    }, [getData])
    const WhishlistHandler=()=>{
        if(user_id){
            navigate('/whishlist')
        }
        else{
            notifynotLogin();
        }
    }
    
    return(
        <>
               <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        {/* <div className="header-dropdown">
                            <a href="#">Usd</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">Eur</a></li>
                                    <li><a href="#">Usd</a></li>
                                </ul>
                            </div> */}
                            {/* <!-- End .header-menu --> */}
                        {/* </div> */}
                        {/* <!-- End .header-dropdown --> */}

                        <div >
                        {/* //className="header-dropdown" */}
                            {/* <a href="#">Eng</a> */}
                            {/* <div className="header-menu"> */}
                                {/* <ul>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Spanish</a></li>
                                </ul> */}
                            {/* </div> */}
                            {/* <!-- End .header-menu --> */}
                        </div>
                        {/* <!-- End .header-dropdown --> */}
                    </div>
                    {/* <!-- End .header-left --> */}

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                {/* document.getElementById('whishlist_num').innerText = Product.length; */}
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                    <li><a onClick={WhishlistHandler} style={{cursor:'pointer'}}><i className="icon-heart-o"></i>Wishlist <span id='whishlist_num'></span></a></li>
                                    <ToastContainer/>
                                    {/* <li><NavLink exact to="/about">About Us</NavLink></li> */}
                                    {/* <li><NavLink exact to="/contact">Contact Us</NavLink></li> */}
                                    <li><NavLink to='/login' data-toggle="modal"><i className="icon-user"></i>Login</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <!-- End .top-menu --> */}
                    </div>
                    {/* <!-- End .header-right --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .header-top --> */}

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button onClick={()=>setHiddenmenu(!hiddenmenu)} className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <NavLink to='/' className="logo">
                            <img src={finel_logo} alt="Molla Logo" width="105" height="25"/>
                        </NavLink>

                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li >
                                        <NavLink  to="/">HOME</NavLink>
                                </li>
                                <li >
                                        <NavLink  to="/about">ABOUT</NavLink>      
                                </li>
                                <li>
                                        <NavLink  to="/shop/categories">SHOP</NavLink> 
                                </li>
                                {/* <li>
                                        <NavLink  to="/shop">CATAGORY</NavLink> 
                                </li> */}
                                <li>
                                        <NavLink  to="/faq">FAQ</NavLink> 
                                </li>
                            </ul>
                            {/* <!-- End .menu --> */}
                        </nav>
                        {/* <!-- End .main-nav --> */}
                    </div>
                    {/* <!-- End .header-left --> */}

                    <div className="header-right">
                        <div className="header-search">
                            <a href="#" className="search-toggle" role="button" title="Search"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label for="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required/>
                                </div>
                                {/* <!-- End .header-search-wrapper --> */}
                            </form>
                        </div>
                        {/* <!-- End .header-search --> */}
                        {/* <div className="dropdown compare-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                <i className="icon-random"></i>
                            </a> */}

                            {/* <div className="dropdown-menu dropdown-menu-right">
                                <ul className="compare-products">
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                    </li>
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                    </li>
                                </ul>

                                <div className="compare-actions">
                                    <a href="#" className="action-link">Clear All</a>
                                    <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                            </div> */}
                            {/* <!-- End .dropdown-menu --> */}
                        {/* </div> */}
                        {/* <!-- End .compare-dropdown --> */}

                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                            
                                <span className="cart-count">{data.length}</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                {data.map((item,index)=>{
                                    return(

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">{item.name}</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>
                                        {/* <!-- End .product-cart-details --> */}

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src={'https://beta.myrung.com/b/public/' + item.product_image} alt="product"/>
                                            </a>
                                        </figure>
                                        <a onClick={()=>props.removeToCartHandler({item})} className="btn-remove" title="Remove Product"><i onClick={notify} className="icon-close"></i></a>
                                        <ToastContainer/>
                                    </div>

                                    );
                                })}
                                    {/* <!-- End .product --> */}

                                    {/* <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div> */}
                                        {/* <!-- End .product-cart-details --> */}

                                        {/* <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src={cart_product2} alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div> */}
                                    {/* <!-- End .product --> */}
                                </div>
                                {/* <!-- End .cart-product --> */}

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price"></span>
                                </div>
                                {/* <!-- End .dropdown-cart-total --> */}

                                <div className="dropdown-cart-action">
                                    <NavLink to="/cart" className="btn btn-primary">View Cart</NavLink>
                                    <NavLink to=''  className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></NavLink>
                                </div>
                                {/* <!-- End .dropdown-cart-total --> */}
                            </div>
                            {/* <!-- End .dropdown-menu --> */}
                        </div>
                        {/* <!-- End .cart-dropdown --> */}
                    </div>
                    {/* <!-- End .header-right --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .header-middle --> */}
        </header>
        {/* <!-- End .header --> */}
        <div className="mobile-menu-overlay"></div>
            {/* <!-- End .mobil-menu-overlay --> */}
               
            <div className= {(hiddenmenu ? "hidden" : "") + " mobile-menu-container mobile-menu-light"}>
                <div  className= " mobile-menu-wrapper">
                
                    <span  onClick={()=>setHiddenmenu(!hiddenmenu)} className="mobile-menu-close"> <i className="icon-close"></i></span>
                   
                    <form action="#" method="get" className="mobile-search">
                        <label for="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search"
                            placeholder="Search in..." required />
                        <button className="btn btn-primary"> <i className="icon-search"></i>
                        </button>
                    </form>

                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop/categories'>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/faq' className="sf-with-ul">FAQ</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- End .mobile-nav --> */}

                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                    {/* <!-- End .social-icons --> */}
                </div>
                {/* <!-- End .mobile-menu-wrapper --> */}
            </div>
        </>
    );
}
export default Header2;