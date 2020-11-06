import React from 'react';
import '../../css/About.css';
import profile from '../../Media/Homepage/our-story.png';

const About = () => {
    return (
        <div className="about" style={{marginTop: '88px'}}>
            <div className="left-column-about">
                <div className="background-image-container">
                {/* Backround Image */}
                    <img src={profile} className="background-image"/>
                </div>
            </div>
            <div className="right-column-about">
                <div className="story">
                    <p className="about-title" style={{textAlign: 'center', color: '#292929'}}>GOLDN HOUR</p>
                    <p className="slogan">ILLUMINATE YOUR FEATURES AND FEEL TIMELESS</p>
                    <div className="divider">{/*Black line */}</div>
                    <p style={{fontSize: '16px', color: '#292929', lineHeight: '2'}}>The Golden Hour. It’s a time of day when the sun’s glowing rays leave us spellbound as it paints all that it touches into a work of art. Heavy blankets of golden hour sunlight resting on a wooden floor can evoke feelings of nostalgia and dream-like sensations. It’s within these rare and special moments that those who seek to look their best are rewarded for their efforts. This is the magical hour. This transient state of beauty is the same feeling clients experience when they leave GOLDN HOUR. Each client’s lashes and brows are customized to their unique features, enhancing their own natural beauty. Embrace a profound sense of confidence and beauty. Embrace your very own golden hour.</p>
                </div>
            </div>
        </div>
    )
}

export default About;