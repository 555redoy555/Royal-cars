import React from 'react';

const Reviews = () => {
    return (
        <div>
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
                                            <img class="img-fluid d-block" src="assets/images/user-02.jpg" alt="" />
                                            <span>
                                                <b>Robertho Garcia</b> <br />
                                                Graphic Designer
                                            </span>
                                        </li>
                                        <li data-target="#r-quote-carousel" data-slide-to="1" class="active text-center">
                                            <img class="img-fluid d-block" src="assets/images/user-01.png" alt="" />
                                            <span>
                                                <b>Robertho Garcia</b> <br />
                                                Graphic Designer
                                            </span>
                                        </li>
                                        <li data-target="#r-quote-carousel" data-slide-to="2">
                                            <img class="img-fluid d-block" src="assets/images/user-03.jpg" alt="" />
                                            <span>
                                                <b>Robertho Garcia</b> <br />
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

export default Reviews;