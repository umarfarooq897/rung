import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";


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
												<NavLink to={`/shop/product/catogeroy/${item.id}`}  >
													<img src={"https://beta.myrung.com/b/public/" + item.banner} alt="Banner" />
												</NavLink>

												<NavLink className="banner-link" to={`/shop/product/catogeroy/${item.id}`}>

													<h3 className="banner-title">{item.name}</h3>

													{/* <!-- End .banner-title --> */}
													<h4 className="banner-subtitle"> Products</h4>
													{/* <!-- End .banner-subtitle -->  */}
													<span className="banner-link-text">Shop Now</span>
												</NavLink>
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

