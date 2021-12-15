import React from 'react';
import Slider from "react-slick";

const international = () => {
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="our-exclusive-container">
            <div className="aboutus-exclusive-content">
                <div className="our-trusted-text">We are international</div>
                <div className="aboutus-exclusive-title">We Have Served Student’s From 50+ Countries</div>
                <div className="international-map">
                </div>
            </div>
            <div className="aboutus-testimonial">
                <div className="testimonial-exclusive-content">
                    <div className="our-trusted-text">TESTIMONIALS</div>
                    <div className="aboutus-exclusive-title">What our universities are saying about us.</div>
                    <div className="aboutus-testimonial-wrapper">
                        <Slider {...sliderSettings}>
                            <div className="aboutus-testimonial-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed eu turpis pulvinar justo dictum blandit eget vel diam. Morbi ornare vulputate nulla, non vestibulum nisi.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                            <div className="aboutus-testimonial-content">
                                Slider Test Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed eu turpis pulvinar justo dictum blandit eget vel diam. Morbi ornare vulputate nulla, non vestibulum nisi.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                            <div className="aboutus-testimonial-content">
                                Slider Test Again Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Sed eu turpis pulvinar justo dictum blandit eget vel diam. 
                                Morbi ornare vulputate nulla, non vestibulum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed eu turpis pulvinar justo dictum blandit eget vel diam. Morbi ornare vulputate nulla, non vestibulum nisi.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default international;