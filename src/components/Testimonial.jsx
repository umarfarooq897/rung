import  React ,{useState,useEffect,createContext} from 'react';
import '../assets/css/style.css';
import '../assets/css/mystyle.css';
import '../assets/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user_1 from "../assets/images/testimonials/user-1.jpg";
import user_2 from "../assets/images/testimonials/user-2.jpg";
import { NavLink } from 'react-router-dom';
import Fotter from './Footer';
const phoneNumber = createContext();

 const Testimonial=()=>{
    const [SocialLinks, SetSocialLinks] = useState([]);
	const getApi = async () => {
		const response = await fetch('https://beta.myrung.com/b/api/v2/business-settings');
		const data = await response.json();
		var insidData = data.data;
		SetSocialLinks(insidData);
		// console.log(SocialLinks);
		// localStorage.setItem("catgeroiesData",JSON.stringify(insidData))
	}
	useEffect(() => {
		getApi();
	}, []);
    const options2 = {
        responsive: {
            1200: {
                // nav:"true"
            }
        },
    };
     return(
         <>
         {/* <phoneNumber.Provider value={SocialLinks[57].value }><Fotter/></phoneNumber.Provider> */}
         {/* send phone number to footer from api */}
             <div className="about-testimonials bg-light-2 pt-6 pb-6">
                <div className="container">
                    <h2 className="title text-center mb-3">What Customer Say About Us</h2>
                    {/* <!-- End .title text-center --> */}

                    <OwlCarousel className=" owl-carousel owl-theme owl-simple owl-testimonials-photo" dots={true} items={1}  nav={false} loop={false} margin={20}>
                        <blockquote className="testimonial text-center">
                            <img src={user_1} alt="user"/>
                            <p>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec
                                urna. <br/>In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                                sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                                nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”</p>
                            <cite>
                                Jenson Gregory
                                <span>Customer</span>
                            </cite>
                        </blockquote>
                        {/* <!-- End .testimonial --> */}

                        <blockquote className="testimonial text-center">
                            <img src={user_2} alt="user"/>
                            <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error
                                libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum
                                quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde
                                obcaecati impedit eveniet non. ”</p>

                            <cite>
                                Victoria Ventura
                                <span>Customer</span>
                            </cite>
                        </blockquote>
                        {/* <!-- End .testimonial --> */}
                    </OwlCarousel>
                    {/* <!-- End .testimonials-slider owl-carousel --> */}
                </div>
                {/* <!-- End .container --> */}
            </div>

            <div className="mb-2"></div>
            {/* <!-- End .mb-2 --> */}

            <div className="container ">
                <div className="cta cta-separator mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-wrapper cta-text text-center">
                                <h3 className="cta-title">Shop Social</h3>
                                {/* <!-- End .cta-title --> */}
                                <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                    mauris sit amet orci. </p>
                                    {/* <!-- End .cta-desc --> */}
                                <div className="social-icons social-icons-colored justify-content-center">
                                    <NavLink to={SocialLinks } className="social-icon social-facebook" title="Facebook" target="_blank"><i
                                            className="icon-facebook-f"></i></NavLink>
                                    <NavLink to={SocialLinks} className="social-icon social-twitter" title="Twitter" target="_blank"><i
                                            className="icon-twitter"></i></NavLink>
                                    <NavLink to={SocialLinks} className="social-icon social-instagram" title="Instagram"
                                        target="_blank"><i className="icon-instagram"></i></NavLink>
                                    <NavLink to={SocialLinks} className="social-icon social-youtube" title="Youtube" target="_blank"><i
                                            className="icon-youtube"></i></NavLink>
                                    <NavLink to={SocialLinks} className="social-icon social-pinterest" title="Pinterest"
                                        target="_blank"><i className="icon-pinterest"></i></NavLink>
                                </div>
                                {/* <!-- End .soial-icons --> */}
                            </div>
                            {/* <!-- End .cta-wrapper --> */}
                        </div>
                        {/* <!-- End .col-lg-6 --> */}

                        <div className="col-lg-6">
                            <div className="cta-wrapper text-center">
                                <h3 className="cta-title">Get the Latest Deals</h3>
                                {/* <!-- End .cta-title --> */}
                                <p className="cta-desc">and <br/>receive <span className="text-primary">$20 coupon</span> for
                                    first shopping</p>
                                    {/* <!-- End .cta-desc --> */}

                                <form action="#">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter your Email Address"
                                            aria-label="Email Adress" required/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary btn-rounded" type="submit"><i
                                                    className="icon-long-arrow-right"></i></button>
                                        </div>
                                        {/* <!-- .End .input-group-append --> */}
                                    </div>
                                    {/* <!-- .End .input-group --> */}
                                </form>
                            </div>
                            {/* <!-- End .cta-wrapper --> */}
                        </div>
                        {/* <!-- End .col-lg-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                </div>
                {/* <!-- End .cta --> */}
            </div>
            {/* <!-- End .container --> */}

         </>
     );
 }
 export default Testimonial;