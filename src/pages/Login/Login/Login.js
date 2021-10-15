import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div id="login">
            <h2>Please LogIn</h2>
            <Button variant="outline-warning" className="text-dark">Google Sign In</Button>
        </div>
    );
};

export default Login;