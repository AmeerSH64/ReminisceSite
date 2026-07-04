import React, { useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { imageCarousel, reviews } from '../constants'
import TestimonialCard from '../components/TestimonialCard';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const carouselRef = useRef(null);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  setTimeout(() => {
    if (activeIndex < reviews.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }, 3000);

  useGSAP(() => {
    const parts = [sectionRef.current, titleRef.current, carouselRef.current];
    parts.forEach((part, index) => {
      gsap.fromTo(part, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: part, start: "top 50%" }
        }
      )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, []);

  return (
    <section id='testimonials' className='testimonials' ref={sectionRef}>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-5xl md:text-7xl' ref={titleRef}>Testimonials</h2>
        <p className='text-2xl md:text-4xl mb-8' ref={titleRef}>Hear the words of our
          <span className='italic text-primary'> customers.</span>
        </p>
        {/* Desktop View */}
        <div ref={carouselRef}
          className='hidden lg:flex items-center justify-center flex-col min-h-[320px] md:min-h-[420px] bg-cover bg-center'
          style={{
            backgroundImage: `url(${reviews[activeIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='flex justify-center items-center flex-col'>
            <div className='relative grid grid-cols-2 h-[70vh] gap-x-150 gap-y-90 z-9'>
            {reviews.map((review, index) => (
              <div className='w-80 md:w-130 text-white pt-20'>
                <h5 className='text-3xl md:text-5xl'>"{review.quote}"</h5>
                <p className='text-xl md:text-2xl'>{review.name}</p>
              </div>
            ))}
            </div>
            <div className='flex flex-row justify-center items-center bg-secondary 
            rounded-4xl z-9 w-35 h-8 gap-3 -translate-y-5'>
              {reviews.map((_, index) => (
                <button key={index} onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300
                  ${index === activeIndex ? "w-8 bg-primary" : 
                    "bg-navbar hover:bg-primary/50"}`} />
              ))}
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="max-w-4xl mx-auto" ref={carouselRef}>
          <div className="relative block lg:hidden">
            <div className="animate-fade-in animation-delay-300">
              <TestimonialCard name={reviews[activeIndex].name}
              quote={reviews[activeIndex].quote}
              image={reviews[activeIndex].image} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <button className="p-2 rounded-full glass hover:bg-primary/10
              hover:text-primary transition-all" onClick={previous}>
                <IconArrowLeft />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                    ${index === activeIndex ? "w-8 bg-primary" : 
                      "bg-navbar hover:bg-primary/50"}`} />
                ))}
              </div>
              <button onClick={next}
              className="p-2 rounded-full glass hover:bg-primary/10
              hover:text-primary transition-all">
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials