import React from 'react';
import Slider from '../../Components/Slider/Slider';
import FeaturedGardeners from '../../Components/FeaturedGardeners/FeaturedGardeners';
import TopTrendingTips from '../../Components/TopTrendingTips/TopTrendingTips';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
        </div>
    );
};

export default Home;