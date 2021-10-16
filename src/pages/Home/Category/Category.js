import React from "react";
import { useHistory } from "react-router";
import './Category.css';
import { FaShoppingCart } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";

const Category = ({ food }) => {
    const { image, title, desc, price, id, category } = food;

    const history = useHistory();

    const goToDetail = () => {
        history.push(`/${category}/${id}`);
    };
    return (
        <div id="category" className="category-div" onClick={goToDetail}>

            <div className="p-5 m-4 category">
                <div className="img">
                    <img
                        src={image}
                        className="img-fluid"
                        style={{ width: "200px" }}
                        alt=""
                    />
                </div>
                <h6 className="title">{title}</h6>
                <p><small>{desc}</small></p>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold fs-1">${price}</p>
                    {/* <Button variant="outline-info" className="my-3"> */}
                    {/* <FaShoppingCart /> Add</Button> */}
                </div>
            </div>
        </div >
    );
};

export default Category;
