import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home"> <img className="nav-logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/login#login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/foodmenu#foodmenu">Foods</Nav.Link>
                            <Button className="ms-2" variant="outline-info">Sign Up</Button>
                            <Navbar.Text>
                                Signed in as: <a href="#login"></a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;