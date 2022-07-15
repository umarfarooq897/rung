import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Pagenavigation";
import Product_card_container from "../container/Product_card_container";
import Sidebar from "./Shopsidbar";

const Related_product = () => {
    const [Product, SetProduct] = useState([]);
    const [isloding, setIsloading] = useState(true);
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [filterP, setFilter] = useState()
    const [Links, setLinks] = useState()
    const [Meta, setMeta] = useState()
    // const location = useLocation()
    // const  { itemId } = location.state;
    let currentUrl = window.location.href.split("=")[1];
    let item_id = currentUrl
    var category_id = item_id;
    var productsapilink = " https://beta.myrung.com/b/api/v2/products/category/" + currentUrl
    const getProductApi = async () => {
        const response = await fetch(productsapilink);
        const data = await response.json();
        var productData = data.data;
        SetProduct(productData);
    }
    // useEffect(() => {
        //     getProductApi();
        // }, []);
        useEffect(() => {
            priceFilter();
        }, [min, max]);
        useEffect(() => {
            filter();
        }, [min, max]);
        const priceFilter = () => {
            setMin(localStorage.getItem('min'));
            setMax(localStorage.getItem('max'));
            setIsloading(false)
        }
        useEffect(() => {
            priceFilter()
        }, [isloding])
        useEffect(() => {
            filter()
        }, [isloding])
        const filter = async (e) => {
            let data = { min, max, category_id }
            // https://cors-anywhere.herokuapp.com
            var Result = await fetch('https://beta.myrung.com/b/api/v2/products/pricefilter', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            Result = await Result.json()
            var productData = Result.data;
            // console.log(Result)
        setFilter(productData)
        setLinks(Result.links)
        setMeta(Result.meta)
    }

    const passfunction = () => {
        setTimeout(() => {
            priceFilter()
        }, 2000)
    }
    
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar callpriceFilterfunction={() => passfunction()} />
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
                                         document.getElementById('cat_title').innerText = product.category_name; 
                                         document.getElementById('cat_bred_cumb').innerText = product.category_name; 
                                        {/* cat_name = product.category_name */ }
                                        {/* console.log("cat",cat_name) */ }
                                        {/* var name = product.name */ }
                                        {/* var calculable_price = product.calculable_price
                                        var currency_symbol = product.currency_symbol
                                        var image = product.thumbnail_image
                                        var product_id = product.id */}
                                        return (<>
                                            <Product_card_container itemId={item_id} array={product} />
                                            </>
                                        );
                                    })
                                        : ""}
                                    {/* <!-- End .col-sm-6 --> */}

                                </div>
                                            <Navigation links={Links} meta={Meta} />
                                {/* <!-- End .row --> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}
export default Related_product;
