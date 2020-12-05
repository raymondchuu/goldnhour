import React, { useEffect, useState } from 'react';
import Header from './Header';
import About from './About';
import DisplayImages from './Displayimages';
import Images from './Images';
import '../../css/Homepage.css';

const Homepage = () => {

    return (
        <div style={{backgroundColor: '#FAFAFA', overflowX: 'hidden'}}>
            <Header />
            <div className="homepage-container">
                <About />
                <Images />
            </div>

        </div>
    )
}

export default Homepage