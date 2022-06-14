import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
	// const [user_type, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [credentialError, setCredentialError] = useState('');
	const navigate =useNavigate();
	const notify = () => toast("Please Enter valid credential");
	// const notify1 = () => toast("Loged in successfully");
	// useEffect(()=>{
	// 	if(localStorage.getItem('use-info')){
	// 		<Navigate to="/" replace={true} />
	// 		navigate('/')
	// 	}
	// 	else{
	// 		alert('pleas enter invalid user name')
	// 	}
	// })
	const loginHandler = async (e) => {
		e.preventDefault();
		let user_type = "customer"
		let data = {user_type ,email, password }
		// console.log(event.target.value);
		// https://cors-anywhere.herokuapp.com/
		let Result = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		});
		Result = await Result.json();
		localStorage.setItem('user-info', JSON.stringify(Result)) 
		// console.log(Result.result);
		if(Result.result === true){
			setCredentialError('')
			navigate('/dashboard');
		}else{
			// alert(notify())
			setCredentialError(notify)
			
			// toast("Loged in successfully")
		};
        
	

	// 	if(localStorage.getItem("Result":true)){
	// 		<Navigate to="/" replace={true} />
	// 		navigate('/')
	// 	}
	// 	else{
	// 		alert('pleas enter invalid user name')

	// 	}
	}
	return (
		<>
			<div className="login-page bg-image  py-5" >
				<div className="container">
					<div className="form-box" style={{ paddingTop: "2.7rem", paddingBottom: "4.4rem" }}>
						<div className="form-tab">
							<ul className="nav nav-pills nav-fill" role="tablist">
								{/* <li className="nav-item">
							        <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Sign In</a>
							    </li> */}
								<li className="nav-item">
									<a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Sign In</a>
								</li>
							</ul>
							<div className="tab-content">

								<div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
									<form action="#" onSubmit={loginHandler}>
										<div className="form-group">
											<label for="register-email-2">Your email address *</label>
											<input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="register-email-2" name="email" required />
										</div>
										{/* <!-- End .form-group --> */}
										{/* <input type="hidden"    id="custId" name="user_type" value="customer" /> */}
										<div className="form-group">
											<label for="register-password-2">Password *</label>
											<input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="register-password-2" name="password" required />
										</div>

										{/* <!-- End .form-group --> */}

										<div className="form-footer">
										<ToastContainer/>
											<button type="submit"  className="btn btn-outline-primary-2">
												<span>SIGN IN</span>
												<i className="icon-long-arrow-right"></i>
												
											</button>

											{/* <div className="custom-control custom-checkbox">
												<!--<input type="checkbox" className="custom-control-input" id="register-policy-2" required>-->
												<label className="" for="register-policy-2"><a href="forget-password.php">forget password?</a> </label>
											</div> */}
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
		</>
	);
}
export default LoginForm;