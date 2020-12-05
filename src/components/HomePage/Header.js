import React from 'react';
import headerImage from '../../Media/Homepage/front-page.png';
import storyImage from '../../Media/Homepage/our-story.png';
import video from '../../Media/home-video.mp4';
import arrow from '../../Media/Homepage/down-arrow.png';
import '../../css/Header.css';

const Header = () => {
    return (
        <div className="header-image">
            <video autoPlay muted loop playsInline className="header-video">
                <source src={video} type="video/mp4" />
            </video>
            <div style={{ top: '90vh', position: 'absolute', zIndex: 5, margin: 'auto', width: '100%'}}>
                <img src={arrow} />
            </div>
            <div id="homebtn"></div>
        </div>
    )
}

export default Header;