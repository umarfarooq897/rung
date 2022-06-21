import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickViewPopup from "./QuickViewPopup";

const Related_product = (props) => {
    // console.warn("product",props.data)
    const [Product, SetProduct] = useState([]);
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    // const [user_id, setUser_id] = useState()
    var user_id;
    var path = window.location.pathname;
    var splitCurUrl = path.split('/');
    const nthElementcurnt = (splitCurUrl, n = 0) => (n > 0 ? splitCurUrl.slice(n, n + 1) : splitCurUrl.slice(n))[0];
    var Page_Title_id = nthElementcurnt(splitCurUrl, -1);
    var productsapilink = " https://beta.myrung.com/b/api/v2/products/category/" + Page_Title_id
    const getProductApi = async () => {
        const response = await fetch(productsapilink);
        const data = await response.json();
        var productData = data.data;
        SetProduct(productData);
    }
    useEffect(() => {
        getProductApi();
    }, []);
    useEffect(() => {
        priceFilter();
    }, [min]);
    useEffect(() => {
        priceFilter();
    }, [max]);
    const priceFilter = async () => {
        setMin(sessionStorage.getItem('min'))
        // console.log(min)
        setMax(sessionStorage.getItem('max'))
        // console.log(max)
    }
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
        const data = await JSON.parse((localStorage.getItem('user-info_token')))
        user_id = data
    }
    useEffect(() => {
        getData()
    }, [getData])
    const addWhishlistHandler = async (e) => {
        if (user_id) {
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
            let data = { product_id, user_id }
            // https://cors-anywhere.herokuapp.com/
            var Result = await fetch(' https://beta.myrung.com/b/api/v2/wishlists-add-product ', {
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
    const [popId, setPopId] = useState()
    const [showpopup, setShowPopup] = useState()
    const quickView = (e)=>{
        setPopId(e)
        console.log(popId)
        setShowPopup("d-block")
    }
    const hidePopup = ()=>{
        setShowPopup("d-none")

    }
    return (
        <>
            <div className="products mb-3">
                <div className="row justify-content-center">
                    {Product.map((product, index) => {
                        document.getElementById('cat_title').innerText = product.category_name;
                        var cat_name = product.category_name
                        var name = product.name
                        var calculable_price = product.calculable_price
                        var currency_symbol = product.currency_symbol
                        var image = product.thumbnail_image
                        var product_id = product.id

                        // console.log(calculable_price)
                        return (
                            <>

                                <div className="col-6">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-new">New</span>
                                            <NavLink to={`/shop/product/catogeroy/fullwidth/${product.id}`}>
                                                <img src={"https://beta.myrung.com/b/public/" + product.thumbnail_image} alt="Product image" className="product-image" />
                                            </NavLink>
                                            <div className="product-action-vertical">
                                                <NavLink to='' onClick={addWhishlistHandler} data-id={product_id} className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></NavLink>
                                                <div onClick={()=>{quickView(product_id)}} className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></div>
                                                {/* <NavLink to='' className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></NavLink> */}
                                            </div>
                                            <ToastContainer />
                                            <div onClick={notify} className="product-action">
                                                <a onClick={() => {
                                                    props.addToCartHandler({
                                                        cat_name: cat_name, name: name, quantity: 1,
                                                        Price: calculable_price, symbol: currency_symbol,
                                                        product_image: image, product_id: product_id
                                                    })
                                                }}
                                                    className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>
                                        </figure>
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">{cat_name}</a>
                                            </div>
                                            <h3 className="product-title"><a href="product.php">{name}</a></h3>
                                            <div className="product-price">
                                                {currency_symbol}{calculable_price}
                                            </div>
                                            {/* <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: "20%" }}></div>
                                                </div>
                                                <span className="ratings-text">( 2 Reviews )</span>
                                            </div> */}
                                            {/* <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src={product_thumb_4}  alt="product desc"/>
                                                </a>
                                                <a href="#">
                                                    <img src={product_thumb_4_2} alt="product desc"/>
                                                </a>

                                                <a href="#">
                                                    <img src={product_thumb_4_3} alt="product desc"/>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );


                    })}
                    {/* <!-- End .col-sm-6 --> */}
                </div>
                {/* <!-- End .row --> */}
            </div>

            <div onClick={hidePopup} className={"popup-overlay " + showpopup}></div>
            <div id="quick_view_popup" className={showpopup}>
                <div onClick={hidePopup} className="close-btn"><i className="icon-close"></i></div>
                <QuickViewPopup itemId={popId} />
            </div>


        </>
    );
}
export default Related_product;
