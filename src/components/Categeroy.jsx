Object.keys(cat).map(array => {
    return (
        <div className="col-md-4">
            <div className="banner banner-cat banner-badge">
                {
                    Catagaries[template_name].data.map(item  => {
                    var pic;
                    setTimeout(() => {
                            pic = "https://alpha.techcon.com.pk/rung_backend/public/" + item.banner;
                            document.getElementById('20').src = pic;

                        }, 0);
                        return (
                            <>


                                <NavLink to='/shop' page={props.page} navbar={props.navbar} title={props.title} >

                                    <img id='20' alt="Banner" />

                                </NavLink>

                                <NavLink className="banner-link" to='/shop' page={props.page} navbar={props.navbar} title={props.title}>

                                    <h3 id='21' className="banner-title"></h3>

                                    {/* <!-- End .banner-title --> */}
                                    <h4 className="banner-subtitle">3 Products</h4>
                                    {/* <!-- End .banner-subtitle -->  */}
                                    <span className="banner-link-text">Shop Now</span>
                                </NavLink>

                            </>
                        );


                    })
                }
                

    

            </div>
        </div>
    )
    })
}










let AAA;
	function timeout_trigger() {
		let cat = Catagaries.data;
		// console.log(cat);
		let data=cat.data;
		// console.log(data);
		// const propertyNames =(data)
		// console.log(propertyNames);
		
		
		for(let i=0;i<=3;i++){
			// {console.log(data[i].banner)}
			 console.log("https://alpha.techcon.com.pk/rung_backend/public/"+data[i].name);
			//  document.getElementById('20').src = AAA;
		}	
	}

	setTimeout(timeout_trigger, 1000,Catagaries,data);


    //axious
    const [Catagaries, SetCatagories] = useState([]);
	useEffect(() => {
		async function getAllCatagory() {

			try {
				const ALLCatagories = await axios.get('https://alpha.techcon.com.pk/rung_backend/api/v2/categories')
				SetCatagories(ALLCatagories);
			}
			catch (error) {
				console.log(error)
			}
		}
		getAllCatagory();
	}, [])
	const object1= new Promise((resolve,reject)=>{
		setTimeout(()=>{

			var cat = Catagaries.data;
			var data=cat.data;
			resolve(data);
			reject("error while camunicating")
		},100);
	});
	var imgages;
	object1.then((data)=>{
		console.log(data)
		
		data.map((names,i)=>{
			let x = Math.random();
			 imgages="https://alpha.techcon.com.pk/rung_backend/public/"+names.banner;
			imag(imgages);

				// document.getElementById('20').src = imgages;
			
			//  document.getElementsByClassName
			console.log(imgages);
			return imgages;
			
		})
	
	}).catch((error)=>{
		console.log(error);
	});

	const imag=(img)=>{
		return <img src={img} alt="Banner" />
	}

	return (
	<> 	
		<div className="categories-page">
			<div className="container">
				<div className="row">
				
				<img id='20' alt="Banner" />

				</div>
				{/* <!-- End .row --> */}
			</div>
			{/* <!-- End .container --> */}
		</div>
	
		{/* <!-- End .categories-page --> */}
	</>
);
	
}