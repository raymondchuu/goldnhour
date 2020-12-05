import React from 'react';
import Map from '../Media/aboutmap.png';
import profile from '../Media/Homepage/self-portrait.jpg';
import '../css/AboutPage.css';

const AboutPage = () => {
    return (
        <div className="aboutpage-entire-container">
            <div className="book-header">
                {/*background image*/}
            </div>
            <div className="aboutpage-container">
                <p className="lash-title">ABOUT GOLDN HOUR</p>
                <div className="lash-div"></div>
                <div>
                <br/>
                <br/>

                    <p style={{color: '#AE3B15', fontSize: '24px', textAlign: 'center'}}>ILLUMINATE YOUR FEATURES AND FEEL TIMELESS</p>
                    <p>The Golden Hour. It’s a time of day when the sun’s glowing rays leave us spellbound as it paints all that it touches into a work of art. Heavy blankets of golden hour sunlight resting on a wooden floor can evoke feelings of nostalgia and dream-like sensations. It’s within these rare and special moments that those who seek to look their best are rewarded for their efforts. This is the magical hour. This transient state of beauty is the same feeling clients experience when they leave GOLDN HOUR. Each client’s lashes and brows are customized to their unique features, enhancing their own natural beauty. Embrace a profound sense of confidence and beauty. Embrace your very own golden hour.</p>
                    <p>Goldn Hour is located at the northeast corner of Hwy 7 and Jane.</p>
                    <div style={{width: '100%', borderBottom: '1px solid lightgray'}}>
                        <div className="map-container">
                            <img src={Map} style={{width: '100%'}} className="map"/> {/*map*/}
                        </div>
                    </div>

                    <div className="founder">
                        <div className="aboutpage-left">
                            <img src={profile}/>
                        </div>
                        <div className="aboutpage-right">
                            <p style={{fontSize: '24px', color: '#AE3B15'}}>Michelle Le</p>
                            <p>Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;