import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quickviewcontainer from "../container/Quickviewcontainer";
import ProductCard from "./ProductCard";
import Sidebar from "./Shopsidbar";

const Related_product = (props) => {
    const [Product, SetProduct] = useState([]);
    const [isloding, setIsloading] = useState(true);
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const location = useLocation()
    const { itemId } = location.state;
    let item_id = itemId
    // const [user_id, setUser_id] = useState()
    var user_id;
    // var path = window.location.pathname;
    // var splitCurUrl = path.split('/');
    // const nthElementcurnt = (splitCurUrl, n = 0) => (n > 0 ? splitCurUrl.slice(n, n + 1) : splitCurUrl.slice(n))[0];
    // var Page_Title_id = nthElementcurnt(splitCurUrl, -1);
    var productsapilink = " https://beta.myrung.com/b/api/v2/products/category/" + item_id
    const getProductApi = async () => {
        const response = await fetch(productsapilink);
        const data = await response.json();
        var productData = data.data;
        SetProduct(productData);
        console.log(productData)
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
        const data = await JSON.parse((sessionStorage.getItem('user-info_token')))
        user_id = data
    }
    useEffect(() => {
        getData()
    }, [getData])

    const priceFilter = () => {
        // You can await here
        setMin(localStorage.getItem('min'));
        setMax(localStorage.getItem('max'))
        // ...
    }
    useEffect(() => {
        priceFilter()
        setIsloading(false)
        console.log("pricefilter")
        
    }, [isloding])
    useEffect(() => {
        filter()
    }, [isloding])
    const filter = async (e) => {
        // setUser_id(userdata.user.id)
        // let product_id = e.target.getAttribute("data-id")
        console.log(min)
        console.log(max)
        console.log("cat", id)
        let data = { min, max, id }
        // https://cors-anywhere.herokuapp.com
        var Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/products/pricefilter', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        Result = await Result.json()
        var productData = Result.data;
        setFilter(productData)
    }



    const addWhishlistHandler = async (e) => {
        if (user_id) {
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
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
    const [popId, setPopId] = useState()
    const [showpopup, setShowPopup] = useState()
    const quickView = (e) => {
        setPopId(e)
        // console.log(popId)
        setShowPopup("d-block")
    }
    const hidePopup = () => {
        setShowPopup("d-none")
    }
    // console.log("minnn",min)
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="products mb-3">
                                <div className="row justify-content-center">
                                    {/* {Product.map((item, index) => {
                                        document.getElementById('cat_title').innerText = item.category_name;
                                        id = item.category_id
                                        {/* console.log("cat",name) */ }
                                    {/* })} */}
                                    {filterP ? filterP.map((product, index) => {
                                        {/* document.getElementById('cat_title').innerText = product.category_name;  */ }
                                        {/* cat_name = product.category_name */ }
                                        {/* console.log("cat",cat_name) */ }
                                        {/* var name = product.name */ }
                                        var calculable_price = product.calculable_price
                                        var currency_symbol = product.currency_symbol
                                        var image = product.thumbnail_image
                                        var product_id = product.id
                                        return (
                                            <ProductCard array={product} />
                                        );
                                    })
                                        : ""}
                                    {/* <!-- End .col-sm-6 --> */}
                                </div>
                                {/* <!-- End .row --> */}
                            </div>

                            <div onClick={hidePopup} className={"popup-overlay " + showpopup}></div>
                            <div id="quick_view_popup" className={showpopup}>
                                <div onClick={hidePopup} className="close-btn"><i className="icon-close"></i></div>
                                <Quickviewcontainer itemId={popId} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}
export default Related_product;
