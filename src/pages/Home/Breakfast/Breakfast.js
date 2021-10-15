import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breakfast = ({ food }) => {
    const { name, price, description, img, id } = food;
    return (
        <div className="mt-5">

            <Card className="mx-4">
                <Card.Img variant="top p-5" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around py-2">
                    <h3 className="text-danger">${price}</h3>
                    <Link to={`/booking/${id}`}><button className="btn btn-warning">Add To Cart</button></Link>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Breakfast;