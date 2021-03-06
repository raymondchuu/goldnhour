import React from 'react';
import { ReactComponent as ReactLogo } from '../Media/logo2.svg';
import {IoLogoInstagram, IoMdMail} from 'react-icons/io';

import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-title">
                    <p className="title"><a href='/home'><ReactLogo/></a></p>
                </div>
                <div className="footer-information">
                    <div className="column-1">
                        <p className="footer-subtitle">OUR MISSION</p>
                        <p>GOLDN HOUR is a beauty studio that creates opportunities for those to express their most authentic self by enhancing their natural beauty through the golden experience. </p>
                        <a href="/policies" className="policies-link" target="_blank">See our policies here.</a>
                        <br/>
                        <a href="/testimonials" className="policies-link">Testimonials</a>
                        <br/>
                        <a href="/faq" className="policies-link" target="_blank">FAQ</a>

                    </div>
                    <div className="column-2">
                        <p className="footer-subtitle">BOOK ONLINE</p>
                        <p>Book lash and brow services online.</p>
                        <a href="https://goldnhour.as.me/schedule.php" className="book-btn">Book Now</a>
                    </div>
                    <div className="column-3">
                        <p className="footer-subtitle">CONTACT</p>
                        <IoLogoInstagram style={{height: '30px', width: '30px', marginRight: '20px'}}/><a href="https://www.instagram.com/goldnhour.ca/" className="instagram">GOLDNHOUR</a>
                        <br/><br/>
                        <IoMdMail style={{height: '30px', width: '30px', marginRight: '20px'}} /><a href="mailto:Goldnhourwaitlist@gmail.com" className="email">EMAIL</a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                </div>
        </div>
    )
}

export default Footer