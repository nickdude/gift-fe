import React, { useRef } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';
const Testimonials = ({color}) => {
  const scrollRef = useRef(null);
  const theme = color != 'blue'? '#FFE8F2':'#D1E4FF'

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="testimonial-container" style={{"background":`${theme}`}}>
        <p className='testimonial-header'>Testimonials</p>
        <div className='testimonial-cards-container'>
            <button onClick={() => scroll(-400)} className="scroll-button left">
                &#8249;
            </button>
            <div className="testimonial-scroll" ref={scrollRef}>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>

            </div>
            <button onClick={() => scroll(400)} className="scroll-button right">
                &#8250;
            </button>
        </div>

    
    </div>
  );
};

export default Testimonials;
