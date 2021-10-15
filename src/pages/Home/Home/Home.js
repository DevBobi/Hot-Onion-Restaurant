import React from 'react';
import About from '../About/About';
import FoodMenu from '../FoodMenu/FoodMenu';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <FoodMenu></FoodMenu>
            <About></About>
        </div>
    );
};

export default Home;