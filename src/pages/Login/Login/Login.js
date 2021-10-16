import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, logOut } = useAuth();
    return (
        <div className="my-5 py-5" id="login">
            <h2>Please LogIn</h2>
            <Button onClick={signInUsingGoogle} variant="outline-warning" className="text-dark">Google Sign In</Button>
        </div>
    );
};

export default Login;