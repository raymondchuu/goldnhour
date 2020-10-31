import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import testimonial1 from '../../Media/Homepage/testimonial1.png';
import testimage from '../../Media/Homepage/our-story.png';

class TestimonialCarousel extends React.Component {
    render() {
        return (
          <div>
          <Carousel>
            <Carousel.Item style={{height: '10%'}}>
              <img src={testimage} width="100%"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={testimage} />
            </Carousel.Item>
          </Carousel>
          </div>

        )
    }
}

export default TestimonialCarousel