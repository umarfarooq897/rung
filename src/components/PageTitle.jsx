import React from 'react';
import { NavLink } from 'react-router-dom';
import Title_img from '../assets/images/page-header-bg.jpg';


const PageTitle = () => {
    var path = window.location.pathname;
    // console.log(path);
    var splitUrl = path.split('/');
    // console.log(splitUrl);
    const nthElement = (splitUrl, n = 0) => (n > 0 ? splitUrl.slice(n, n + 1) : splitUrl.slice(n))[0];
    var Page_Title = nthElement(splitUrl, -1);

    return (
        <>

            <div className="page-header text-center" style={{ backgroundImage: `url(${Title_img})` }}>
                <div className="container">
                    <h1 className="page-title text-capitalize">{Page_Title}</h1>
                </div>
                {/* <!-- End .container --> */}
            </div>
            {/* <!-- End .page-header --> */}

            <nav aria-label="breadcrumb" className="breadcrumb-nav">


                <div className="container">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                        {
                            splitUrl.map((item, i) => {
                                return (
                                    <>
                                        {item === '' ? null :
                                            <li className="breadcrumb-item" ><a href="#">{item}</a></li>}
                                    </>
                                )
                            })
                        }
                    </ol>
                </div>

                {/* <!-- End .container --> */}
            </nav>
            {/* <!-- End .breadcrumb-nav --> */}
        </>
    );
}
export default PageTitle;