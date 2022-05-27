import React, { useEffect, useState, USEre } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cartdata = (props) => {
	var [Value, setValue] = useState();
	//var quantity = (this).data('quantity-id');
	//var attribute=('#quantity').attr('data-id');

	var data_quantity
	useEffect(() => {
		const Getquantity = (e) => {
			//quaintity = e.target.getAttribute("quantity-id")
		}
		Getquantity()
	})
	// console.log(data_quantity)
	// console.log(Value)
	const inputDecrement = (e) => {
		var product_id = e;
		var qty = document.getElementById('quantity-' + product_id).value;
		if (qty == "") {
			qty = 1;
		}
		document.getElementById('quantity-' + product_id).value = Number(qty) - 1;
		// if (Value > 1) {
		//     setValue(Value - 1);
		//   }

		//   else {
		//     setValue(1)
		//   }
	}
	const inputIncrement = async (e) => {
		// Product[0].current_stock
		var product_id = e;
		// console.log(product_id);
		var qty = document.getElementById('quantity-' + product_id).value;
		if (qty == "") {
			qty = 1;
		}
		document.getElementById('quantity-' + product_id).value = Number(qty) + 1
		//    if(Value<10)
		//     setValue(Value + 1)
	}
	// console.warn("cart", props)
	const notify = () => toast("Succesfully Deleted from cart");

	var data = props.data.cardData
	// console.log(data)
	// const toast=()=>{

	// 	if(data.length === data.length-1){
	// 	notify();
	// 	}
	// }
	// console.warn(data[0])

	return (
		<>
			<div className="page-content">
				<div className="cart">
					<div className="container">
						<div className="row">
							<div className="col-lg-9">
								<table className="table table-cart table-mobile">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
											<th></th>
										</tr>
									</thead>

									<tbody>

										{data.map((item, index) => {

											{/* console.warn(item.product_image) */ }
											data_quantity = item.quantity 
											{/* console.log(item) */ }

											return (

												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">

																	<img src={'https://beta.myrung.com/b/public/' + item.product_image} alt="Product image" />
																</a>
															</figure>

															<h3 className="product-title">
																<a href="#">{item.name}</a>
															</h3>
															{/* <!-- End .product-title --> */}
														</div>
														{/* <!-- End .product --> */}
													</td>
													<td className="price-col">{item.main_price}</td>
													<td className="quantity-col">
														<div className="cart-product-quantity" style={{ display: 'flex' }}>
															<div className="input-group-prepend"><a data-id={item.product_id} onClick={() => inputDecrement(item.product_id)} className="btn btn-qantity-mines btn-decrement btn-spinner" >
																<i className="icon-minus"></i></a>
															</div>
															<input type="number" id={'quantity-' + item.product_id} className="form-control" onChange={(e) => e.target.value} value={item.quantity} min="1" max="10" step="1" data-decimals="0" required />
															<div className="input-group-append">
																<a onClick={() => inputIncrement(item.product_id)} data-id={item.product_id} className="btn btn-qantity-plus btn-increment btn-spinner">
																	<i className="icon-plus"></i></a>
															</div>
														</div>

													</td>


													<td className="total-col">{item.main_price}</td>
													<td className="remove-col"><button onClick={() => props.removeToCartHandler({ item })} className="btn-remove"><i onClick={notify} className="icon-close"></i></button></td>
													<ToastContainer />
												</tr>
											);
										})}
									</tbody>
								</table>
								

								<div className="cart-bottom">
									<div className="cart-discount">
										<form action="#">
											<div className="input-group">
												<input type="text" className="form-control" required placeholder="coupon code" />
												<div className="input-group-append">
													<button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
												</div>
												{/* <!-- .End .input-group-append --> */}
											</div>
											{/* <!-- End .input-group --> */}
										</form>
									</div>
									{/* <!-- End .cart-discount --> */}
										{console.log(data_quantity)}
									<a onClick={() => {
										props.addToCartHandler({
											quantity:data_quantity})
									}}
										className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></a>
								</div>
								{/* <!-- End .cart-bottom --> */}


							</div>
							{/* <!-- End .col-lg-9 --> */}
							<aside className="col-lg-3">
								<div className="summary summary-cart">
									<h3 className="summary-title">Cart Total</h3>
									{/* <!-- End .summary-title --> */}

									<table className="table table-summary">
										<tbody>
											<tr className="summary-subtotal">
												<td>Subtotal:</td>
												<td>$160.00</td>
											</tr>
											{/* <!-- End .summary-subtotal --> */}
											<tr className="summary-shipping">
												<td>Shipping:</td>
												<td>&nbsp;</td>
											</tr>

											<tr className="summary-shipping-row">
												<td>
													<div className="custom-control custom-radio">
														<input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
														<label className="custom-control-label" for="free-shipping">Free Shipping</label>
													</div>
													{/* <!-- End .custom-control --> */}
												</td>
												<td>$0.00</td>
											</tr>
											{/* <!-- End .summary-shipping-row --> */}

											<tr className="summary-shipping-row">
												<td>
													<div className="custom-control custom-radio">
														<input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
														<label className="custom-control-label" for="standart-shipping">Standart:</label>
													</div>
													{/* <!-- End .custom-control --> */}
												</td>
												<td>$10.00</td>
											</tr>
											{/* <!-- End .summary-shipping-row --> */}

											<tr className="summary-shipping-row">
												<td>
													<div className="custom-control custom-radio">
														<input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
														<label className="custom-control-label" for="express-shipping">Express:</label>
													</div>
													{/* <!-- End .custom-control --> */}
												</td>
												<td>$20.00</td>
											</tr>
											{/* <!-- End .summary-shipping-row --> */}

											<tr className="summary-shipping-estimate">
												<td>Estimate for Your Country<br /> <a href="dashboard.php">Change address</a></td>
												<td>&nbsp;</td>
											</tr>
											{/* <!-- End .summary-shipping-estimate --> */}

											<tr className="summary-total">
												<td>Total:</td>
												<td>$160.00</td>
											</tr>
											{/* <!-- End .summary-total --> */}
										</tbody>
									</table>
									{/* <!-- End .table table-summary --> */}

									<a href="checkout.php" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
								</div>
								{/* <!-- End .summary --> */}

								<NavLink to="/shop/categories" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></NavLink>
							</aside>
							{/* <!-- End .col-lg-3 --> */}
						</div>
						{/* <!-- End .row --> */}
					</div>
					{/* <!-- End .container --> */}
				</div>
				{/* <!-- End .cart --> */}
			</div>
			<div>

			</div>
			{/* <!-- End .page-content --> */}
		</>
	);
}
export default Cartdata;