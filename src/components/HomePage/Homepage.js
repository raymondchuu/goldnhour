import React from 'react';
import Header from './Header';
import About from './About';
import DisplayImages from './Displayimages';
import ImageCarousel from './ImageCarousel';
import '../../css/Homepage.css';

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className="homepage-container">
                <About />
                <DisplayImages />
            </div>

        </div>
    )
}

export default Homepage