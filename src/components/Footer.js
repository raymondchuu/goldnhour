import React from 'react';
import {IoLogoInstagram, IoMdMail} from 'react-icons/io';

import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-title">
                    <p className="title">GOLDN HOUR</p>
                </div>
                <div className="footer-information">
                    <div className="column-1">
                        <p className="footer-subtitle">OUR MISSION</p>
                        <p>GOLDN HOUR is a beauty studio that creates opportunities for those to express their most authentic self by enhancing their natural beauty through the golden experience. </p>
                        <a href="/policies" className="policies-link">See our policies here.</a>
                    </div>
                    <div className="column-2">
                        <p className="footer-subtitle">BOOK ONLINE</p>
                        <p>Book lash and brow services online.</p>
                        <a href="https://goldnhour.as.me/schedule.php" className="book-btn">Book Now</a>
                    </div>
                    <div className="column-3">
                        <p className="footer-subtitle">CONTACT</p>
                        <a href="https://www.instagram.com/goldnhour.ca/" className="instagram"><IoLogoInstagram style={{height: '30px', width: '30px', marginRight: '20px'}}/>GOLDNHOUR</a>
                        <br/><br/>
                        <a href="mailto:Goldnhourwaitlist@gmail.com" className="email"><IoMdMail style={{height: '30px', width: '30px', marginRight: '20px'}} />EMAIL</a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                </div>
        </div>
    )
}

export default Footer