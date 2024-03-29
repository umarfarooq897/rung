import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/images/finellogo-min.png';
import '../assets/css/style.css'
import '../assets/css/skins/skin-demo-5.css';
import '../assets/css/demos/demo-5.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/mystyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = (props) => {
        const [scroll, setScroll] = useState("")
        useEffect(() => {
                document.addEventListener("scroll", () => {
                        // const scrollCheck = window.scrollY < 100
                        if (window.scrollY > 300) {
                                setScroll("fixed")
                        }
                        else {
                                setScroll("")
                        }
                })
        }, [scroll])
        const [hiddenmenu, setHiddenmenu] = useState(false)
        const navigate = useNavigate();
        var token;
        var data = props.data.cardData
        const notify = () => toast("Succesfully Deleted from cart");
        const notifynotLogin = () => {
                toast("Please Login first")

        }
        // const [menu,setMenu]=useState(true)
        // const [toglestate,setToglestate]=useState({})
        // var toglestate;
        // const toggleHandler=()=>
        // {
        //         menu ===true ? setMenu(false) : setMenu(true)
        //         menu === true ? setToglestate( {visibility:'visible'}) : null
        //         console.log(menu)

        // }
        const getData = async () => {
                const data = await JSON.parse((sessionStorage.getItem('user-info_token')))
                token = data
        }
        useEffect(() => {
                getData()
        }, [getData])
        const WhishlistHandler = () => {
                if (token!=null) {
                        navigate('/whishlist')
                }
                else {
                        notifynotLogin();
                }
        }



        const location = useLocation();

        //destructuring pathname from location
        const { pathname } = location;

        //Javascript split method to get the name of the path in array
        const splitLocation = pathname.split("/");

        const [searchValue, setsearchValue] = useState()
        const toggleSearch = (e) => {
                e.preventDefault()
                navigate(
                        "/search",
                        { state: { searchValue } })
        }
        const searchHandle = (e) => {
                let key = e.target.value
                setsearchValue(key)
        }

        return (
                <>
                        <header className="header header-5">
                                <div className={"header-middle sticky-header " + scroll}>
                                        <div className="container-fluid">
                                                <div className="header-left w-100">
                                                        <button onClick={() => setHiddenmenu(!hiddenmenu)} className="mobile-menu-toggler">
                                                                <span className="sr-only"></span>
                                                                <i className="icon-bars"></i>
                                                        </button>

                                                        <NavLink to="/" className="logo">
                                                                <img src={logo} alt="Molla Logo" width="105" height="25" />
                                                        </NavLink>
                                                        <nav className="main-nav">
                                                                <ul className="menu sf-arrows">
                                                                        <li className="active">
                                                                                <NavLink to="/">HOME</NavLink>
                                                                        </li>
                                                                        <li>
                                                                                <NavLink to="/about">ABOUT US</NavLink>
                                                                        </li>
                                                                        <li>
                                                                                <NavLink to="/shop/categories">SHOP</NavLink>
                                                                        </li>
                                                                        <li>
                                                                                <NavLink to="/contact">CONTACT US</NavLink>
                                                                        </li>
                                                                        <li>
                                                                                <NavLink to="/faq">FAQ</NavLink>
                                                                        </li>
                                                                        {/* <Outlet /> */}
                                                                </ul>
                                                                {/* <!-- End .menu --> */}
                                                        </nav>
                                                        {/* <!-- End .main-nav --> */}
                                                        <div className="header-right">
                                                                <div className="header-search header-search-extended header-search-visible">
                                                                        <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                                                                        <form action="#" method="get" onSubmit={toggleSearch}>
                                                                                <div className="header-search-wrapper">
                                                                                        <label htmlFor="q" className="sr-only">Search</label>
                                                                                        <input onChange={searchHandle} type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                                                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                                                                </div>
                                                                                {/* <!-- End .header-search-wrapper --> */}
                                                                        </form>
                                                                </div>
                                                                {/* <!-- End .header-search --> */}

                                                                <a style={{ cursor: "pointer" }} onClick={WhishlistHandler} className="wishlist-link">
                                                                        <i className="icon-heart-o"></i>
                                                                </a>

                                                                <div className="dropdown cart-dropdown">
                                                                        <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                                                                <i className="icon-shopping-cart"></i>
                                                                                <span className="cart-count">{data.length}</span>
                                                                                {/* {data.length? alert("item added"):""} */}
                                                                        </a>

                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                                <div className="dropdown-cart-products">
                                                                                        {data.map((item, index) => {
                                                                                                return (

                                                                                                        <div className="product">
                                                                                                                <div className="product-cart-details">
                                                                                                                        <h4 className="product-title">
                                                                                                                                <a href="product.html">{item.name}</a>
                                                                                                                        </h4>

                                                                                                                        <span className="cart-product-info">
                                                                                                                                <span className="cart-product-qty">{item.quantity}</span>
                                                                                                                                x{item.symbol}{item.Price}
                                                                                                                        </span>
                                                                                                                </div>
                                                                                                                {/* <!-- End .product-cart-details --> */}

                                                                                                                <figure className="product-image-container">
                                                                                                                        <a href="product.html" className="product-image">
                                                                                                                                <img src={'https://beta.myrung.com/b/public/' + item.product_image} alt="product" />
                                                                                                                        </a>
                                                                                                                </figure>
                                                                                                                <a onClick={() => props.removeToCartHandler({ item })} className="btn-remove" title="Remove Product"><i onClick={notify} className="icon-close"></i></a>
                                                                                                                <ToastContainer />
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
                                                                                                </div>
                                                                                                {/* <!-- End .product-cart-details --> */}

                                                                                        {/* <figure className="product-image-container">
                                                                                                        <a href="product.html" className="product-image">
                                                                                                                <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                                                                                        </a>
                                                                                                </figure>
                                                                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                                                                        </div>  */}
                                                                                        {/* <!-- End .product --> */}
                                                                                </div>
                                                                                {/* <!-- End .cart-product --> */}

                                                                                <div className="dropdown-cart-total">
                                                                                        <span>Total</span>

                                                                                        <span className="cart-total-price">{data.reduce((total, item) => total + (item.totalprice ? item.totalprice : item.Price), 0)}</span>
                                                                                </div>
                                                                                {/* <!-- End .dropdown-cart-total --> */}

                                                                                <div className="dropdown-cart-action">
                                                                                        <NavLink to='/cart' className="btn btn-primary">View Cart</NavLink>
                                                                                        <NavLink to='/checkout' className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></NavLink>
                                                                                </div>
                                                                                {/* <!-- End .dropdown-cart-total --> */}
                                                                        </div>
                                                                        {/* <!-- End .dropdown-menu --> */}
                                                                </div>
                                                                {/* <!-- End .cart-dropdown --> */}
                                                        </div>
                                                        {/* <!-- End .header-right --> */}
                                                </div>
                                                {/* <!-- End .container-fluid --> */}
                                        </div>
                                </div>
                                {/* <!-- End .header-middle --> */}
                        </header>
                        {/* <!-- End .header --> */}
                        <div className="mobile-menu-overlay"></div>
                        {/* <!-- End .mobil-menu-overlay --> */}

                        <div className={(hiddenmenu ? "hidden" : "") + " mobile-menu-container mobile-menu-light"}>
                                <div className=" mobile-menu-wrapper">

                                        <span onClick={() => setHiddenmenu(!hiddenmenu)} className="mobile-menu-close"> <i className="icon-close"></i></span>

                                        <form action="#" onSubmit={toggleSearch}  method="get" className="mobile-search">
                                                <label htmlFor="mobile-search" className="sr-only">Search</label>
                                                <input onChange={searchHandle} value={searchValue} type="search" className="form-control" name="mobile-search" id="mobile-search"
                                                        placeholder="Search in..." required />
                                                <button className="btn btn-primary"> <i className="icon-search"></i>
                                                </button>
                                        </form>

                                        <nav className="mobile-nav">
                                                <ul className="mobile-menu">
                                                        <li className={splitLocation[1] === "" ? "active" : ""}>
                                                                <NavLink to='/'>Home</NavLink>
                                                        </li>
                                                        <li className={splitLocation[1] === "about" ? "active" : ""}>
                                                                <NavLink to='/about'>About</NavLink>
                                                        </li>
                                                        <li className={splitLocation[1] === "shop" ? "active" : ""}>
                                                                <NavLink to='/shop/categories'>Shop</NavLink>
                                                        </li>
                                                        <li className={splitLocation[1] === "faq" ? "active" : ""}>
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
export default Header;