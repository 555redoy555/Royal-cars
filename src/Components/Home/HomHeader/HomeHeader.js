import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (

        <div className="r-wrapper">
            <div className="r-header r-header-inner r-header-strip-01">
                <div className="r-header-strip r-header-strip-01">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="r-logo">
                                    <a href="#" className="d-inline-block"><img src="https://i.ibb.co/v4kh0Zt/Temp-244x63-removebg-preview.png" className="img-fluid d-block" alt="" /></a>
                                </div>
                                <a href="javaScript:void(0)" className="menu-icon"> <i className="fa fa-bars"></i> </a>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                <div className="r-header-action float-left">

                                    <a href="#" className="r-search"><span>Search</span></a>

                                    <div className="r-search-wrapper">
                                        <div className="r-search-inner">
                                            <form>
                                                <input type="text" className="r-search-field" placeholder="Search" />
                                                <button type="submit" className="r-search-btn">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- /r-search-wrapper --> */}
                                </div>
                                <div className="r-nav-section float-right">
                                    <nav>
                                        <ul>
                                            <li className="r-has-child">
                                                <a>HOME</a>
                                                {/* <ul className="pl-0 ml-0">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-02.html">Home 02</a></li>
                                                    <li><a href="index-03.html">Home 03</a></li>
                                                    <li><a href="index-04.html">Home 04</a></li>
                                                </ul> */}
                                            </li>
                                            <li className="r-has-child">
                                                <a>ABOUT US</a>
                                                <ul className="pl-0 ml-0">
                                                    <li><a href="faq.html">Faq</a></li>
                                                </ul>
                                            </li>
                                            <li className="r-has-child">
                                                <a>VEHICLES</a>
                                                <ul className="pl-0 ml-0">
                                                    <li><a href="car-list-map.html">Car List Map</a></li>
                                                    <li><a href="car-booking.html">Car Booking</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="gallery.html">GALLERY</a></li>
                                            <li><a href="drivers.html">DRIVERS</a></li>
                                            <li><a href="contact.html">CONTACT US</a></li>
                                            <li><a> <Link to='/login' >LogIN </Link> </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="r-slider owl-carousel" id="defaultHomeSlider">
                    <div className="r-slider-item">
                        <img style={{ "width": "100%" }} src="https://cdn.99images.com/photos/wallpapers/hd-wallpapers/hd-wallpapers%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-hyn6x.jpg" className="img-fluid d-block m-auto" alt="" />
                        <div className="container">
                            <div className="r-slider-top-content">
                                <h1 className="animated fadeInDown">Kia Rio <span>z</span></h1>
                                <h4 className="animated fadeInLeft">FOR RENT <strong>$50</strong> PER DAY</h4>
                                <a href="#" className="btn btn-outlined animated fadeInUp"> Reserve Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="r-slider-item">
                        <img style={{ "width": "100%" }} src="https://cdn.wallpapersafari.com/54/80/Xj7EHx.jpg" className="img-fluid d-block m-auto" alt="" />
                        <div className="container">
                            <div className="r-slider-top-content">
                                <h1>BMW <span>3</span></h1>
                                <h4>FOR RENT <strong>$150</strong> PER DAY</h4>
                                <a href="#" className="btn btn-outlined"> Reserve Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="r-slider-item">
                        <img style={{ "width": "100%" }} src="https://images5.alphacoders.com/451/thumb-1920-451786.jpg" className="img-fluid d-block m-auto" alt="" />
                        <div className="container">
                            <div className="r-slider-top-content">
                                <h1>BMW <span></span></h1>
                                <h4>FOR RENT <strong>$150</strong> PER DAY</h4>
                                <a href="#" className="btn btn-outlined"> Reserve Now </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="r-car-search">
                    <div className="container">
                        <div className="r-top-form-title animated fadeInUp">
                            <span>120+ CARS TYPE & BRANDS</span>
                            <h3>Search Your <b>Best Cars.</b></h3>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label> Car Brand </label>
                                        <select className="form-control">
                                            <option>Any Brands</option>
                                            <option>Any Brands</option>
                                            <option>Any Brands</option>
                                            <option>Any Brands</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label> Car Type </label>
                                        <select className="form-control">
                                            <option>Any Type</option>
                                            <option>Any Type</option>
                                            <option>Any Type</option>
                                            <option>Any Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label> Car Price </label>
                                        <select className="form-control">
                                            <option>Price Low to High</option>
                                            <option>Price High to Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <input type="submit" className="form-control btn-primary" value="Search Car Now" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeHeader;