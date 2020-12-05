import React from 'react';
import {IoLogoInstagram} from 'react-icons/io';
import '../../css/Images.css';
import image1 from '../../Media/image1.png';
import image2 from '../../Media/image2.png';
import image3 from '../../Media/image3.png';
import image4 from '../../Media/image4.png';
import image5 from '../../Media/image5.png';
import image6 from '../../Media/image6.png';
import image7 from '../../Media/image7.png';
import image8 from '../../Media/image8.png';

const img = [image1, image2, image3, image4, image5, image6, image7, image8];

const Images = () => {
    return (
        <div className="images-container">
            <div style={{marginTop: '50px', marginBottom: '25px', textAlign: 'center'}}>
                <IoLogoInstagram style={{height: '35px', width: '30px', paddingBottom: '5px', paddingRight: '5px'}} /><a href="https://www.instagram.com/goldnhour.ca/" className="title">goldenhour.ca</a>
            </div>
            <div style={{display: 'block', margin: 'auto', width: '100%', backgroundColor: '#FAFAFA'}}>
                {img.map((link) => (
                    <div className="display-img">
                        <div className="inner-img">
                            <img src={link} style={{height: '100%', width: '100%'}}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images;