import React from 'react';
import BestCars from './BestCars/BestCars';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeFAQ from './HomeFAQ/HomeFAQ';
import HomeLow from './HomeLow/HomeLow';
import HomeHeader from './HomHeader/HomeHeader';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeBanner></HomeBanner>
            <BestCars></BestCars>
            <HomeLow></HomeLow>
            {/* <HomeFAQ></HomeFAQ> */}
        </div>
    );
};

export default Home;