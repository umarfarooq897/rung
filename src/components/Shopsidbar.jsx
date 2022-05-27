import React from "react";

const Sidebar=()=>{
    return(
        <>
            <aside className=" order-lg-first">
                			<div className="sidebar sidebar-shop">
                				<div className="widget widget-clean">
                					<label>Filters:</label>
                					<a href="#" className="sidebar-filter-clear">Clean All</a>
                				</div>
								{/* <!-- End .widget widget-clean --> */}

                				<div className="widget widget-collapsible">
    								<h3 className="widget-title">
									    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
									        Category
									    </a>
									</h3>
									{/* <!-- End .widget-title --> */}

									<div className="collapse show" id="widget-1">
										<div className="widget-body">
											<div className="filter-items filter-items-count">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-1"/>
														<label className="custom-control-label" for="cat-1">Dresses</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">3</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-2"/>
														<label className="custom-control-label" for="cat-2">T-shirts</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">0</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-3"/>
														<label className="custom-control-label" for="cat-3">Bags</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">4</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-4"/>
														<label className="custom-control-label" for="cat-4">Jackets</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">2</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-5"/>
														<label className="custom-control-label" for="cat-5">Shoes</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">2</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-6"/>
														<label className="custom-control-label" for="cat-6">Jumpers</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">1</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-7"/>
														<label className="custom-control-label" for="cat-7">Jeans</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">1</span>
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-8"/>
														<label className="custom-control-label" for="cat-8">Sportwear</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
													<span className="item-count">0</span>
												</div>
												{/* <!-- End .filter-item --> */}
											</div>
											{/* <!-- End .filter-items --> */}
										</div>
										{/* <!-- End .widget-body --> */}
									</div>
									{/* <!-- End .collapse --> */}
        						</div>
								{/* <!-- End .widget --> */}

        						<div className="widget widget-collapsible">
    								<h3 className="widget-title">
									    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
									        Size
									    </a>
									</h3>
									{/* <!-- End .widget-title --> */}

									<div className="collapse show" id="widget-2">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="size-1"/>
														<label className="custom-control-label" for="size-1">XS</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="size-2"/>
														<label className="custom-control-label" for="size-2">S</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" checked id="size-3"/>
														<label className="custom-control-label" for="size-3">M</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" checked id="size-4"/>
														<label className="custom-control-label" for="size-4">L</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="size-5"/>
														<label className="custom-control-label" for="size-5">XL</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="size-6"/>
														<label className="custom-control-label" for="size-6">XXL</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}
											</div>
											{/* <!-- End .filter-items --> */}
										</div>
										{/* <!-- End .widget-body --> */}
									</div>
									{/* <!-- End .collapse --> */}
        						</div>
								{/* <!-- End .widget --> */}

        						

        						<div className="widget widget-collapsible">
    								<h3 className="widget-title">
									    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
									        Brand
									    </a>
									</h3>
									{/* <!-- End .widget-title --> */}

									<div className="collapse show" id="widget-4">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-1"/>
														<label className="custom-control-label" for="brand-1">Next</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-2"/>
														<label className="custom-control-label" for="brand-2">River Island</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-3"/>
														<label className="custom-control-label" for="brand-3">Geox</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-4"/>
														<label className="custom-control-label" for="brand-4">New Balance</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-5"/>
														<label className="custom-control-label" for="brand-5">UGG</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-6"/>
														<label className="custom-control-label" for="brand-6">F&F</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-7"/>
														<label className="custom-control-label" for="brand-7">Nike</label>
													</div>
													{/* <!-- End .custom-checkbox --> */}
												</div>
												{/* <!-- End .filter-item --> */}

											</div>
											{/* <!-- End .filter-items --> */}
										</div>
										{/* <!-- End .widget-body --> */}
									</div>
									{/* <!-- End .collapse --> */}
        						</div>
								{/* <!-- End .widget --> */}

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

                                                <div id="price-slider"></div>
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