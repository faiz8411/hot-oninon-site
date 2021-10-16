import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Services></Services>
            <About></About>
            <Footer></Footer>


        </div>
    );
};

export default Home;