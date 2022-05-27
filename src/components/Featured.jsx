import React, { useEffect, useState, useCallback } from "react";
import OwlCarousel from 'react-owl-carousel';
// import { useNavigate } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import product1_1 from '../assets/images/demos/demo-5/products/product-1-1.jpg';
// import product1_2 from '../assets/images/demos/demo-5/products/product-1-2.jpg';
// import product2_1 from "../assets/images/demos/demo-5/products/product-2-1.jpg";
// import product2_2 from "../assets/images/demos/demo-5/products/product-2-2.jpg";
// import product3_1 from "../assets/images/demos/demo-5/products/product-3-1.jpg";
// import product3_2 from "../assets/images/demos/demo-5/products/product-3-2.jpg";
// import product4_1 from "../assets/images/demos/demo-5/products/product-4-1.jpg";
// import product4_2 from "../assets/images/demos/demo-5/products/product-4-2.jpg";
import { NavLink } from "react-router-dom";
const Featured = (props) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    // const [userdata, setUserdata] = useState()
    // const [user_id, setUser_id] = useState();
    var user_id;
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
    useEffect(() => {
        getFeaturedApi()
    }, []);
    const notify = () => {

        toast("Item added")
    };
    const notifywhish = () => {
        toast("Please Login first")
    };
    const notify_add_whishlist = () => {
        toast("Item added into Whishlist")
    };
    const getData = async () => {
        const data = await JSON.parse((localStorage.getItem('user-info')))
        user_id = data.user.id
    }
    useEffect(() => {
        getData()
    }, [getData])
    const addWhishlistHandler = async (e) => {
        if (user_id) {
            // console.log(userdata.user.id)
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
            console.log(user_id)
            let data = {product_id,user_id}
            // https://cors-anywhere.herokuapp.com/
            var Result = await fetch('https://beta.myrung.com/b/api/v2/wishlists-add-product ', {
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
        var Data=Result.is_in_wishlist;
        // console.log(Data);
        if(Data===true)
        {
            notify_add_whishlist();
        }
        else if(Data===false){
            
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
                    {/* <!-- End .title --> */}

                    <ul className="nav nav-pills justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="trendy-all-link" data-toggle="tab" href="#trendy-all-tab" role="tab" aria-controls="trendy-all-tab" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trendy-women-link" data-toggle="tab" href="#trendy-women-tab" role="tab" aria-controls="trendy-women-tab" aria-selected="false">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trendy-men-link" data-toggle="tab" href="#trendy-men-tab" role="tab" aria-controls="trendy-men-tab" aria-selected="false">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="trendy-access-link" data-toggle="tab" href="#trendy-access-tab" role="tab" aria-controls="trendy-access-tab" aria-selected="false">Accessories</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- End .heading --> */}

                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel" aria-labelledby="trendy-all-link">
                        <OwlCarousel className=" owl-theme owl-carousel owl-simple carousel-equal-height carousel-with-shadow" dots={true}
                            nav={false} margin={20} autoPlay={true} loop={false} {...options1} >
                            {product ? product.map((item, index) => {
                                var cat_name = item.category_name
                                var name = item.name
                                var main_price = item.main_price
                                var image = item.thumbnail_image
                                var product_id = item.id
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
                                                        main_price: main_price, product_image: image, product_id: product_id
                                                    })
                                                }} className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>
                                            {/* <!-- End .product-action --> */}
                                        </figure>
                                        {/* <!-- End .product-media --> */}

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>
                                            {/* <!-- End .product-cat --> */}
                                            <h3 className="product-title">
                                                <a href="product.html">Vest dress</a></h3>
                                            {/* <!-- End .product-title --> */}
                                            <div className="product-price">
                                                $9.99
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

                    {/* <!-- .End .tab-pane --> */}
                    {/* <div className="tab-pane p-0 fade" id="trendy-women-tab" role="tabpanel" aria-labelledby="trendy-women-link"> */}
                    {/* <OwlCarousel className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" 
                            margin={20} loop={false} {...options1}  >

                        </OwlCarousel> */}
                    {/* <!-- End .owl-carousel --> */}
                    {/* </div> */}
                    {/* <!-- .End .tab-pane --> */}
                    {/* <div className="tab-pane p-0 fade" id="trendy-men-tab" role="tabpanel" aria-labelledby="trendy-men-link"> */}
                    {/* <OwlCarousel className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" 
                               margin={20} loop={false} {...options1}  >



                        </OwlCarousel> */}
                    {/* <!-- End .owl-carousel --> */}
                    {/* </div> */}
                    {/* <!-- .End .tab-pane --> */}
                    {/* <div className="tab-pane p-0 fade" id="trendy-access-tab" role="tabpanel" aria-labelledby="trendy-access-link"> */}
                    {/* <OwlCarousel className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" 
                             margin={20} loop={false} {...options1}   >
                        </OwlCarousel> */}
                    {/* <!-- End .owl-carousel --> */}
                    {/* </div> */}
                    {/* <!-- .End .tab-pane --> */}
                </div>
                {/* <!-- End .tab-content --> */}
            </div>
            <div class="mb-5"></div>
            {/* <!-- End .mb-5 --> */}

        </>
    );
}
export default Featured;