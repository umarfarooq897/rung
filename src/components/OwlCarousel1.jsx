import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/style.css';
import axios from "axios";
import PlaceholderLoading from 'react-placeholder-loading'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const OwlCarousel1 = () => {
    const [isloading, setLoading] = useState(true);
    const [Banners, SetBanners] = useState([]);
    // var bannerappi="https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/sliders";
    // const sliderApi = async () => {
    //     const response = await fetch(bannerappi);
    //     const data = await response.json();
    //     var insidData = data.data;
    //     SetBanners(insidData);
    //     setLoading(false)
    // }
    
        
      
    useEffect(() => {
        // setTimeout(()=>{
            axios.get("https://cors-anywhere.herokuapp.com/https://beta.myrung.com/b/api/v2/sliders")
            .then(res=>{
                var insidData = res.data.data;
                SetBanners(insidData);
                setLoading(false)
            })
        // sliderApi();
    // },2000)
},[isloading])
    return (<>
        <div>

            <OwlCarousel className='owl-theme' dots={false} items={1} loop autoPlay={true} autoplaySpeed="200" nav={false} >
                {Banners ? Banners.map((item, i) => {
                    {/* var background1 = "https://alpha.techcon.com.pk/rung_backend/public/" + item.photo; */}
                    return (
                        <>
                                
                            {/* <div style={{height:"100vh"}}> */}
                                {/* {isloading &&<Skeleton count={20} />} */}
                                <div className="intro-slide" style={{ backgroundImage : `url(${'https://beta.myrung.com/b/public/' + item.photo})` }} >
                            </div>
                            {/* </div> */}
                            
                            

                        </>
                    );

                }) : ""
                }
            </OwlCarousel>

        </div>
    </>
    );
    // }, 5000)
}
export default OwlCarousel1;