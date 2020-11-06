import React, { useState } from 'react';
import video from '../Media/home-video.mp4';
import {Redirect} from "react-router-dom";
import '../css/Header.css';

const Preloader = (props) => {
    const reDirect = () => {
        return (
            <Redirect to="/home" />
        )
    }

        return (
            <div style={{overflowY: 'hidden'}}>
                <div className="app-bar">
                    <figure className="app-logo" >
                        GoldnHour
                    </figure>
                </div>
                <div className="header-image">
                    <video autoPlay muted loop className="header-video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div style={{ top: '80vh', position: 'absolute', zIndex: 5, margin: 'auto', width: '100%'}}>
                        <a className="enter" href="/home">ENTER</a>
                    </div>
                </div>
            </div>

        )
    
}

export default Preloader