import React from 'react';
import headerImage from '../../Media/Homepage/front-page.png';
import storyImage from '../../Media/Homepage/our-story.png';
import video from '../../Media/home-video.mp4';
import arrow from '../../Media/Homepage/down-arrow.svg';
import '../../css/Header.css';

const Header = () => {
    return (
        <div className="header-image">
            <video autoPlay muted loop className="header-video">
                <source src={video} type="video/mp4" />
            </video>
            <div style={{border: '1px solid red', top: '-100px', position: 'absolute', zIndex: 5}}>
            <img src={arrow} style={{color: 'red', zIndex: 5}} />
            <p>Hello?</p>

            </div>
        </div>
    )
}

export default Header;