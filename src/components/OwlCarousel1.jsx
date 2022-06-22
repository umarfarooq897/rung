import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/style.css';

const OwlCarousel1 = () => {
    const [loading, setLoading] = useState(true);
    const [Banners, SetBanners] = useState([]);
    var bannerappi="https://beta.myrung.com/b/api/v2/sliders";
    const sliderApi = async () => {
        const response = await fetch(bannerappi);
        const data = await response.json();
        var insidData = data.data;
        SetBanners(insidData);
        setLoading(false)
        // localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
    }
    useEffect(() => {
        sliderApi();
    },[loading]);
    return (<>
        <div>

            <OwlCarousel className='owl-theme' dots={false} items={1} loop autoPlay={true} autoplaySpeed="200" nav={false} >
                {Banners ? Banners.map((item, i) => {
                    {/* var background1 = "https://alpha.techcon.com.pk/rung_backend/public/" + item.photo; */}
                    {/* console.log(item); */}
                    return (
                    
                            <div key={i} className="intro-slide" style={{ backgroundImage : `url(${'https://beta.myrung.com/b/public/' + item.photo})` }} >
                                {/* <div className="container intro-content text-center">
                                    <h3 className="intro-subtitle text-white">Limited time only</h3>

                                    <h1 className="intro-title text-white">Treat your self</h1>

                                    <div className="intro-text text-white">Up to 50% off</div>

                                    <a href="category.html" className="btn btn-primary">Shop NOW</a>
                                </div> */}
                            </div>
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