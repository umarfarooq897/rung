import React, { useEffect, useState, useCallback } from "react";
import OwlCarousel from 'react-owl-carousel';
// import { useNavigate } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
const Featured = (props) => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    var token
    var user_id;
    var verifyToken;
    let FeaturedProduct = [];
    var api = 'https://beta.myrung.com/b/api/v2/products/featured';
    // const navigate = useNavigate();
    const getFeaturedApi = async () => {
        const response = await fetch(api);
        const data = await response.json();
        FeaturedProduct = data.data;
        setProduct(FeaturedProduct)
        setLoading(false)
    }
    const Token= ()=>{
        
        token =  sessionStorage.getItem('user-info_token') 
        // console.log(setToken)
    }
    useEffect(() => {
        Token()
        },[Token])
    useEffect(() => {
        getFeaturedApi()
    }, []);
    const notify = () => {
        toast("Item added")
        let cartDrp = document.querySelector(".dropdown-menu")
        cartDrp.style.visibility = "visible"
        cartDrp.style.opacity = "1"
        setTimeout(() => {
            cartDrp.style.visibility = "hidden"
            cartDrp.style.opacity = "0"
        }, 3000);
    };
    const notifywhish = () => {
        toast("Please Login first")
    };
    const notify_add_whishlist = () => {
        toast("Item added into Whishlist")
    };
    const getData = async () => {
        const data = await JSON.parse((localStorage.getItem('user-info')))
        // console.logh(data)
        user_id = data
    }
    useEffect(() => {
        getData()
    }, [getData])
    // const loginHandler = async (e) => {
    //     console.log("roken",token)
    //         let data = {token}
            // https://cors-anywhere.herokuapp.com/
    //         var Result = await fetch('https://beta.myrung.com/b/api/v2/auth/verifyToken', {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         });
    //     Result = await Result.json()
    //      verifyToken = Result;
       
    
    // }
    const addWhishlistHandler = async (e) => {
        // console.log("verify",verifyToken)
        console.log(token)
        if (token!=null) {
            // console.log(userdata.user.id)
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
            // console.log(user_id)
            let data = { product_id, user_id }
            // https://cors-anywhere.herokuapp.com/
            var Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/wishlists-add-product ', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        }
        else {
            notifywhish()
        }
        Result = await Result.json()
        var Data = Result.is_in_wishlist;
        // console.log(Data);
        if (Data === true) {
            notify_add_whishlist();
        }
        else if (Data === false) {

        }
    }
    const options1 = {
        responsive: {
            0: {
                items: 2,

            },
            480: {
                items: 2,

            },
            768: {
                items: 3,

            },
            992: {
                items: 4,

            },
            1200: {
                items: 4,
                nav: false,

            },
        },
    };

    return (
        <>
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Featured  Products</h2>
                </div>
                {/* <!-- End .heading --> */}

                <OwlCarousel className=" owl-theme owl-carousel owl-simple carousel-equal-height carousel-with-shadow" dots={true}
                    nav={false} margin={20} autoPlay={true} loop={false} {...options1} >
                    {product ? product.map((item, index) => {
                        var cat_name = item.category_name
                        {/* console.log(item) */ }
                        var name = item.name
                        var calculable_price = item.calculable_price
                        var currency_symbol = item.currency_symbol
                        var image = item.thumbnail_image
                        var product_id = item.id
                        var quantity = item.quantity
                        return (

                            <div className="product product-2" key={index}>
                                <figure className="product-media">
                                    <NavLink to={`/shop/product/catogeroy/fullwidth/${item.id}`} >
                                        <img src={'https://beta.myrung.com/b/public/' + item.thumbnail_image} alt="Product image" className="product-image" />
                                    </NavLink>
                                    <div className="product-action-vertical">
                                        <a onClick={addWhishlistHandler} data-id={product_id} className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                    </div>
                                    {/* <!-- End .product-action --> */}

                                    <div onClick={notify} className="product-action product-action-transparent">
                                        <a onClick={() => {
                                            props.addToCartHandler({
                                                cat_name: cat_name, name: name,
                                                Price: calculable_price, symbol: currency_symbol, product_image: image, product_id: product_id, quantity: 1
                                            })
                                        }} className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                    {/* <!-- End .product-action --> */}
                                </figure>
                                {/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a >{cat_name}</a>
                                    </div>
                                    {/* <!-- End .product-cat --> */}
                                    <h3 className="product-title">
                                        <a >{name}</a></h3>
                                    {/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        {calculable_price}
                                    </div>
                                    {/* <!-- End .product-price --> */}

                                    {/* <!-- <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style="background: #2d272b;"><span className="sr-only">Color name</span></a>
                                        <a href="#" style="background: #8f957d;"><span className="sr-only">Color name</span></a>
                                    </div> -->
                                    <!-- End .product-nav --> */}
                                </div>
                                {/* <!-- End .product-body --> */}
                            </div>
                        );
                    }) : ""
                    }

                    {/* <!-- End .product --> */}

                    {/* <!-- End .owl-carousel --> */}
                </OwlCarousel>
                
            </div>
            <div class="mb-5"></div>
            {/* <!-- End .mb-5 --> */}

        </>
    );
}
export default Featured;