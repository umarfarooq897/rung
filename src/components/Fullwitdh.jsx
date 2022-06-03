import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fullwitdh = (props) => {
    console.log(props)
    const [Product, SetProduct] = useState([]);
    const [relatedProduct, SetRelatedProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    var [Value, setValue] = useState(1);
    const [reload, setReload] = useState(1)
    function reloadComp() {
        setReload(reload + 1)
        // console.log(reload)
    }
    // const inputDecrement = () => {
    //     if (Value > 1) {
    //         setValue(Value - 1);
    //       }
      
    //       else {
    //         setValue(1)
    //       }
    // }
    // const inputIncrement = () => {
        // Product[0].current_stock
    //    if(Value<10)
    //     setValue(Value + 1)
    // }
    // const [userdata, setUserdata] = useState()
    // const [user_id, setUser_id] = useState()
    var user_id;
    var path = window.location.pathname;
    var splitCurUrl = path.split('/');
    const nthElementcurnt = (splitCurUrl, n = 0) => (n > 0 ? splitCurUrl.slice(n, n + 1) : splitCurUrl.slice(n))[0];
    var Page_Title_id = nthElementcurnt(splitCurUrl, -1);
    // https://cors-anywhere.herokuapp.com/
    var fullwidthapilink = "https://beta.myrung.com/b/api/v2/products/" + Page_Title_id;
    const getProductApi = async () => {
        const response = await fetch(fullwidthapilink);
        const data = await response.json();
        var productData = data.data;
        // console.log(Product[0].current_stock)
        SetProduct(productData);
    }
    useEffect(() => {
        getProductApi();
    }, [reload]);
    const relatedProductApi = async () => {
        // https://cors-anywhere.herokuapp.com/
        const response = await fetch("https://beta.myrung.com/b/api/v2/products/related/6");
        const data = await response.json();
        var insidData = data.data;
        SetRelatedProduct(insidData);
        setLoading(false)
    }
    useEffect(() => {
        relatedProductApi();
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
        user_id = data.user.id
    }
    useEffect(() => {
        getData()
    }, [getData])
    const addWhishlistHandler = async (e) => {
        if (user_id) {
            // setUser_id(userdata.user.id)
            let product_id = e.target.getAttribute("data-id")
            console.log(e.target.getAttribute("data-id"))
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
        // console.log(Data);
        if (Data === true) {
            notify_add_whishlist();
        }
        else if (Data === false) {

        }
    }
    // const toggleChecked = () => setChecked(Value => !value);
    // useEffect(() => {
    //     toggleChecked();
    // }, [checked]);
    return (
        <>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 ">
                            <div className="product-details-top">
                                <div className="row">
                                    {Product.map((item, index) => {
                                        console.log(item) 
                                        {/* var cat_name = item.category_name */}
                                        var name = item.name
                                        var calculable_price = item.calculable_price
                                        var currency_symbol = item.currency_symbol
                                        var quantity = item.quantity
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
                                                            <label for="size">Size:</label>
                                                            <div className="select-custom">
                                                                <select name="size" id="size" className="form-control">
                                                                    <option value="#" selected="selected">Select a size</option>
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
                                                            <label for="qty">Qty:</label>
                                                            <div className="product-details-quantity" >
                                                                <div className="input-group-prepend"><button  onClick={() => { props.DecreHandler({ Price: calculable_price, quantity: item.quantity, product_id: product_id }) }} className="btn btn-qantity-mines btn-decrement btn-spinner" type="button">
                                                                    <i className="icon-minus"></i></button>
                                                                </div>
                                                                <input type="number" disabled id="quantity" onChange={(e) => e.target.value} value={item.quantity} className="form-control" min="1" max="10" step="1" data-decimals="0" required />
                                                                <div className="input-group-append">
                                                                    <button onClick={() => { props.IncreHandler({ Price: calculable_price, quantity:item.quantity, product_id: product_id }) }} className="btn btn-qantity-plus btn-increment btn-spinner" type="button">
                                                                        <i className="icon-plus"></i></button>
                                                                </div>
                                                            </div>
                                                            {/* <!-- End .product-details-quantity --> */}
                                                        </div>
                                                        {/* <!-- End .details-filter-row --> */}

                                                        <ToastContainer />
                                                        <div onClick={notify} className="product-details-action">

                                                            <a onClick={() => {
                                                                props.addToCartHandler({
                                                                     name: name, Price:calculable_price, symbol:currency_symbol,quantity:item.quantity,
                                                                    product_image: image, product_id: product_id,
                                                                })
                                                            }}
                                                                className="btn-product btn-cart add_to_cat "><span >add to cart</span></a>




                                                            <div className="details-action-wrapper">
                                                                {/* {console.log(product_id)} */}
                                                                <a onClick={addWhishlistHandler} data-id={product_id} className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                                {/* <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a> */}
                                                            </div>
                                                            {/* <!-- End .details-action-wrapper --> */}
                                                        </div>
                                                        {/* <!-- End .product-details-action --> */}

                                                        <div className="product-details-footer">
                                                            <div className="product-cat">
                                                                <span>Category:</span>
                                                                <a href="#">Women</a>,
                                                                <a href="#">Dresses</a>,
                                                                <a href="#">Yellow</a>
                                                            </div>
                                                            {/* <!-- End .product-cat --> */}

                                                            <div className="social-icons social-icons-sm">
                                                                <span className="social-label">Share:</span>
                                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                                            </div>
                                                        </div>
                                                        {/* <!-- End .product-details-footer --> */}

                                                        <div className="accordion accordion-plus d-none d-md-block product-details-accordion" id="product-accordion">
                                                            <div className="card card-box card-sm">
                                                                <div className="card-header" id="product-desc-heading">
                                                                    <h2 className="card-title">
                                                                        <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-desc" aria-expanded="false" aria-controls="product-accordion-desc">
                                                                            Description
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                {/* <!-- End .card-header --> */}
                                                                <div id="product-accordion-desc" className="collapse" aria-labelledby="product-desc-heading" data-parent="#product-accordion">
                                                                    <div className="card-body">
                                                                        <div className="product-desc-content">
                                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                                                                            <ul>
                                                                                <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                                                                <li>Vivamus finibus vel mauris ut vehicula.</li>
                                                                                <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                                                            </ul>

                                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.</p>
                                                                        </div>
                                                                        {/* <!-- End .product-desc-content --> */}
                                                                    </div>
                                                                    {/* <!-- End .card-body --> */}
                                                                </div>
                                                                {/* <!-- End .collapse --> */}
                                                            </div>
                                                            {/* <!-- End .card --> */}

                                                            <div className="card card-box card-sm">
                                                                <div className="card-header" id="product-info-heading">
                                                                    <h2 className="card-title">
                                                                        <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-info" aria-expanded="false" aria-controls="product-accordion-info">
                                                                            Additional Information
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                {/* <!-- End .card-header --> */}
                                                                <div id="product-accordion-info" className="collapse" aria-labelledby="product-info-heading" data-parent="#product-accordion">
                                                                    <div className="card-body">
                                                                        <div className="product-desc-content">
                                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                                                            <h3>Fabric & care</h3>
                                                                            <ul>
                                                                                <li>100% Polyester</li>
                                                                                <li>Do not iron</li>
                                                                                <li>Do not wash</li>
                                                                                <li>Do not bleach</li>
                                                                                <li>Do not tumble dry</li>
                                                                                <li>Professional dry clean only</li>
                                                                            </ul>

                                                                            <h3>Size</h3>
                                                                            <p>S, M, L, XL</p>
                                                                        </div>
                                                                        {/* <!-- End .product-desc-content --> */}
                                                                    </div>
                                                                    {/* <!-- End .card-body --> */}
                                                                </div>
                                                                {/* <!-- End .collapse --> */}
                                                            </div>
                                                            {/* <!-- End .card --> */}

                                                            <div className="card card-box card-sm">
                                                                <div className="card-header" id="product-shipping-heading">
                                                                    <h2 className="card-title">
                                                                        <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-shipping" aria-expanded="false" aria-controls="product-accordion-shipping">
                                                                            Shipping & Returns
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                {/* <!-- End .card-header --> */}
                                                                <div id="product-accordion-shipping" className="collapse" aria-labelledby="product-shipping-heading" data-parent="#product-accordion">
                                                                    <div className="card-body">
                                                                        <div className="product-desc-content">
                                                                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                                                                                We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                                                        </div>
                                                                        {/* <!-- End .product-desc-content --> */}
                                                                    </div>
                                                                    {/* <!-- End .card-body --> */}
                                                                </div>
                                                                {/* <!-- End .collapse --> */}
                                                            </div>
                                                            {/* <!-- End .card --> */}

                                                            <div className="card card-box card-sm">
                                                                <div className="card-header" id="product-review-heading">
                                                                    <h2 className="card-title">
                                                                        <a role="button" data-toggle="collapse" href="#product-accordion-review" aria-expanded="true" aria-controls="product-accordion-review">
                                                                            Reviews (2)
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                {/* <!-- End .card-header --> */}
                                                                <div id="product-accordion-review" className="collapse show" aria-labelledby="product-review-heading" data-parent="#product-accordion">
                                                                    <div className="card-body">
                                                                        <div className="reviews">
                                                                            <div className="review">
                                                                                <div className="row no-gutters">
                                                                                    <div className="col-auto">
                                                                                        <h4><a href="#">Samanta J.</a></h4>
                                                                                        <div className="ratings-container">
                                                                                            <div className="ratings">
                                                                                                <div className="ratings-val" style={{ width: "80%" }}></div>
                                                                                                {/* <!-- End .ratings-val --> */}
                                                                                            </div>
                                                                                            {/* <!-- End .ratings --> */}
                                                                                        </div>
                                                                                        {/* <!-- End .rating-container --> */}
                                                                                        <span className="review-date">6 days ago</span>
                                                                                    </div>
                                                                                    {/* <!-- End .col --> */}
                                                                                    <div className="col">
                                                                                        <h4>Good, perfect size</h4>

                                                                                        <div className="review-content">
                                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                                                        </div>
                                                                                        {/* <!-- End .review-content --> */}

                                                                                        <div className="review-action">
                                                                                            <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                                                            <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                                                        </div>
                                                                                        {/* <!-- End .review-action --> */}
                                                                                    </div>
                                                                                    {/* <!-- End .col-auto --> */}
                                                                                </div>
                                                                                {/* <!-- End .row --> */}
                                                                            </div>
                                                                            {/* <!-- End .review --> */}

                                                                            <div className="review">
                                                                                <div className="row no-gutters">
                                                                                    <div className="col-auto">
                                                                                        <h4><a href="#">John Doe</a></h4>
                                                                                        <div className="ratings-container">
                                                                                            <div className="ratings">
                                                                                                <div className="ratings-val" style={{ width: "100%" }}></div>
                                                                                                {/* <!-- End .ratings-val --> */}
                                                                                            </div>
                                                                                            {/* <!-- End .ratings --> */}
                                                                                        </div>
                                                                                        {/* <!-- End .rating-container --> */}
                                                                                        <span className="review-date">5 days ago</span>
                                                                                    </div>
                                                                                    {/* <!-- End .col --> */}
                                                                                    <div className="col">
                                                                                        <h4>Very good</h4>

                                                                                        <div className="review-content">
                                                                                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                                                        </div>
                                                                                        {/* <!-- End .review-content --> */}

                                                                                        <div className="review-action">
                                                                                            <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                                                            <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                                                        </div>
                                                                                        {/* <!-- End .review-action --> */}
                                                                                    </div>
                                                                                    {/* <!-- End .col-auto --> */}
                                                                                </div>
                                                                                {/* <!-- End .row --> */}
                                                                            </div>
                                                                            {/* <!-- End .review --> */}
                                                                        </div>
                                                                        {/* <!-- End .reviews --> */}
                                                                    </div>
                                                                    {/* <!-- End .card-body --> */}
                                                                </div>
                                                                {/* <!-- End .collapse --> */}
                                                            </div>
                                                            {/* <!-- End .card --> */}
                                                        </div>
                                                        {/* <!-- End .accordion --> */}
                                                    </div>
                                                    {/* <!-- End .product-details --> */}
                                                </div>
                                            </>);
                                    })}
                                    {/* <!-- End .col-lg-5 --> */}
                                </div>
                                {/* <!-- End .row --> */}
                            </div>
                            {/* <!-- End .product-details-top --> */}
                        </div>
                        {/* <!-- End .col-xl-10 --> */}
                        <aside className="col-xl-2 col-md-6">



                            <div className="sidebar sidebar-product d-none d-md-block">
                                <div className="widget widget-products">
                                    <h4 className="widget-title">Related Product</h4>
                                    {/* <!-- End .widget-title --> */}

                                    <div className="products">

                                        {relatedProduct.map((item, index) => {
                                            {/* console.warn(item.thumbnail_image) */ }
                                          
                                            return (
                                                <div className="product product-sm">
                                                    <figure className="product-media">
                                                        <NavLink onClick={reloadComp} to={`/shop/product/catogeroy/fullwidth/${item.id}`}>
                                                            <img src={'https://beta.myrung.com/b/public/' + item.thumbnail_image} alt="Product image" className="product-image single-product-image" />
                                                        </NavLink>
                                                    </figure>

                                                    <div className="product-body">
                                                        <h5 className="product-title"><a href="product.php">{item.name} <br />Wide fit wedges</a></h5>
                                                        {/* <!-- End .product-title --> */}
                                                        <div className="product-price">
                                                            <span className="new-price">{item.main_price}</span>
                                                            {/* <span className="old-price">$110.00</span> */}
                                                        </div>
                                                        {/* <!-- End .product-price --> */}
                                                    </div>
                                                    {/* <!-- End .product-body --> */}
                                                </div>
                                            );
                                        })}

                                        {/* <!-- End .product product-sm --> */}

                                    </div>
                                    {/* <!-- End .products --> */}

                                    <NavLink to="/shop/categories" className="btn btn-outline-dark-3"><span>View More Products</span><i className="icon-long-arrow-right"></i></NavLink>
                                </div>
                                {/* <!-- End .widget widget-products --> */}

                                {/* <div className="widget widget-banner-sidebar">
                                    <div className="banner-sidebar-title">ad box 280 x 280</div> */}
                                {/* <!-- End .ad-title --> */}

                                {/* <div className="banner-sidebar banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
                                        </a>
                                    </div> */}
                                {/* <!-- End .banner-ad --> */}
                                {/* </div> */}
                                {/* <!-- End .widget --> */}
                            </div>
                            {/* <!-- End .sidebar sidebar-product --> */}
                            <OwlCarousel className="owl-carousel d-md-none d-block owl-theme" dots={false} items={2} loop autoPlay={true} autoplaySpeed="200" nav={false}>
                                {relatedProduct ? relatedProduct.map((item, index) => {

                                    return (
                                        <>
                                            <div>
                                                <div className="product product-sm">
                                                    <figure className="product-media">
                                                        <NavLink to=''>
                                                            <img src={'https://beta.myrung.com/b/public/' + item.thumbnail_image} alt="Product image  " className="product-image mobile-product " />
                                                        </NavLink>
                                                    </figure>

                                                    <div className="product-body">
                                                        <h5 className="product-title"><NavLink to=''>{item.name}</NavLink></h5>
                                                        {/* <!-- End .product-title --> */}
                                                        <div className="product-price">
                                                            <span className="new-price">{item.main_price}</span>
                                                            {/* <span className="old-price">$110.00</span> */}
                                                        </div>
                                                        {/* <!-- End .product-price --> */}
                                                    </div>
                                                    {/* <!-- End .product-body --> */}
                                                </div>
                                                {/* <!-- End .product product-sm --> */}
                                            </div>
                                        </>
                                    );
                                })
                                    : ''}


                            </OwlCarousel>
                        </aside>
                        {/* <!-- End .col-xl-2 --> */}

                        <div className="col-12 d-md-none">
                            <div className="accordion accordion-plus  product-details-accordion" id="product-accordion">
                                <div className="card card-box card-sm">
                                    <div className="card-header" id="product-desc-heading">
                                        <h2 className="card-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-desc" aria-expanded="false" aria-controls="product-accordion-desc">
                                                Description
                                            </a>
                                        </h2>
                                    </div>
                                    {/* <!-- End .card-header --> */}
                                    <div id="product-accordion-desc" className="collapse" aria-labelledby="product-desc-heading" data-parent="#product-accordion">
                                        <div className="card-body">
                                            <div className="product-desc-content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                                                <ul>
                                                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                                                    <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                                </ul>

                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.</p>
                                            </div>
                                            {/* <!-- End .product-desc-content --> */}
                                        </div>
                                        {/* <!-- End .card-body --> */}
                                    </div>
                                    {/* <!-- End .collapse --> */}
                                </div>
                                {/* <!-- End .card --> */}

                                <div className="card card-box card-sm">
                                    <div className="card-header" id="product-info-heading">
                                        <h2 className="card-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-info" aria-expanded="false" aria-controls="product-accordion-info">
                                                Additional Information
                                            </a>
                                        </h2>
                                    </div>
                                    {/* <!-- End .card-header --> */}
                                    <div id="product-accordion-info" className="collapse" aria-labelledby="product-info-heading" data-parent="#product-accordion">
                                        <div className="card-body">
                                            <div className="product-desc-content">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                                <h3>Fabric & care</h3>
                                                <ul>
                                                    <li>100% Polyester</li>
                                                    <li>Do not iron</li>
                                                    <li>Do not wash</li>
                                                    <li>Do not bleach</li>
                                                    <li>Do not tumble dry</li>
                                                    <li>Professional dry clean only</li>
                                                </ul>

                                                <h3>Size</h3>
                                                <p>S, M, L, XL</p>
                                            </div>
                                            {/* <!-- End .product-desc-content --> */}
                                        </div>
                                        {/* <!-- End .card-body --> */}
                                    </div>
                                    {/* <!-- End .collapse --> */}
                                </div>
                                {/* <!-- End .card --> */}

                                <div className="card card-box card-sm">
                                    <div className="card-header" id="product-shipping-heading">
                                        <h2 className="card-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" href="#product-accordion-shipping" aria-expanded="false" aria-controls="product-accordion-shipping">
                                                Shipping & Returns
                                            </a>
                                        </h2>
                                    </div>
                                    {/* <!-- End .card-header --> */}
                                    <div id="product-accordion-shipping" className="collapse" aria-labelledby="product-shipping-heading" data-parent="#product-accordion">
                                        <div className="card-body">
                                            <div className="product-desc-content">
                                                <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br />
                                                    We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                            </div>
                                            {/* <!-- End .product-desc-content --> */}
                                        </div>
                                        {/* <!-- End .card-body --> */}
                                    </div>
                                    {/* <!-- End .collapse --> */}
                                </div>
                                {/* <!-- End .card --> */}

                                <div className="card card-box card-sm">
                                    <div className="card-header" id="product-review-heading">
                                        <h2 className="card-title">
                                            <a role="button" data-toggle="collapse" href="#product-accordion-review" aria-expanded="true" aria-controls="product-accordion-review">
                                                Reviews (2)
                                            </a>
                                        </h2>
                                    </div>
                                    {/* <!-- End .card-header --> */}
                                    <div id="product-accordion-review" className="collapse show" aria-labelledby="product-review-heading" data-parent="#product-accordion">
                                        <div className="card-body">
                                            <div className="reviews">
                                                <div className="review">
                                                    <div className="row no-gutters">
                                                        <div className="col-auto">
                                                            <h4><a href="#">Samanta J.</a></h4>
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: "80%" }}></div>
                                                                    {/* <!-- End .ratings-val --> */}
                                                                </div>
                                                                {/* <!-- End .ratings --> */}
                                                            </div>
                                                            {/* <!-- End .rating-container --> */}
                                                            <span className="review-date">6 days ago</span>
                                                        </div>
                                                        {/* <!-- End .col --> */}
                                                        <div className="col">
                                                            <h4>Good, perfect size</h4>

                                                            <div className="review-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                            </div>
                                                            {/* <!-- End .review-content --> */}

                                                            <div className="review-action">
                                                                <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                                <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                            </div>
                                                            {/* <!-- End .review-action --> */}
                                                        </div>
                                                        {/* <!-- End .col-auto --> */}
                                                    </div>
                                                    {/* <!-- End .row --> */}
                                                </div>
                                                {/* <!-- End .review --> */}

                                                <div className="review">
                                                    <div className="row no-gutters">
                                                        <div className="col-auto">
                                                            <h4><a href="#">John Doe</a></h4>
                                                            <div className="ratings-container">
                                                                <div className="ratings">
                                                                    <div className="ratings-val" style={{ width: "100%" }}></div>
                                                                    {/* <!-- End .ratings-val --> */}
                                                                </div>
                                                                {/* <!-- End .ratings --> */}
                                                            </div>
                                                            {/* <!-- End .rating-container --> */}
                                                            <span className="review-date">5 days ago</span>
                                                        </div>
                                                        {/* <!-- End .col --> */}
                                                        <div className="col">
                                                            <h4>Very good</h4>

                                                            <div className="review-content">
                                                                <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                            </div>
                                                            {/* <!-- End .review-content --> */}

                                                            <div className="review-action">
                                                                <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                                <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                            </div>
                                                            {/* <!-- End .review-action --> */}
                                                        </div>
                                                        {/* <!-- End .col-auto --> */}
                                                    </div>
                                                    {/* <!-- End .row --> */}
                                                </div>
                                                {/* <!-- End .review --> */}
                                            </div>
                                            {/* <!-- End .reviews --> */}
                                        </div>
                                        {/* <!-- End .card-body --> */}
                                    </div>
                                    {/* <!-- End .collapse --> */}
                                </div>
                                {/* <!-- End .card --> */}
                            </div>
                        </div>

                    </div>
                    {/* <!-- End .row --> */}

                </div>
                {/* <!-- End .container-fluid --> */}
            </div>
            {/* <!-- End .page-content --> */}


        </>
    );
}
export default Fullwitdh;