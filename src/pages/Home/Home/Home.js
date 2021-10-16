import React from "react";
import { Button } from "react-bootstrap";
import Categories from "../Categories/Categories";
import Services from "../Services/Services";
import './Home.css';



const Home = () => {
    return (
        <>
            <div id="home" className="banner">
                <div className="banner-content">
                    <h1 className="mb-4">Best food waiting for your belly</h1>

                    <div className="search">
                        <div className="input-group w-100">
                            <input
                                id="search-field"
                                type="text"
                                className="form-control rounded-pill p-3"
                                placeholder="search your favourite food..."
                            />
                            <div className="input-group-append">
                                <Button
                                    variant="danger"
                                    type="button"
                                    className=" btn-search rounded-pill px-5 py-3"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Categories />
            <Services />

        </>
    );
};

export default Home;
