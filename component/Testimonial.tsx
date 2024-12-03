import React from 'react';
import './TestimonialSlider.css';

const testimonials = [
    {
        id: 1,
        image: 'src/Photos/1-09.png', // Replace with the actual image URL
        quote:
            '"I have tried 46 POS systems before settling down with LimeTray\'s POS. They solve massive problems for the restaurant industry and are the best technology partner you can get."',
        name: 'Kabir Jeet Singh',
        designation: 'Founder, Burger Singh',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/300x200', // Replace with the actual image URL
        quote:
            '"LimeTray helped us bridge the demand for our products with the online ordering platform. We\'ve been with LimeTray for almost 2 years, and they\'ve met all our expectations."',
        name: 'Harsh Gupta',
        designation: 'Manager (Strategy & Alliance), Mad Over Donuts',
    },
];

const TestimonialSlider: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                {testimonials.map((testimonial) => (
                    <div className="slide" key={testimonial.id}>
                        <div className="testimonial-content">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-image"
                            />
                            <div className="testimonial-text">
                                <p className="quote">{testimonial.quote}</p>
                                <p className="name">{testimonial.name}</p>
                                <p className="designation">{testimonial.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
