import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import './Navigation.css'
import logo from '../../../assets/logo2.png';
import { FaShoppingCart } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    const history = useHistory();
    const GoToHome = () => {
        history.push("/");
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <img onClick={GoToHome} className="nav-logo" src={logo} alt="" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <h3>
                                <FaShoppingCart className="fas fa-shopping-cart mt-2 fs-2 header-cart"
                                    onClick="" />
                                <span className="food-quantity text-danger">0</span>
                            </h3>
                            {user?.email ?

                                <Nav.Link>
                                    <Button
                                        onClick={logOut}
                                        variant="danger"
                                        className=" rounded-pill px-4 ms-3"
                                    >Log Out</Button>
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login#login" className="fw-bolder px-3"><Button variant="danger"
                                    className=" rounded-pill px-4 ms-3"
                                >Log In</Button>
                                </Nav.Link>}

                            {user?.email &&
                                <img id="logo" className="rounded-circle border mx-2 user-logo p-1" alt="Logo" src={user?.photoURL} />

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;