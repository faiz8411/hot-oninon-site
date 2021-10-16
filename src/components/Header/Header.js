import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import './Header.css'
import logo1 from '../../banner/logo.png'
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth()
    return (


        <div className="mt-2 d-flex header-container">

            <div>
                <img className="w-10" src={logo1} alt="" />
            </div>

            <div className="btn row">
                <div className="col-md-6 d-flex">
                    {user?.email &&
                        <span className="text-danger">Hello {user.displayName}</span>}
                    {
                        user.email ?
                            <button className=" btn-register" onClick={logOut}>logout</button> :
                            <Link href="/">Login</Link>

                    }


                    <button className="mx-5 btn-register">Register</button>
                </div>


            </div>

        </div>









    );
};

export default Header;