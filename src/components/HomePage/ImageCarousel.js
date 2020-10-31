import React from 'react';
import Carousel from './Carousel';
import '../../css/ImageCarousel.css';
import image1 from '../../Media/Homepage/our-story.png';


const ImageCarousel = () => {
    return (
        <div className="carousel-container">
            <div>
                <p className="title">TESTIMONIALS</p>
            </div>
            <Carousel />
        </div>
      
    )
}

export default ImageCarousel;