import React,{useEffect, useState} from "react";
const Checkout_content=(props)=>{
	// console.log(props)
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street_address, setStreet_address] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    var products=[]
	var total
	var data = props.data.cardData
	console.log(data)
    const CheckoutHandler= async(e)=>{
        e.preventDefault();
		// let user_type = "customer"
		let data = {name,country,city,street_address,state,zip,phone,email,notes,products,user_id}
		// console.log(event.target.value);
		// https://cors-anywhere.herokuapp.com/
		let Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/order/store', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		});  
    }
	var user_id;
    const getData = async () => {
        const data = await JSON.parse((localStorage.getItem('user-info')))
        user_id = data.user.id
		console.log(user_id)
    }
    useEffect(() => {
        getData()
    }, [getData])
	// useEffect(() => {
	products=data.map((item,index)=>{
		return  {cat_name:item.cat_name,name:item.name,product_id:item.product_id,product_image:item.product_image
			,quantity:item.quantity,totalprice:item.totalPrice,price:item.Price,tax:0,discount:0,user_id:user_id};
	})
// });
	// console.log(products) 
    return(
        <>
                  <div className="page-content">
            	<div className="checkout">
	                <div className="container">
            			{/* <div className="checkout-discount">
            				<form action="#">
        						<input type="text" className="form-control" required id="checkout-discount-input"/>
            					<label for="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
            				</form>
            			</div> */}
                        {/* <!-- End .checkout-discount --> */}
            			<form onSubmit={CheckoutHandler} action="#">
		                	<div className="row">
		                		<div className="col-lg-9">
		                			<h2 className="checkout-title">Billing Details</h2>
                                    {/* <!-- End .checkout-title --> */}
		                				<div className="row">
		                					<div className="col-sm-12">
		                						<label>FUll Name *</label>
		                						<input type="text" onChange={(e) => setName(e.target.value)} name="name" className="form-control" required/>
		                					</div>
                                            {/* <!-- End .col-sm-6 --> */}

		                					{/* <div className="col-sm-6">
		                						<label>Last Name *</label>
		                						<input type="text" className="form-control" required/>
		                					</div> */}
                                            {/* <!-- End .col-sm-6 --> */}
		                				</div>
                                        {/* <!-- End .row --> */}

	            						{/* <label>Company Name (Optional)</label>
	            						<input type="text" className="form-control"/> */}

	            						<label>Country *</label>
	            						<input type="text" onChange={(e) => setCountry(e.target.value)} name="country" className="form-control" required/>

	            						<label>Street address *</label>
	            						<input type="text" onChange={(e) => setStreet_address(e.target.value)} name="street_address" className="form-control" placeholder="House number and Street name" required/>
	            						{/* <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required/> */}

	            						<div className="row">
		                					<div className="col-sm-6">
		                						<label>Town / City *</label>
		                						<input type="text" onChange={(e) => setCity(e.target.value)}  name="city" className="form-control" required/>
		                					</div>
                                            {/* <!-- End .col-sm-6 --> */}

		                					<div className="col-sm-6">
		                						<label>State / County *</label>
		                						<input type="text" onChange={(e) => setState(e.target.value)}  name="state" className="form-control" required/>
		                					</div>
                                            {/* <!-- End .col-sm-6 --> */}
		                				</div>
                                        {/* <!-- End .row --> */}

		                				<div className="row">
		                					<div className="col-sm-6">
		                						<label>Postcode / ZIP *</label>
		                						<input type="text" onChange={(e) => setZip(e.target.value)}  name="zip" className="form-control" required/>
		                					</div>
                                            {/* <!-- End .col-sm-6 --> */}

		                					<div className="col-sm-6">
		                						<label>Phone *</label>
		                						<input type="tel" onChange={(e) => setPhone(e.target.value)}  name="phone" className="form-control" required/>
		                					</div>
                                            {/* <!-- End .col-sm-6 --> */}
		                				</div>
                                        {/* <!-- End .row --> */}

	                					<label>Email address *</label>
	        							<input type="email" onChange={(e) => setEmail(e.target.value)}  name="email" className="form-control" required/>

	        							{/* <div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-create-acc"/>
											<label className="custom-control-label" for="checkout-create-acc">Create an account?</label>
										</div> */}
                                        {/* <!-- End .custom-checkbox --> */}

										{/* <div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-diff-address"/>
											<label className="custom-control-label" for="checkout-diff-address">Ship to a different address?</label>
										</div> */}
                                        {/* <!-- End .custom-checkbox --> */}

	                					<label>Order notes (optional)</label>
	        							<textarea className="form-control" onChange={(e) => setNotes(e.target.value)}  name="textarea" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"/>
		                		</div>
                                {/* <!-- End .col-lg-9 --> */}
		                		<aside className="col-lg-3">
		                			<div className="summary">
		                				<h3 className="summary-title">Your Order</h3>
                                        {/* <!-- End .summary-title --> */}

		                				<table className="table table-summary">
		                					<thead>
		                						<tr>
		                							<th>Product</th>
		                							<th>Total</th>
		                						</tr>
		                					</thead>

		                					<tbody>
											{data.map((item,index) =>{
												total=data.reduce((total, item) => total + (item.totalPrice?item.totalPrice:item.Price), 0)

												return(
													<>
		                						<tr>
		                							<td><a>{item.name}</a></td>
		                							<td>{item.symbol}{item.Price}</td>
		                						</tr>
												</>);
										})}
		                						<tr className="summary-subtotal">
		                							<td>Subtotal:</td>
		                							<td>{total}</td>
		                						</tr>
                                              
		                						<tr>
		                							<td>Shipping:</td>
		                							<td>Free shipping</td>
		                						</tr>
		                						<tr className="summary-total">
		                							<td>Total:</td>
		                							<td>{total}</td>
		                						</tr>
										
                                                {/* <!-- End .summary-total --> */}
		                					</tbody>
		                				</table>
                                        {/* <!-- End .table table-summary --> */}

		                				<div className="accordion-summary" id="accordion-payment">
										    {/* <div className="card">
										        <div className="card-header" id="heading-1">
										            <h2 className="card-title">
										                <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
										                    Direct bank transfer
										                </a>
										            </h2>
										        </div> */}
                                                {/* <!-- End .card-header --> */}
										        {/* <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
										            <div className="card-body">
										                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
										            </div> */}
                                                    {/* <!-- End .card-body --> */}
										        {/* </div> */}
                                                {/* <!-- End .collapse --> */}
										    {/* </div> */}
                                            {/* <!-- End .card --> */}

										    {/* <div className="card">
										        <div className="card-header" id="heading-2">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
										                    Check payments
										                </a>
										            </h2>
										        </div> */}
                                                {/* <!-- End .card-header --> */}
										        {/* <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion-payment">
										            <div className="card-body">
										                Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
										            </div> */}
                                                    {/* <!-- End .card-body --> */}
										        {/* </div> */}
                                                {/* <!-- End .collapse --> */}
										    {/* </div> */}
                                            {/* <!-- End .card --> */}

										    <div className="card">
										        <div className="card-header" id="heading-3">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
										                    Cash on delivery
										                </a>
										            </h2>
										        </div>
                                                {/* <!-- End .card-header --> */}
										        <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion-payment">
										            <div className="card-body">Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
										            </div>
                                                    {/* <!-- End .card-body --> */}
										        </div>
                                                {/* <!-- End .collapse --> */}
										    </div>
                                            {/* <!-- End .card --> */}

										    {/* <div className="card">
										        <div className="card-header" id="heading-4">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
										                    PayPal <small className="float-right paypal-link">What is PayPal?</small>
										                </a>
										            </h2>
										        </div> */}
                                                {/* <!-- End .card-header --> */}
										        {/* <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
										            <div className="card-body">
										                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
										            </div> */}
                                                    {/* <!-- End .card-body --> */}
										        {/* </div> */}
                                                {/* <!-- End .collapse --> */}
										    {/* </div> */}
                                            {/* <!-- End .card --> */}

										    {/* <div className="card">
										        <div className="card-header" id="heading-5">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
										                    Credit Card (Stripe)
										                    <img src="assets/images/payments-summary.png" alt="payments cards"/>
										                </a>
										            </h2>
										        </div> */}
                                                {/* <!-- End .card-header --> */}
										        {/* <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
										            <div className="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
										            </div> */}
                                                    {/* <!-- End .card-body --> */}
										        {/* </div> */}
                                                {/* <!-- End .collapse --> */}
										    {/* </div> */}
                                            {/* <!-- End .card --> */}
										</div>
                                        {/* <!-- End .accordion --> */}

		                				<button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
		                					<span className="btn-text">Place Order</span>
		                					<span className="btn-hover-text">Proceed to Checkout</span>
		                				</button>
		                			</div>
                                    {/* <!-- End .summary --> */}
		                		</aside>
                                {/* <!-- End .col-lg-3 --> */}
		                	</div>
                            {/* <!-- End .row --> */}
            			</form>
	                </div>
                    {/* <!-- End .container --> */}
                </div>
                {/* <!-- End .checkout --> */}
            </div>
            {/* <!-- End .page-content --></form> */}
        </>
    )
}
export default Checkout_content;