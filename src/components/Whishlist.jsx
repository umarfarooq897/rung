import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Whishlist_content = (props) => {
    const [loading, setLoading] = useState(true);
    const [Product, setProduct] = useState([]);
    var user_id;
    var Value=1
    const getData = async () => {
        const data = await JSON.parse((localStorage.getItem('user-info')))
        user_id = data;
       
    }
    useEffect(() => {
        getData()
    }, [getData])
    useEffect(() => {
        setTimeout(() => {
            const ShowWhishlist = async () => {
                const data = { user_id }
                // https://cors-anywhere.herokuapp.com/
                let Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/wishlists-list ', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                Result = await Result.json()
                var Data = Result.data;
                setProduct(Data)
            }
            ShowWhishlist();
        }, 1000)
    }, []);
    const notify = () => {
        toast("Item added")
    };
    const notifyremove = () => {
        toast("Successfully Remove from Whishlist")
    };
    const RemoveWhislist = async (e) => {
        let product_id = e.target.getAttribute("data-id")
        const data = {product_id,user_id}
        // https://cors-anywhere.herokuapp.com/
        let Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/wishlists-remove-product ', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        Result = await Result.json()
        var Data=Result.is_in_wishlist;
        if(Data===false)
        {
            notifyremove()
            let remove_data = e.target.getAttribute("data-id")
            document.getElementById('row'+remove_data).style.display = "none"
        }
        else if(Data===true){
        }
    }
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <table className="table table-wishlist table-mobile">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Stock Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Product ? Product.map((item, index) => {
                                document.getElementById('whishlist_num').innerText = Product.length;
                                console.log(item)
                                var cat_name = item.product.category_name
                                var name = item.product.name
                                var main_price =item.product.base_price
                                var image = item.product.thumbnail_image
                                var product_id = item.product.id
                                return (
                                    <>
                                        <tr id={"row" + product_id} >
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <a href="#">
                                                            <img src={'https://beta.myrung.com/b/public/' + item.product.thumbnail_image} alt="Product image" />
                                                        </a>
                                                    </figure>

                                                    <h3 className="product-title">
                                                        <a href="#">{item.product.name}</a>
                                                    </h3>
                                                    {/* <!-- End .product-title --> */}
                                                </div>
                                                {/* <!-- End .product --> */}
                                            </td>
                                            <td className="price-col">{item.product.base_price}</td>
                                            <td className="stock-col"><span className="in-stock">{item.product.qty <= 0 ? "Out of stock" : "Instock"}</span></td>
                                            <td className="action-col">
                                            {/* <ToastContainer/> */}
                                                <a onClick={notify} >
                                                <button onClick={() => {
                                                    console.log(Value)
                                                    props.addToCartHandler({
                                                        cat_name: cat_name, name: name,quaintity:Value,
                                                         product_image: image, product_id: product_id,totalprice: (Value * main_price)
                                                    })
                                                }} 
                                                className="btn btn-block btn-outline-primary-2"><i className="icon-cart-plus"></i>Add to Cart</button>
                                            </a>
                                            </td>
                                            <td className="remove-col"><button onClick={RemoveWhislist} data-id={product_id} className="btn-remove"><i  data-id={product_id} className="icon-close"></i></button></td>
                                        </tr>
                                    </>
                                );
                            }) : ""}

                        </tbody>
                    </table>
                    {/* <!-- End .table table-wishlist --> */}
                    <div className="wishlist-share">
                        <div className="social-icons social-icons-sm mb-2">
                            <label className="social-label">Share on:</label>
                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                        </div>
                        {/* <!-- End .soial-icons --> */}
                    </div>
                    {/* <!-- End .wishlist-share --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .page-content --> */}

        </>);

}
export default Whishlist_content;
