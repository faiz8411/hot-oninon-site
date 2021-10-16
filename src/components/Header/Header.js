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
        <div>



            <>

                <div className="header-container" sticky="top">
                    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
                        <Container>
                            <Navbar.Brand href="#home"><img className="img-fluid" src={logo1} alt="" /></Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Breakfast</Nav.Link>
                                <Nav.Link href="#pricing">Launch</Nav.Link>
                                <Nav.Link href="#pricing">Dinner</Nav.Link>
                                {user?.email &&
                                    <span className="text-white mt-2">Hello {user.displayName}</span>}
                                {
                                    user.email ?
                                        <button onClick={logOut}>logout</button> :
                                        <Nav.Link href="/login">Login</Nav.Link>
                                }
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

            </>
            <Banner></Banner>

        </div>
    );
};

export default Header;