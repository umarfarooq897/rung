import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () =>{
	const [name , setName] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const navigate =useNavigate();
	const notify = () => toast("User Already exist");
	const notify1 = () => toast("Thanks for registeration Please Verify your email from your email");
	useEffect(()=>{
		if(localStorage.getItem('use-info')){
			// <Navigate to="/" replace={true} />
			navigate('/')
		}
	},[])
const addUserHandler = async(event) => {
        event.preventDefault();
		let data={name,email,password}
        console.log(data);
        setName('');
        setEmail('');
        setPassword('');
		// https://cors-anywhere.herokuapp.com/
		let Result= await fetch('https://beta.myrung.com/b/api/v2/auth/signup ',{
			method:'POST',
			body:JSON.stringify(data),
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			}
		});
		Result=await Result.json()
		// console.warn("Result",Result);
		localStorage.setItem("user-info", JSON.stringify(Result));
		if(Result.result === true){
		notify1()
		}else if(Result.user_id=== Result.user_id){
			notify()
		}
		// navigate("/")
    }
    return(
        <>
             <div className="login-page bg-image  py-5" >
            	<div className="container">
            		<div className="form-box" style={{paddingTop:"2.7rem", paddingBottom:"4.4rem"}}>
            			<div className="form-tab">
	            			<ul className="nav nav-pills nav-fill" role="tablist">
							    {/* <li className="nav-item">
							       <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
							    </li> */}
							    <li className="nav-item">
							        <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Sign Up</a>
							    </li>
							</ul>
							<div className="tab-content">
							    
							    <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
							    	<form action="#" onSubmit={addUserHandler}>
							    		<div className="form-group">
							    			<label for="register-name-2">Enter Name *</label>
							    			<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="register-name-2" name="name" required />
							    		</div>
                                        {/* <!-- End .form-group --> */}
							    		<div className="form-group">
							    			<label for="register-email-2">Enter email address *</label>
							    			<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="register-email-2" name="email" required />
							    		</div>
                                        {/* <!-- End .form-group --> */}

							    		<div className="form-group">
							    			<label for="register-password-2">Password *</label>
							    			<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="register-password-2" name="password" required />
							    		</div>
                                        {/* <!-- End .form-group --> */}
										<ToastContainer/>
							    		<div className="form-footer">
							    			<button  type="submit" className="btn btn-outline-primary-2">
			                					<span>SIGN UP</span>
			            						<i className="icon-long-arrow-right"></i>
			                				</button>

			                				<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="register-policy-2" required />
												<label className="custom-control-label" for="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
											</div>
                                            {/* <!-- End .custom-checkbox --> */}
							    		</div>
                                        {/* <!-- End .form-footer --> */}
							    	</form>
							    	{/* <div className="form-choice">
								    	<p className="text-center">or sign in with</p>
								    	<div className="row">
								    		<div className="col-sm-6">
								    			<a href="#" className="btn btn-login btn-g">
								    				<i className="icon-google"></i>
								    				Login With Google
								    			</a>
								    		</div> */}
                                            {/* <!-- End .col-6 --> */}
								    		{/* <div className="col-sm-6">
								    			<a href="#" className="btn btn-login  btn-f">
								    				<i className="icon-facebook-f"></i>
								    				Login With Facebook
								    			</a>
								    		</div> */}
                                            {/* <!-- End .col-6 --> */}
								    	</div>
                                        {/* <!-- End .row --> */}
							    	</div>
                                    {/* <!-- End .form-choice --> */}
							    </div>
                                {/* <!-- .End .tab-pane --> */}
							</div>
                            {/* <!-- End .tab-content --> */}
						</div>
                        {/* <!-- End .form-tab --> */}
            		</div>
                    {/* <!-- End .form-box --> */}
            	{/* </div> */}
                {/* <!-- End .container --> */}
            {/* </div> */}
            {/* <!-- End .login-page section-bg --> */}
        </>
    );
}
export default Signup;