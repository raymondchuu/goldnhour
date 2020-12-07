import React, { useState } from 'react';
import quote from '../../Media/quote.png';
import Giftvoucher from '../../Media/Homepage/vouchers.png';
import HomeLashes from '../../Media/Homepage/home-lash.png';
import HomeBrows from '../../Media/Homepage/home-brows.png';
import HomeTraining from '../../Media/Homepage/home-training.png';
import LashHover from '../../Media/Homepage/home-lash-hover.png';
import BrowsHover from '../../Media/Homepage/home-brows-hover.png';
import TrainingHover from '../../Media/Homepage/home-training-hover.png';

import '../../css/About.css';
import profile from '../../Media/Homepage/self-portrait.jpg';

const About = () => {
    const [lash, hoverLash] = useState(HomeLashes);
    const [brows, hoverBrows] = useState(HomeBrows);
    const [training, hoverTraining] = useState(HomeTraining);
    return (
        <div style={{position: 'relative'}}>
            <div className="about" style={{marginTop: '88px'}}>
{/*                 <div className="left-column-about">
                    <div className="background-image-container">
                    {/* Backround Image
                    <div style={{display: 'block', margin: 'auto', width: '70%'}}>
                        <img src={profile} className="background-image" style={{width: '100%'}}/>
                    </div>
                    </div>
                </div> */}
                <div className="right-column-about">
                    <div className="story">
                    {/* <p className="about-title" style={{textAlign: 'center', color: '#292929'}}>GOLDN HOUR</p>
                        <p className="slogan">ILLUMINATE YOUR FEATURES AND FEEL TIMELESS</p>
                        <div className="divider">{/*Black line </div>
                        <p style={{fontSize: '16px', color: '#292929', lineHeight: '2'}}>The Golden Hour. It’s a time of day when the sun’s glowing rays leave us spellbound as it paints all that it touches into a work of art. Heavy blankets of golden hour sunlight resting on a wooden floor can evoke feelings of nostalgia and dream-like sensations. It’s within these rare and special moments that those who seek to look their best are rewarded for their efforts. This is the magical hour. This transient state of beauty is the same feeling clients experience when they leave GOLDN HOUR. Each client’s lashes and brows are customized to their unique features, enhancing their own natural beauty. Embrace a profound sense of confidence and beauty. Embrace your very own golden hour.</p>
                    */}
                    <p style={{fontSize: '24px', color: '#292929', fontWeight: 'bold'}}>ILLUMINATE YOUR FEATURES AND FEEL TIMELESS</p>
                    <p style={{fontSize: '24px'}}>Get the brows or lashes you've been wanting today.</p>
                    <br/>
                    <button className="about-book-btn">Book Now</button>
                    </div>
                </div>
            </div>

            <div className="about-services">
                <p style={{fontSize: '24px', color: '#292929', textAlign: 'center', fontWeight: 'bold'}}>OUR SERVICES</p>
                <div className="about-service-inner">
                    <div className="about-service-block">
                        <div className="center-image"> 
                            <a href='/services/lashes'><img src={lash} className="homeblock" style={{width: '100%', height: 'auto'}} 
                                onMouseEnter={() => {
                                    hoverLash(LashHover)
                                }}
                                onMouseOut={() => {
                                    hoverLash(HomeLashes)
                                }}
                            /></a>
                        </div>
                    </div>
                    <div className="about-service-block">
                        <div className="center-image">  
                            <a href='/services/brows'><img src={brows} style={{width: '100%', height: '100%'}}
                                onMouseEnter={() => {
                                    hoverBrows(BrowsHover)
                                }}
                                onMouseOut={() => {
                                    hoverBrows(HomeBrows)
                                }}
                            /></a>
                        </div>

                    </div>
                    <div className="about-service-block">
                        <div className="center-image"> 
                            <a href='/services/training'><img src={training} style={{width: '100%', height: '100%'}}
                                onMouseEnter={() => {
                                    hoverTraining(TrainingHover)
                                }}
                                onMouseOut={() => {
                                    hoverTraining(HomeTraining)
                                }}
                            /></a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-test-container">
                <p style={{fontSize: '24px', paddingBottom: '2%', fontWeight: 'bold', marginTop: '5%'}}>WHAT PEOPLE SAY</p>     

                <div className="about-test-inner" >
                    <div className="about-test-left">
                        <img src={quote} className="quote-image" style={{width: '50px', height: '50px', left: '50px'}}/>
                        <div style={{ height: '100%'}}>
                            <div className="content">
                                <p>I’ve been getting my lashes done with Michelle since 2017 and I haven’t looked back ever since! Her personality, positive attitude and professional services has me looking forward to our biweekly appointments. She not only makes me feel my best self with her incredible work, but with her patience and great listening skills every session feels like a mini therapy session. I’m so grateful for the connection we have built and so lucky to have her as my lash artist!</p>
                            </div>
                            <div className="test-name">
                                <p className>Taraneh S.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-test-right">
                        <img src={quote} className="quote-image" style={{width: '50px', height: '50px', left: '50px'}}/>
                        <div style={{ height: '100%'}}>
                            <div className="content">
                                <p>I have tried multiple last techs in the past and no one has been able to deliver the quality that Michie does! She always provide A++ quality results in an efficient manner and offers a wide variety of services. I always receive compliments on her work and will continue to be a long time client  she never disappoints 🙏</p>
                            </div>
                            <div className="test-name">
                                <p className>Alessia R.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-view-all">
                    </div>

                </div>
                <p style={{fontSize: '24px', fontWeight: 'bold', paddingTop: '3%'}}><a href='/testimonials' target="_blank" className="home-view-all">VIEW ALL</a></p>

            </div>


            <div className="gift-vouchers">
                    <div className="left-gift">
                        <div className="gift-inner-image">
                            <img src={Giftvoucher} className="gift-voucher-image" style={{width: '100%'}} />
                        </div>
                    </div>
                    <div className="right-gift">
                        <p style={{fontSize: '36px', color: '#AE3B15', fontWeight: 'bold'}}><a href='/giftvouchers'>GIFT VOUCHERS</a></p>
                        <p style={{fontSize: '36px', color: '#292929'}}>Send a gift voucher to your loved ones</p>
                    </div>
            </div>

        </div>
    )
}

export default About;