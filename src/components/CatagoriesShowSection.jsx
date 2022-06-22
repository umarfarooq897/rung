import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation} from "react-router-dom";


const CategoriesSection = () => {
	const [Catagaries, SetCatagories] = useState([]);
	const getApi = async () => {
		// https://cors-anywhere.herokuapp.com/
		const response = await fetch('https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/categories');

		const data = await response.json();
		var insidData = data.data;
		SetCatagories(insidData);
		// localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
	}
	useEffect(() => {
		getApi();
	}, []);

	var itemName;
	var itemId;
	const navigate = useNavigate();
	const toggleCatagory = (id, name) => {
		itemId = id
		itemName = name.replace(' ', '');
		console.log(itemName)
		navigate(
			`/shop/product/catogeroy/${itemName}`,
				{ state: { itemId } })
}

	
	return (
		<>
			<div className="categories-page">
				<div className="container">
					<div className="row">
						{
							Catagaries.map((item, i) => {
								return (
									<>
										<div className="col-md-4" key={item.id}>
											<div className="banner banner-cat banner-badge">
												<div onClick={()=>{toggleCatagory(item.id, item.name)}}  >
													
													<img src={"https://beta.myrung.com/b/public/" + item.banner} alt="Banner" />
												</div>

												<div onClick={()=>{toggleCatagory(item.id, item.name)}} className="banner-link" >

													<h3 className="banner-title">{item.name}</h3>

													{/* <!-- End .banner-title --> */}
													<h4 className="banner-subtitle"> Products</h4>
													{/* <!-- End .banner-subtitle -->  */}
													<span className="banner-link-text">Shop Now</span>
												</div>
											</div>
										</div>
									</>
								);
							})
						}
					</div>
					{/* <!-- End .row --> */}
				</div>
				{/* <!-- End .container --> */}
			</div>
		</>
	);
}
export default CategoriesSection;

