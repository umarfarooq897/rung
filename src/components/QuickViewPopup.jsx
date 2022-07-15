import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuickViewPopup = (props) => {
    const [Product, SetProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    var [Value, setValue] = useState(1);
    const [reload, setReload] = useState(1)
    // var data=props.data.cardData
    function reloadComp() {
        setReload(reload + 1)
    }
    const inputDecrement = () => {
        if (Value > 1) {
            setValue(Value - 1);
        }

        else {
            setValue(1)
        }
    }
    const inputIncrement = () => {
        if (Value < 10)
            setValue(Value + 1)
    }
    var user_id;
    // https://cors-anywhere.herokuapp.com/
    var fullwidthapilink = "https://beta.myrung.com/b/api/v2/products/" + props.itemId;
    const getProductApi = async () => {
        const response = await fetch(fullwidthapilink);
        const data = await response.json();
        var productData = data.data;
        SetProduct(productData);
    }
    useEffect(() => {
        getProductApi();
    }, [props.itemId]);
    const notifyitem = () => {
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
            let product_id = e.target.getAttribute("data-id")
            // console.log(e.target.getAttribute("data-id"))
            let data = { product_id, user_id }
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
        var Data = Result.is_in_wishlist;
        if (Data === true) {
            notify_add_whishlist();
        }
        else if (Data === false) {

        }
    }
    return (
        <>
            <div className="page-content pb-0" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 ">
                            <div className="product-details-top">
                                <div className="row">
                                    {Product.map((item, index) => {
                                        var name = item.name
                                        var calculable_price = item.calculable_price
                                        var currency_symbol = item.currency_symbol
                                        var image = item.thumbnail_image
                                        var product_id = item.id
                                        var product_price = item.main_price
                                        return (
                                            <>
                                                <div className="col-md-6" key={index}>
                                                    <div className="product-gallery">

                                                        <figure className="product-main-image">
                                                            <span className="product-label label-sale">Sale</span>
                                                            <img id="product-zoom" src={"https://beta.myrung.com/b/public/" + item.thumbnail_image} data-zoom-image={"https://beta.myrung.com/b/public/" + item.thumbnail_image} alt="product image" />

                                                            <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                                                <i className="icon-arrows"></i>
                                                            </a>
                                                        </figure>
                                                        {/* <!-- End .product-main-image --> */}

                                                        <div id="product-zoom-gallery" className="product-image-gallery max-col-6">
                                                            <a className="product-gallery-item active" href="#" data-image={"https://beta.myrung.com/b/public/" + item.thumbnail_image} data-zoom-image="assets/images/products/single/fullwidth/1-big.jpg">
                                                                <img src={"https://beta.myrung.com/b/public/" + item.thumbnail_image} alt="product side" />
                                                            </a>

                                                            {/* <a className="product-gallery-item" href="#" data-image="assets/images/products/single/fullwidth/2.jpg" data-zoom-image="assets/images/products/single/fullwidth/2-big.jpg">
                                                    <img src="assets/images/products/single/fullwidth/2-small.jpg" alt="product cross" />
                                                </a>

                                                <a className="product-gallery-item " href="#" data-image="assets/images/products/single/fullwidth/3.jpg" data-zoom-image="assets/images/products/single/fullwidth/3-big.jpg">
                                                    <img src="assets/images/products/single/fullwidth/3-small.jpg" alt="product with model" />
                                                </a>

                                                <a className="product-gallery-item" href="#" data-image="assets/images/products/single/fullwidth/4.jpg" data-zoom-image="assets/images/products/single/fullwidth/4-big.jpg">
                                                    <img src="assets/images/products/single/fullwidth/4-small.jpg" alt="product back" />
                                                </a> */}

                                                        </div>
                                                        {/* <!-- End .product-image-gallery --> */}
                                                    </div>
                                                    {/* <!-- End .product-gallery --> */}
                                                </div>


                                                {/* <!-- End .col-lg-7 --> */}

                                                <div className="col-md-6">
                                                    <div className="product-details">
                                                        <h1 className="product-title">{item.name}</h1>
                                                        {/* <!-- End .product-title --> */}

                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val" style={{ width: item.rating }}></div>
                                                                {/* <!-- End .ratings-val --> */}
                                                            </div>
                                                            {/* <!-- End .ratings --> */}
                                                            <a className="ratings-text" href="#product-accordion" id="review-link">( 2 Reviews )</a>
                                                        </div>
                                                        {/* <!-- End .rating-container --> */}

                                                        <div className="product-price">
                                                            <span className="new-price">{item.main_price}</span>
                                                            {/* <span className="old-price">$110.00</span> */}
                                                        </div>
                                                        {/* <!-- End .product-price --> */}

                                                        <div className="product-content">
                                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                                                        </div>
                                                        {/* <!-- End .product-content --> */}

                                                        {/* <!-- End .details-filter-row --> */}

                                                        <div className="details-filter-row details-row-size">
                                                            <label htmlFor="size">Size:</label>
                                                            <div className="select-custom">
                                                                <select name="size" id="size" defaultValue="#" className="form-control">
                                                                    <option value="#" >Select a size</option>
                                                                    <option value="s">Small</option>
                                                                    <option value="m">Medium</option>
                                                                    <option value="l">Large</option>
                                                                    <option value="xl">Extra Large</option>
                                                                </select>
                                                            </div>
                                                            {/* <!-- End .select-custom --> */}
                                                        </div>
                                                        {/* <!-- End .details-filter-row --> */}

                                                        <div className="details-filter-row details-row-size">
                                                            <label htmlFor="qty">Qty:</label>
                                                            <div className="product-details-quantity" >
                                                                <div className="input-group-prepend"><button onClick={inputDecrement} className="btn btn-qantity-mines btn-decrement btn-spinner" type="button">
                                                                    <i className="icon-minus"></i></button>
                                                                </div>
                                                                <input type="number" disabled id="quantity" value={Value} className="form-control" min="1" max="10" step="1" data-decimals="0" required />
                                                                <div className="input-group-append">
                                                                    <button onClick={inputIncrement} className="btn btn-qantity-plus btn-increment btn-spinner" type="button">
                                                                        <i className="icon-plus"></i></button>
                                                                </div>
                                                            </div>
                                                            {/* <!-- End .product-details-quantity --> */}
                                                        </div>
                                                        {/* <!-- End .details-filter-row --> */}

                                                        {/* <ToastContainer /> */}
                                                        <div  className="product-details-action">
                                                            {console.log("valuse",Value)}
                                                            <a onClick={() => {
                                                                props.addToCartHandler({
                                                                    name: name, Price: calculable_price, symbol: currency_symbol, quantity: Value,
                                                                    product_image: image, product_id: product_id,totalprice:(Value*calculable_price),
                                                                }); notifyitem()
                                                            }}
                                                                className="btn-product btn-cart add_to_cat "><span >add to cart</span></a>
                                                            <div className="details-action-wrapper">
                                                                <a onClick={addWhishlistHandler} data-id={product_id} className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                                {/* <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a> */}
                                                            </div>
                                                            </div>



                                                            {/* <!-- End .details-action-wrapper --> */}
                                                        
                                                        {/* <!-- End .product-details-action --> */}

                                                        
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default QuickViewPopup;