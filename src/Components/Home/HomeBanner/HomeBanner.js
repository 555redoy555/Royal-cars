import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <section id="r-advantages-part" className="r-advantages-part">
                <div className="r-advantage-main-part">
                    <div className="container clearfix">
                        <div className="advantage-head">
                            <span>120+ CARS TYPE &amp; BRANDS</span>
                            <h2>Royal Cars <b>Advantages.</b></h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="r-advantages-box">
                                    <div className="icon"> <img src="https://i.ibb.co/pvJQKR0/download-1.png" alt="" /> </div>
                                    <div className="head animated pulse">24/7 Customer Online Support</div>
                                    <div className="sub-text">Call us Anywhere Anytime</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="r-advantages-box">
                                    <div className="icon"> <img src="https://i.ibb.co/643mzsw/istockphoto-1345741744-612x612.jpg" alt="" /> </div>
                                    <div className="head animated pulse">Reservation Anytime You Wants</div>
                                    <div className="sub-text">24/7 Online Reservation</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="r-advantages-box">
                                    <div className="icon"> <img src="https://i.ibb.co/jJfj79y/placeholder-map-location.png" alt="" /> </div>
                                    <div className="head animated pulse">Lots of Picking Locations</div>
                                    <div className="sub-text">250+ Locations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="r-about-info">
                <div className="r-about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="r-about-info-img">
                                    <img src="https://welpmagazine.com/wp-content/uploads/2020/11/1559674671-2023.jpg" className="img-fluid d-block m-auto" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="r-about-info-content">
                                    <div className="r-sec-head r-sec-head-left r-sec-head-line r-sec-head-w pt-0">
                                        <span>KNOW MORE ABOUT US</span>
                                        <h2>Who <b>Royal Cars</b> Are.</h2>
                                    </div>
                                    <p>
                                        We know the difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality and good taste.
                                    </p>
                                    <ul className="mb-0 pl-0">
                                        <li><i className="fa fa-check-circle"></i> We working since 1980 with 4.000 customers</li>
                                        <li><i className="fa fa-check-circle"></i> All brand & type cars in our garage</li>
                                        <li><i className="fa fa-check-circle"></i> 1.000+ picking locations around the world</li>
                                    </ul>
                                    <img src="https://i.ibb.co/MMrzvVC/spac-jpeg.jpg" className="img-fluid d-inline-block" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;