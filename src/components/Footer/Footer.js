import React from 'react';
import './Footer.css'
import logo1 from '../../banner/logo.png'
import icon1 from '../../ICON//Path 1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">

                        <div className="row">
                            <div className="col-md-4">
                                <h3>onion company</h3>
                                <ul>
                                    <h2>specially for</h2>
                                    <li>breakfast</li>
                                    <li>Launch</li>
                                    <li>Dinner</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <h2>menubar</h2>
                                <Link to="/"> <h2>Home</h2></Link>
                                <h2>service</h2>


                            </div>
                            <div className="col-md-4 ">
                                <img className="img-fluid" src={logo1} alt="" />
                                <div className="d-flex justify-content-inline mt-1 p-4">

                                    <img src={icon1} alt="" />
                                    <h5>mobile:0174565653</h5>

                                </div>
                                <h4>email:faizullah@gmail.com</h4>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;