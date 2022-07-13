import React, { useEffect, useState } from "react";
const User_orders = () => {
    const [orders, setOrders] = useState()
    var token;
    const Token = () => {
        token = JSON.parse((sessionStorage.getItem('user-info_token')))
    }
    useEffect(() => {
        Token()
    }, [Token])
    const addWhishlistHandler = async (e) => {
        var Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/purchase-history ', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "Bearer " + token
            }
        });
        Result = await Result.json()
        setOrders(Result.data)
        // console.log("orders", orders)
    }
    useEffect(() => {
        addWhishlistHandler()
    }, [])
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#Order_id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment_Status</th>
                        <th scope="col">delivery_status_string</th>
                        <th scope="col">Grand_total</th>
                    </tr>
                </thead>
                <tbody>
                   {orders? orders.map((item, index) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.date}</td>
                                    <td>{item.payment_status}</td>
                                    <td>{item.delivery_status_string}</td>
                                    <td>{item.grand_total}</td>
                                </tr>
                            </>
                        );

                    }):"" }

                </tbody>
            </table>
        </>
    );
}
export default User_orders