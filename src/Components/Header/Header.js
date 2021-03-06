import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <div class="r-header r-header-inner">
                        <div class="r-header-strip">
                            <div class="container">
                                <div class="row clearfix">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <div class="r-logo">
                                            <a href="index.html" class="d-inline-block"><img src="assets/images/logo.png" class="img-fluid d-block" alt="" /></a>
                                        </div>
                                        <a href="javaScript:void(0)" class="menu-icon"> <i class="fa fa-bars"></i> </a>
                                    </div>
                                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                        <div class="r-header-action float-right">
                                            <a href="login-register.html"> <img src="assets/images/icon-lock.png" alt='' /> <span>Login</span></a>
                                            <a href="#" class="r-search"> <img src="assets/images/icon-search.png" alt='' /> <span>Search</span></a>

                                            <div class="r-search-wrapper">
                                                <div class="r-search-inner">
                                                    <form>
                                                        <input type="text" class="r-search-field" placeholder="Search" />
                                                        <button type="submit" class="r-search-btn">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- /r-search-wrapper --> */}
                                        </div>
                                        <div class="r-nav-section float-right">
                                            <nav>
                                                <ul>
                                                    <li class="r-has-child">
                                                        <a href="index.html">HOME</a>
                                                        <ul class="pl-0 ml-0">
                                                            <li><a href="index.html">Home 01</a></li>
                                                            <li><a href="index-02.html">Home 02</a></li>
                                                            <li><a href="index-03.html">Home 03</a></li>
                                                            <li><a href="index-04.html">Home 04</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="r-has-child">
                                                        <a href="about.html">ABOUT US</a>
                                                        <ul class="pl-0 ml-0">
                                                            <li><a href="faq.html">Faq</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="r-has-child">
                                                        <a href="car-listing.html">VEHICLES</a>
                                                        <ul class="pl-0 ml-0">
                                                            <li><a href="car-list-map.html">Car List Map</a></li>
                                                            <li><a href="car-booking.html">Car Booking</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="gallery.html">GALLERY</a></li>
                                                    <li><a href="drivers.html">DRIVERS</a></li>
                                                    <li><a href="contact.html">CONTACT US</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="r-header-inner-banner">
                            <div class="r-header-in-over">
                                <h1><b>About</b> Royal Cars </h1>
                                <div class="r-breadcrum">
                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><span>ABOUT US</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;