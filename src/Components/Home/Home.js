import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Footer />
        </div>
    );
};

export default Home;
