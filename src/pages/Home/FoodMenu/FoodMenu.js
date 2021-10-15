import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
// import { HashLink } from 'react-router-hash-link';

const FoodMenu = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    })
    return (
        <div id="foodmenu">
            <div className="justify-content-center" >
                <h2>Food Menu</h2>
                <Link to="/breakfast">Breakfast</Link>
            </div>

            <div id="breakfast" className="container">
                <Row xs={1} md={3} className="g-4 meals-container">
                    {
                        foods.map(food => <Breakfast
                            key={foods.id}
                            food={food}
                        ></Breakfast>)
                    }
                </Row>
            </div>


        </div>
    );
};

export default FoodMenu;