import React, { useEffect, useState } from 'react';

const BestCars = () => {

    const [cars, setCars] = useState([])



    useEffect(() => {
        fetch(`https://salty-brook-20691.herokuapp.com/Cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data.slice(0, 6));
            });
    }, [])
    console.log(cars)

    return (
        <div>
            <section id="r-best-offer">
                <div class="r-best-vehicles">
                    <div class="r-sec-head r-accent-color r-sec-head-v">
                        <span>FEATURED CARS</span>
                        <h2>Our <b>Best Offers.</b></h2>
                    </div>
                    <div class="container">
                        <div class="row clearfix r-best-offer-list owl-theme owl-carousel" id="r-best-offers">
                            {
                                cars.map(car => <div class="">
                                    <div class="r-best-offer-single">
                                        <div class="r-best-offer-in">
                                            <div class="r-offer-img">
                                                <div className="d-inline-block">
                                                    <img src={car.img} class="img-fluid d-block m-auto" alt="" /></div>
                                                <a class="d-block">
                                                    <div class="r-offer-img-over">
                                                        <i class="fa fa-search"></i>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="r-best-offer-content">
                                                <a>{car.name}</a>
                                                <p>Start at <b>45.00 USD</b> per day</p>
                                                <ul class="pl-0 mb-0">
                                                    <li><i class="fa fa-car"></i><span>2017</span></li>
                                                    <li><i class="fa fa-cogs"></i><span>MANUAL</span></li>
                                                    <li><i class="fa fa-beer"></i><span>{car.Fuel}</span></li>
                                                    <li><i class="fa fa-road"></i><span>2.3k CC</span></li>
                                                </ul>
                                            </div>
                                            <div class="r-offer-rewst-this">
                                                <span class="text-uppercase">Rent this car</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div id="r-quote">
                <div class="r-quote">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12" data-wow-delay="0.2s">
                                <div id="r-quote-carousel" class="carousel slide">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item">
                                            <p>“This was our first time renting from Royal Cars and we were very pleased with the whole experience. Your price was lower than other companies. Our rental experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                        </div>
                                        <div class="carousel-item active">
                                            <p>“This was our first time renting from Royal Cars and we were very pleased with the whole experience. Your price was lower than other companies. Our rental experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                        </div>
                                        <div class="carousel-item">
                                            <p>“This was our first time renting from Royal Cars and we were very pleased with the whole experience. Your price was lower than other companies. Our rental experience was good from start to finish, so we’ll be back in the future lorem ipsum diamet.”</p>
                                        </div>
                                    </div>
                                    <ol class="carousel-indicators">
                                        <li data-target="#r-quote-carousel" data-slide-to="0">
                                            <img class="img-fluid d-block" src="https://i.ibb.co/Q9570fN/IMG-20211008-WA0024gg.jpg" alt="" />
                                            <span>
                                                <b>Abu Kayum Redoy</b> <br />
                                                web Developer
                                            </span>
                                        </li>
                                        <li data-target="#r-quote-carousel" data-slide-to="1" class="active text-center">
                                            <img class="img-fluid d-block" src="https://i.ibb.co/Q9570fN/IMG-20211008-WA0024gg.jpg" alt="" />
                                            <span>
                                                <b>Abu Kayum Redoy</b> <br />
                                                React Developer
                                            </span>
                                        </li>
                                        <li data-target="#r-quote-carousel" data-slide-to="2">
                                            <img class="img-fluid d-block" src="assets/images/user-03.jpg" alt="" />
                                            <span>
                                                <b>Abu Kayum</b> <br />
                                                Graphic Designer
                                            </span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BestCars;