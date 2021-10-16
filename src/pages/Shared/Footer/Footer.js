import React from "react";
import logo from "../../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer bg-dark row">
            <div className="p-5 col-md-6">
                <img src={logo} className="logo-img img-fluid w-25" alt="" />
                <p className="text-opacity-25 text-light pt-4"><small>© RED-ONION - 2025</small></p>
            </div>
            <div className="text-light p-5 col-md-6">
                <h6>Read our Blog</h6>
                <h6>Sign up to deliver</h6>
                <h6>Add your restaurant</h6>
            </div>
        </div>

    );
};

export default Footer;
