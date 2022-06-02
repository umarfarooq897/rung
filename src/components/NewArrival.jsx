import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import product_5_1 from "../assets/images/demos/demo-5/products/product-5-1.jpg";
import product_5_2 from "../assets/images/demos/demo-5/products/product-5-2.jpg";

const NewArrivel = (props) => {
    const [Product, SetProduct] = useState([]);
    // const [userdata, setUserdata] = useState()
    // const [user_id, setUser_id] = useState()
    var user_id;
    const newProductApi = async () => {
        // https://cors-anywhere.herokuapp.com/
        const response = await fetch("https://beta.myrung.com/b/api/v2/products");
        const data = await response.json();
        var insidData = data.data;
        SetProduct(insidData);
        console.log(insidData);   
    }
    useEffect(() => {
        newProductApi();
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
    const notify_add_whishlist = () => {
        toast("Item added into Whishlist")
    };
    const notifylogin = () => {
        toast("Please Login first")
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
            // console.log()
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
            let data = {product_id,user_id}
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
        else{
            notifylogin();
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
    return (
        <>
            <div className="container pt-6 new-arrivals">
                <div className="heading heading-center mb-3">
                    <h2 className="title">New Arrivals</h2>
                    {/* <!-- End .title --> */}

                    <ul className="nav nav-pills justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab"
                                role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="new-cloth-link" data-toggle="tab" href="#new-cloth-tab" role="tab"
                                aria-controls="new-cloth-tab" aria-selected="false">Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="new-shoes-link" data-toggle="tab" href="#new-shoes-tab" role="tab"
                                aria-controls="new-shoes-tab" aria-selected="false">Shoes & Boots</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="new-access-link" data-toggle="tab" href="#new-access-tab" role="tab"
                                aria-controls="new-access-tab" aria-selected="false">Accessories</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- End .heading --> */}

                <div className="tab-content">
                    <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel"
                        aria-labelledby="new-all-link">
                        <div className="products">
                            <div className="row justify-content-center">
                                {Product.map((item, i) => {
                                    var background1 = "https://beta.myrung.com/b/public/" + item.thumbnail_image;
                                    var cat_name = item.category_name
                                    var name = item.name
                                    var calculable_price = item.calculable_price
                                    var currency_symbol = item.currency_symbol
                                    {/* var main_price = item.main_price */}
                                    var image = item.thumbnail_image
                                    var product_id = item.id
                                    {/* console.log(background1); */ }
                                    return (
                                        <>
                                            <div className="col-6 col-md-4 col-lg-3">
                                                <div className="product product-2">
                                                    <figure className="product-media">
                                                        <NavLink to={`/shop/product/catogeroy/fullwidth/${item.id}`} >
                                                            <img src={background1}
                                                                alt="Product image" className="product-image" />
                                                            {/* <img src={background1}
                                                                alt="Product image" className="product-image-hover" /> */}
                                                        </NavLink>

                                                        <div className="product-action-vertical">
                                                            <a onClick={addWhishlistHandler} data-id={product_id} className="btn-product-icon btn-wishlist"
                                                                title="Add to wishlist"><span>add to wishlist</span></a>
                                                        </div>
                                                        {/* <!-- End .product-action --> */}
                                                                <ToastContainer/>
                                                        <div onClick={notify} className="product-action product-action-transparent">
                                                            <a onClick={() => { props.addToCartHandler({ cat_name: cat_name, name: name,quantity:1,
                                                             Price:calculable_price, symbol:currency_symbol,product_image:image,product_id:product_id }) }}
                                                                className="btn-product btn-cart"><span>add to cart</span></a>
                                                        </div>
                                                        {/* <!-- End .product-action --> */}
                                                    </figure>
                                                    {/* <!-- End .product-media --> */}

                                                    <div className="product-body">
                                                        <div className="product-cat">
                                                            <NavLink to=''>{item.category_name}</NavLink>
                                                        </div>
                                                        {/* <!-- End .product-cat --> */}
                                                        <h3 className="product-title"><NavLink to=''>{item.name}</NavLink></h3>
                                                        {/* <!-- End .product-title --> */}
                                                        <div className="product-price">
                                                        {item.currency_symbol}{item.calculable_price}
                                                        </div>
                                                        {/* <!-- End .product-price --> */}
                                                    </div>
                                                    {/* <!-- End .product-body --> */}
                                                </div>
                                                {/* <!-- End .product --> */}
                                            </div>
                                        </>
                                    );
                                })}


                            </div>
                            {/* <!-- End .row --> */}
                        </div>
                        {/* <!-- End .products --> */}
                    </div>

                </div>
                {/* <!-- End .tab-content --> */}

                <div className="more-container text-center mt-1 mb-3">
                    <a href="#" className="btn btn-outline-primary-2 btn-round btn-more">Load more</a>
                </div>
                {/* <!-- End .more-container --> */}
            </div>
            {/* <!-- End .container --></div> */}
        </>
    );
}
export default NewArrivel;