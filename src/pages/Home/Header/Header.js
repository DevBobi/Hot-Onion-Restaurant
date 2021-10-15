
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (

        <div className="header-img">
            <div className="header-text">
                <h1>Best food you foodie</h1>
            </div>
            <div className="py-4 container w-50">
                <InputGroup>
                    <FormControl
                        placeholder="Search your food"
                    />
                    <Button variant="info" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>

        </div>



    );
};

export default Header;