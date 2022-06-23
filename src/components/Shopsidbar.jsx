import React, { useEffect, useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";



const Sidebar = () => {
	
	const [rang ,setRang] = useState([])

	const demo = (e)=>{
		setRang(e)
		localStorage.setItem('min', e[0]);
		localStorage.setItem('max', e[1]);
	}
	// var a=localStorage.getItem('min')
	// var b=localStorage.getItem('max')
	// console.log(a)
	// console.log(b)

	return (
		<>
			<aside className=" order-lg-first">
				<div className="sidebar sidebar-shop">
					<div className="widget widget-clean">
						<label>Filters:</label>
						<a  href="#" className="sidebar-filter-clear">Clean All</a>
					</div>
					{/* <!-- End .widget widget-clean --> */}


					<div className="widget widget-collapsible">
						<h3 className="widget-title">
							<a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
								Price
							</a>
						</h3>
						{/* <!-- End .widget-title --> */}

						<div className="collapse show" id="widget-5">
							<div className="widget-body">
								<div className="filter-price">
									<div className="filter-price-text">
										Price Range:
										<span id="filter-price-range"></span>
									</div>
									{/* <!-- End .filter-price-text --> */}
									<Nouislider onSlide={demo} range={{ min: 0, max: 1000 }} start={[20, 100]} connect />
									{/* <!-- End #price-slider --> */}
									
									
								</div>
								{/* <!-- End .filter-price --> */}
							</div>
							{/* <!-- End .widget-body --> */}
						</div>
						{/* <!-- End .collapse --> */}
					</div>
					{/* <!-- End .widget --> */}
				</div>
				{/* <!-- End .sidebar sidebar-shop --> */}
			</aside>
		</>
	);
}
export default Sidebar;