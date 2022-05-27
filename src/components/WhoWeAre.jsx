import React from 'react';
import signatureimg from "../assets/images/about/about-2/signature.png";
import about2_img_1 from "../assets/images/about/about-2/img-1.jpg" ;
const WhoWeAre =()=>{
    return (
        <>
            <div className="page-content pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-text text-center mt-3">
                                <h2 className="title text-center mb-2">Who We Are</h2>
                                {/* <!-- End .title text-center mb-2 --> */}
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>
                                <img src={signatureimg} alt="signature" className="mx-auto mb-5"/>

                                <img src={about2_img_1} alt="image" className="mx-auto mb-6"/>
                            </div>
                            {/* <!-- End .about-text --> */}
                        </div>
                        {/* <!-- End .col-lg-10 offset-1 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-sm text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-puzzle-piece"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Design Quality</h3>
                                    {/* <!-- End .icon-box-title --> */}
                                    <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero <br/>eu augue.</p>
                                </div>
                                {/* <!-- End .icon-box-content --> */}
                            </div>
                            {/* <!-- End .icon-box --> */}
                        </div>
                        {/* <!-- End .col-lg-4 col-sm-6 --> */}

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-sm text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Professional Support</h3>
                                    {/* <!-- End .icon-box-title --> */}
                                    <p>Praesent dapibus, neque id cursus faucibus, <br/>tortor neque egestas augue, eu vulputate <br/>magna eros eu erat. </p>
                                </div>
                                {/* <!-- End .icon-box-content --> */}
                            </div>
                            {/* <!-- End .icon-box --> */}
                        </div>
                        {/* <!-- End .col-lg-4 col-sm-6 --> */}

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-sm text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-heart-o"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Made With Love</h3>
                                    {/* <!-- End .icon-box-title --> */}
                                    <p>Pellentesque a diam sit amet mi ullamcorper <br/>vehicula. Nullam quis massa sit amet <br/>nibh viverra malesuada.</p> 
                                </div>
                                {/* <!-- End .icon-box-content --> */}
                            </div>
                            {/* <!-- End .icon-box --> */}
                        </div>
                        {/* <!-- End .col-lg-4 col-sm-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                </div>
                {/* <!-- End .container --> */}

                <div className="mb-2"></div>
                {/* <!-- End .mb-2 --></div> */}
                </div>
        </>
    );
}
export default WhoWeAre;