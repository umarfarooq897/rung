import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation} from "react-router-dom";
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchFilter = (props) => {
    // console.warn("product",props.data)
    const [Product, SetProduct] = useState([]);
    // const [user_id, setUser_id] = useState()
    var user_id;
    const location = useLocation()
    const { searchValue } = location.state;
    let name = searchValue
    console.log(name)
    let searchName = {name}
    // var productsapilink = "https://beta.myrung.com/b/api/v2/products/search"
    const getProductApi = async () => {
        let response = await fetch("https://beta.myrung.com/b/api/v2/products/search",{
            method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(searchName)
        });
        response = await response.json();
        var productData = response.data;
        
        SetProduct(productData);
        console.log(productData)
    }
    useEffect(() => {
        getProductApi();
    }, [name]);
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
    const noResult = ()=>{
        return <h1>false</h1>
    }
    
    return (
        <>
            <div className="products mb-3">
                <div className="row justify-content-center">
                    
                    {Product.map((product, index) => {
                         document.getElementById('cat_title').innerText = product.category_name;
                         var cat_name=product.category_name
                         var name=product.name
                         var calculable_price = product.calculable_price
                         var currency_symbol = product.currency_symbol
                         var image = product.thumbnail_image
                         var product_id = product.id
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
                                                     <NavLink to='' className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></NavLink>
                                                 </div>
                                                 <ToastContainer/>
                                                 <div onClick={notify}  className="product-action">
                                                     <a onClick={()=>{props.addToCartHandler({cat_name:cat_name,name:name,quantity:1,
                                                      Price:calculable_price, symbol:currency_symbol,
                                                      product_image:image,product_id:product_id})}}
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


        </>
    );
}
export default SearchFilter;
