import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div>
            <header>
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
                                        <a><span>Login</span></a>
                                        <a class="r-search"><span>Search</span></a>

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
                                    </div>
                                    <div class="r-nav-section float-right">
                                        <nav>
                                            <ul>
                                                <li class="r-has-child">
                                                    <a> <Link to='/'>Home</Link> </a>

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
            </header>

            <section id="r-login-register">
                <div class="r-login-register">
                    <div class="r-login-register-in">
                        {/* <div class="r-auth-or">
                            <span>OR</span>
                        </div> */}
                        <div style={{ "margin": "50px" }} class="clearfix" >
                            <div class="r-auth-outer r-login">
                                <div class="r-auth-head">
                                    <h2><b>Login</b> Now</h2>
                                    <span>Login to our website</span>
                                </div>
                                <div class="r-auth-form">
                                    <div class="r-login-fb">
                                        <a href="#"><img src="assets/images/fb.jpg" class="img-fluid d-block m-auto" alt="" /></a>
                                    </div>
                                    <div class="r-or-line"><span>SIGN IN</span></div>
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" required placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" required placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-full">LOGIN NOW</button>
                                        </div>
                                    </form>
                                    <div class="r-from-inof">
                                        <p class="text-center">
                                            * Denotes mandatory field. <br />
                                            ** At least one telephone number is required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="r-auth-outer r-register">
                                <div class="r-auth-head">

                                    <span>Required information for account creation</span>
                                </div>
                                <div class="r-auth-form">
                                    {/* <form action="#">
                                        <div class="form-group">
                                            <input type="text" required class="form-control" placeholder="User name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" required class="form-control" placeholder="Password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" required class="form-control" placeholder="Confirm Password"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" required class="form-control" placeholder="Email Address"/>
                                        </div>
                                        <div class="form-group">
                                            <img src="assets/images/recaptcha.jpg" class="img-fluid d-block m-auto" alt=""/>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-full">SIGN UP NOW</button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;