import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Category from '../Category/Category';
import FoodsItem from '../FoodItem/FoodItem';
import './Categories.css'


const Categories = () => {
    const [foods, setFoods] = useState(FoodsItem);

    const filterCategory = (curCat) => {
        const updatedCategory = FoodsItem.filter((fd) => {
            return fd.category === curCat;
        });
        setFoods(updatedCategory);
    }

    return (
        <>
            <div className="categories d-flex justify-content-center mt-5">
                {/* <h5 onClick={() => setFoods(FoodsItem)}>All</h5> */}

                <h5 onClick={() => filterCategory("breakfast")}>Breakfast</h5>
                <h5 onClick={() => filterCategory("lunch")}>Lunch</h5>
                <h5 onClick={() => filterCategory("dinner")}>Dinner</h5>
            </div>
            <div className="container">
                <Row xs={1} md={3} className="">
                    {
                        foods.map(food => <Category
                            key={food.id}
                            food={food}
                        ></Category>)
                    }
                </Row>
                <Button variant="outline-info" className="my-3">
                    Checkout Your Food</Button>
            </div>
        </>
    );
};

export default Categories;