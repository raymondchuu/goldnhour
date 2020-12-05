import React from 'react';
import Map from '../Media/aboutmap.png';
import profile from '../Media/aboutpage-profile.png';
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
                            <div className="about-profile-image">
                                <img src={profile} style={{width: '100%'}}/>
                            </div>
                        </div>
                        <div className="aboutpage-right">
                            <p style={{fontSize: '24px', color: '#AE3B15', fontWeight: 'bolder'}}>Michelle Le</p>
                            <p>Michelle, founder of Goldn Hour, had started her beauty career in late 2016. She grew up in a Nail Salon as her immigrant parents adapted and grown to operate a successful salon of their own for over 20+ years. Subsequently, she developed her own creativity and desire to make everyone look and feel beautiful. She has been lashing for over 4 years and she continues to broaden her skills in becoming a permanent makeup artist.  </p>
                            <p>After continuous success, Michelle decided to embark towards the educational route and share her knowledge in this ever-changing industry. With her high attention to detail and experience, she has created hands-on training for students to grow their confidence and receive in-the-moment coaching.</p>
                            <br/>
                            <p style={{textDecoration: 'underline', marginBottom: '0'}}>Credentials</p>
                            <p>Lia Lash Pro - Classic <br/>
                                Lash Artisan - Lash Lift + Tint <br/>
                                Lash Girls Pro - Volume<br/>
                                Lia Lash Pro - Volume<br/>
                                Shay Danielle Academy - Brow Lamination <br/>
                                Nala - 2018 Nominee for Newcomer of the Year award <br/>
                                Lash Affair - Dec 2017 Lash artist of the month <br/>
                                Brows by Linnie - Powder Ombre Brows <br/>
                                Suzie Mcintosh - Microblading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;