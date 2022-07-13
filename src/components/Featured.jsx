import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import ProductSkeltonCard from "./Productskeltoncard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import axios from "axios";
const Featured = (props) => {

    const [isloading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    var token
    var user_id;
    var Value = 1;
    var verifyToken;
    let FeaturedProduct = [];
    useEffect(() => {
        setTimeout(() => {
            axios.get("https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/products/featured")
                .then(res => {
                    var insidData = res.data.data;
                    setProduct(insidData);
                    setLoading(false)
                })
        }, 1000)
    }, [isloading])
    // var api ='https://beta.myrung.com/b/api/v2/products/featured';
    // const getFeaturedApi = async () => {
    //     const response = await fetch(api);
    //     const data = await response.json();
    //     FeaturedProduct = data.data;
    //     setProduct(FeaturedProduct)
    //     setLoading(false)
    // }
    const Token = () => {
        token = sessionStorage.getItem('user-info_token')
    }
    useEffect(() => {
        Token()
    }, [Token])
    // useEffect(() => {
    //     getFeaturedApi()
    // },[loading]);
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
        user_id = data
    }
    useEffect(() => {
        getData()
    }, [getData])

    const addWhishlistHandler = async (e) => {
        if (token != null) {
            // console.log(e.target.getAttribute("data-id"))
            let product_id = e.target.getAttribute("data-id")
            let data = { product_id, user_id }
            var Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/wishlists-add-product ', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + token

                }
            });
        }
        else {
            notifywhish()
        }
        Result = await Result.json()
        var Data = Result.is_in_wishlist;
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
                {/* <SkeletonTheme baseColor="black" highlightColor="grey">
								{isloading ?
                                    <OwlCarousel className=" owl-theme owl-carousel owl-simple carousel-equal-height carousel-with-shadow" dots={true}
                    nav={false} margin={20} autoPlay={true} loop={false} {...options1} >
                        <h1><Skeleton/></h1>
                        <h1><Skeleton/></h1>
                        <h1><Skeleton/></h1>
                        <h1><Skeleton/></h1>
                        <h1><Skeleton/></h1>
                    </OwlCarousel>
                    : */}

                <OwlCarousel className=" owl-theme owl-carousel owl-simple carousel-equal-height carousel-with-shadow" dots={true}
                    nav={false} margin={20} autoPlay={true} loop={false} {...options1} >
                    {
                        <SkeletonTheme baseColor="rgb(244 244 244)" highlightColor="#fff">
                            {isloading ?
                                <>
                                    <ProductSkeltonCard  />
                                    <ProductSkeltonCard  />
                                    <ProductSkeltonCard  />
                                    
                                </>
                                :
                                product ? product.map((item, index) => {
                                    var cat_name = item.category_name
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
                                                            Price: calculable_price, symbol: currency_symbol, product_image: image, product_id: product_id, quantity: Value,
                                                            totalprice: (Value * calculable_price)
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
                        </SkeletonTheme>
                    }
                </OwlCarousel>
            </div>
            <div className="mb-5"></div>
            {/* <!-- End .mb-5 --> */}

        </>
    );
}
export default Featured;