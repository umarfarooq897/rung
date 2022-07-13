import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import Quickviewcontainer from "../container/Quickviewcontainer";
import { useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const ProductCard = (props) => {
    const [popId, setPopId] = useState()
    const [showpopup, setShowPopup] = useState()
    const location = useLocation()
    // const { itemId } = location.state;
    let item_id = props.itemId
    var product = props.array;
    var user_id;
    var token;
    var Value=1;
    const Token = () => {
        token = sessionStorage.getItem('user-info_token')
    }
    useEffect(() => {
        Token()
    }, [Token])
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
            let data = { product_id,user_id}
            // https://cors-anywhere.herokuapp.com/
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

    const quickView = (e) => {
        setPopId(e)
        setShowPopup("d-block")
        
    }
    const hidePopup = () => {
        setShowPopup("d-none")
    }
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
                            <a style={{    cursor: "pointer"}} onClick={addWhishlistHandler} data-id={product.id} className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                            <div onClick={() => { quickView(product.id) }} className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></div>
                            {/* <NavLink to='' className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></NavLink> */}
                        </div>
                        {/* <ToastContainer /> */}
                        <div onClick={notify} className="product-action">
                            <a onClick={() => {
                                props.addToCartHandler({
                                    cat_name: product.category_name, name: product.name, quantity: Value,
                                    Price: product.calculable_price, symbol: product.currency_symbol,
                                    product_image: product.thumbnail_image, product_id: product.id,totalprice:(Value*product.calculable_price)
                                })
                            }}
                                className="btn-product btn-cart"><span>add to cart</span></a>
                        </div>
                    </figure>
                    <div className="product-body">
                        <div className="product-cat">
                            <a href="#">{product.category_name}</a>
                        </div>
                        <h3 className="product-title"><a href="#">{product.name}</a></h3>
                        <div className="product-price">
                            {product.currency_symbol}{product.calculable_price}
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
            <div onClick={hidePopup} className={"popup-overlay " + showpopup}></div>
            {showpopup==="d-block"?
            <div id="quick_view_popup" className={showpopup}>
                <div onClick={hidePopup} className="close-btn"><i className="icon-close"></i></div>
                <Quickviewcontainer  itemId={popId} />
            </div>:''}
            </div>

        </>
    )
}
export default ProductCard;