import React from "react";
import { NavLink } from "react-router-dom";
const ProductCard =(props)=>{
    var product=props.array
    return(
        <>
        <div className="col-6">
        <div className="product product-7 text-center">
            <figure className="product-media">
                <span className="product-label label-new">New</span>
                <NavLink to={`/shop/product/catogeroy/fullwidth/${product.id}`}>
                    <img src={"https://beta.myrung.com/b/public/" + product.thumbnail_image} alt="Product image" className="product-image" />
                </NavLink>
                <div className="product-action-vertical">
                    {/* <NavLink to='' onClick={addWhishlistHandler} data-id={product_id} className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></NavLink> */}
                    {/* <div onClick={()=>{quickView(product_id)}} className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></div> */}
                    {/* <NavLink to='' className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></NavLink> */}
                </div>
                {/* <ToastContainer /> */}
                {/* <div onClick={notify} className="product-action">
                    <a onClick={() => {
                        props.addToCartHandler({
                            cat_name: cat_name, name: name, quantity: 1,
                            Price: calculable_price, symbol: currency_symbol,
                            product_image: image, product_id: product_id
                        })
                    }}
                        className="btn-product btn-cart"><span>add to cart</span></a>
                </div> */}
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
    </div>
</>
    )
}
export default ProductCard;