import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
const Dashboardcontent = ()=>{
   
    const [name , setName] = useState('');
	const [email , setEmail] = useState('');
	const [current_password , setCurrent_password] = useState('');
	const [new_password , setNew_password] = useState('');
	const [confirm_password , setConfirm_password] = useState('');
    const[user_id,setUser_id]=useState()

    useEffect(()=>{
     const data = JSON.parse((localStorage.getItem('user-info')))
     setUser_id(data.user.id)
    //  console.log(user_id)	
	},[])
    const editUserHandler = async(event) => {
        event.preventDefault();
		let data={name,email,current_password,new_password,confirm_password,user_id}
        // console.log(data);
        setName('');
        setEmail('');
        setCurrent_password('');
        setNew_password('');
        setConfirm_password('');
        // https://cors-anywhere.herokuapp.com/
		let Result= await fetch(' https://beta.myrung.com/b/api/v2/auth/profile/updateprofile ',{
			method:'POST',
			body:JSON.stringify(data),
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			}
		});
		Result=await Result.json()
		localStorage.setItem("user-info", JSON.stringify(Result));
    }
    const singoutHandler =() =>{
        localStorage.removeItem('user-info')
    }
    return (
        <>
              <div className="page-content">
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-4 col-lg-3">
                            <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard" role="tab" aria-controls="tab-dashboard" aria-selected="true">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-downloads-link" data-toggle="tab" href="#tab-downloads" role="tab" aria-controls="tab-downloads" aria-selected="false">Downloads</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Adresses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab" aria-controls="tab-account" aria-selected="false">Account Details</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link" onClick={singoutHandler}>Sign Out</NavLink>
                                </li>
                            </ul>
                        </aside>
                        {/* <!-- End .col-lg-3 --> */}

                        <div className="col-md-8 col-lg-9">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                                    <p>Hello <span className="font-weight-normal text-dark">User</span> (not <span className="font-weight-normal text-dark">User</span>? <a href="#">Log out</a>) 
                                    <br/>
                                    From your account dashboard you can view your <a href="#tab-orders" className="tab-trigger-link link-underline">recent orders</a>, manage your <a href="#tab-address" className="tab-trigger-link">shipping and billing addresses</a>, and <a href="#tab-account" className="tab-trigger-link">edit your password and account details</a>.</p>
                                </div>
                                {/* <!-- .End .tab-pane --> */}

                                <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                                    <p>No order has been made yet.</p>
                                    <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                                {/* <!-- .End .tab-pane --> */}

                                <div className="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                                    <p>No downloads available yet.</p>
                                    <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                                {/* <!-- .End .tab-pane --> */}

                                <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                                    <p>The following addresses will be used on the checkout page by default.</p>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card card-dashboard">
                                                <div className="card-body">
                                                    <h3 className="card-title">Billing Address</h3>
                                                    {/* <!-- End .card-title --> */}

                                                    <p>User Name<br/>
                                                    User Company<br/>
                                                    John str<br/>
                                                    New York, NY 10001<br/>
                                                    1-234-987-6543<br/>
                                                    yourmail@mail.com<br/>
                                                    <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                </div>
                                                {/* <!-- End .card-body --> */}
                                            </div>
                                            {/* <!-- End .card-dashboard --> */}
                                        </div>
                                        {/* <!-- End .col-lg-6 --> */}

                                        <div className="col-lg-6">
                                            <div className="card card-dashboard">
                                                <div className="card-body">
                                                    <h3 className="card-title">Shipping Address</h3>
                                                    {/* <!-- End .card-title --> */}

                                                    <p>You have not set up this type of address yet.<br/>
                                                    <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                </div>
                                                {/* <!-- End .card-body --> */}
                                            </div>
                                            {/* <!-- End .card-dashboard --> */}
                                        </div>
                                        {/* <!-- End .col-lg-6 --> */}
                                    </div>
                                    {/* <!-- End .row --> */}
                                </div>
                                {/* <!-- .End .tab-pane --> */}

                                <div className="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
                                    <form action="#" onSubmit={editUserHandler}>
                                        {/* <div className="row"> */}
                                            {/* <div className="col-sm-6"> */}
                                                <label>Name *</label>
                                                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" required />
                                            {/* </div> */}
                                            {/* <!-- End .col-sm-6 --> */}

                                            {/* <div className="col-sm-6">
                                                <label>Last Name *</label>
                                                <input type="text" className="form-control" required />
                                            </div> */}
                                            {/* <!-- End .col-sm-6 --> */}
                                        {/* </div> */}
                                        {/* <!-- End .row --> */}

                                        {/* <label>Display Name *</label>
                                        <input type="text" className="form-control" required />
                                        <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small> */}

                                        <label>Email address *</label>
                                        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" required />

                                        <label>Current password (leave blank to leave unchanged)</label>
                                        <input type="password" name="current_password" value={current_password} onChange={(e)=>setCurrent_password(e.target.value)} className="form-control" />

                                        <label>New password (leave blank to leave unchanged)</label>
                                        <input type="password" name="new_password" value={new_password} onChange={(e)=>setNew_password(e.target.value)} className="form-control" />

                                        <label>Confirm new password</label>
                                        <input type="password" name="confirm_password" value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)}  className="form-control mb-2" />
                                        <input type="hidden" id="custId" name={user_id} value={user_id}/>
                                        <button type="submit" className="btn btn-outline-primary-2">
                                            <span>SAVE CHANGES</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                                {/* <!-- .End .tab-pane --> */}
                            </div>
                        </div>
                        {/* <!-- End .col-lg-9 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .dashboard --> */}
        </div>
        {/* <!-- End .page-content --> */}
        </>
    );

}
export default Dashboardcontent;