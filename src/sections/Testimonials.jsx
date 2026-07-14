import React, { useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { imageCarousel, reviews } from '../constants'
import TestimonialCard from '../components/TestimonialCard';
import { IconArrowLeft, IconArrowRight, IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const reviewRef = useRef(null);

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
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-5xl md:text-7xl' ref={titleRef}>Testimonials</h2>
        <p className='text-2xl md:text-4xl mb-8' ref={titleRef}>Hear the words of our
          <span className='italic text-primary'> customers.</span>
        </p>
        {/* Desktop View */}
        <div ref={carouselRef} className='desktop relative overflow-hidden'>
          <AutoplaySlider ref={sliderRef} className='relative h-[80vh] z-0' play={isPlaying} cancelOnInteraction={false} interval={3000}
            animation="foldOutAnimation" onTransitionStart={handleTransitionStart} bullets={false}
            organicArrows={false}>
            {reviews.map((review, index) => (
              <div key={index}
                className='hidden lg:flex items-center justify-center z-0
                flex-col'>
                  <img src={review.image} className='w-full h-full object-cover' />
              </div>

            ))}
          </AutoplaySlider>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-col z-20'>
            <div className='relative grid grid-cols-2 h-[70vh] bottom-30 gap-x-150 gap-y-90 z-9'>
              {reviews.map((r, idx) => (
                <div className="w-80 md:w-130 text-white pt-20" key={idx}>
                  <h5 className="text-3xl md:text-5xl">"{r.quote}"</h5>
                  <p className="text-xl md:text-2xl">{r.name}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary w-55 rounded-4xl h-18 flex absolute bottom-5
            items-center justify-center gap-4 mt-4 text-navbar">
              <button onClick={handlePrev}>
                <IconArrowLeft className="cursor-pointer w-15 h-15" />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <IconPlayerPauseFilled className="cursor-pointer w-15 h-15" /> :
                 <IconPlayerPlayFilled className="cursor-pointer w-15 h-15" />}
              </button>
              <button onClick={handleNext}>
                <IconArrowRight className="cursor-pointer w-15 h-15" />
              </button>
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