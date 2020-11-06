import React, { useEffect, useState } from 'react';
import Header from './Header';
import About from './About';
import DisplayImages from './Displayimages';
import '../../css/Homepage.css';

const Homepage = (props) => {

    return (
        <div style={{backgroundColor: '#E5E5E5'}}>
            <div className="homepage-container">
                <About />
                <DisplayImages />
            </div>

        </div>
    )
}

export default Homepage