import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUsingGoogle, logOut } = useAuth();
    return (
        <div id="login" className="my-5 p-5 container w-25 border rounded">
            <h2>Please LogIn</h2>
            <Form className="py-3 col-sm-w-50">
                <Form.Group className="my-3 " controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="py-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <div>
                <h6>Sign In Using Google</h6>
                <Button onClick={signInUsingGoogle} variant="" className=""><h1>
                    <FcGoogle /></h1></Button>
            </div>
        </div>
    );
};

export default Login;