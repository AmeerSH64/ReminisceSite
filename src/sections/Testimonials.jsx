import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { imageCarousel, reviews } from '../constants'
import TestimonialCard from '../components/TestimonialCard';
import { IconArrowLeft, IconArrowRight, IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const reviewRef = useRef(null);

  const visibleReviews = reviews.slice(activeIndex).concat(reviews.slice(0, activeIndex));

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    sliderRef.current?.next();
  };

  const handlePrev = () => {
    sliderRef.current?.prev();
  };

  const handleGoToSlide = (index) => {
    sliderRef.current?.goto(index);
  };

  const handleTransitionStart = (entry) => {
    const idx = entry && typeof entry.index === 'number' ? entry.index : null;
    if (idx !== null && idx >= 0 && idx < reviews.length) {
      setCurrentSlide(idx);
      setActiveIndex(idx);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(id);
  }, [isPlaying]);

  useGSAP(() => {
    const parts = [sectionRef.current, titleRef.current, carouselRef.current, reviewRef.current];
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
      <div className='mt-10 mx-auto text-center'>
        <h2 className='text-5xl md:text-7xl' ref={titleRef}>Testimonials</h2>
        <p className='text-2xl md:text-4xl mb-4' ref={titleRef}>Hear the words of our
          <span className='italic text-primary'> customers.</span>
        </p>
        {/* Desktop View */}

        <div className='desktop testi-container'>
          <div className='testi-slide'>
            {visibleReviews.map((r, idx) => (
              <div key={`${r.name}-${idx}`} className='testi-item' style={{
                backgroundImage: `url(${r.image})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className='testi-content'>
                  <div className='testi-quote'>"{r.quote}"</div>
                  <div className='testi-name'>{r.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="testi-arrows">
            <button className="p-2 rounded-full bg-primary hover:bg-navbar
            hover:text-primary transition-colors text-white" onClick={previous}>
              <IconArrowLeft />
            </button>
            <button onClick={next}
              className="p-2 rounded-full bg-primary hover:bg-navbar
            hover:text-primary transition-colors text-white">
              <IconArrowRight />
            </button>
          </div>
          <div className="time-running"></div>
        </div>
        {/* Mobile View */}
        <div className="max-w-4xl mx-auto" ref={carouselRef}>
          <div className="relative block lg:hidden">
            <div className='scroll-smooth'>
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