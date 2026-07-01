import React, { useState } from 'react'
import { imageCarousel, reviews } from '../constants'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };

  return (
    <section id='testimonials' className='testimonials'>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-4xl md:text-7xl'>Testimonials</h2>
        <p className='md:text-4xl mb-8'>Hear the words of our
          <span className='italic text-primary'> customers.</span>
        </p>
        <div className='desktop flex items-center justify-center flex-col bg-[url("/photos/chandelier.png")] bg-cover'>
          <div className='flex justify-center items-center flex-col'>
            <div className='relative grid grid-cols-2 gap-170 z-9'>
            {reviews.map((review, index) => (
              <div className='w-80 md:w-125 text-white'>
                <h5 className='text-3xl md:text-5xl'>{review.quote}</h5>
                <p className='text-xl md:text-2xl'>{review.name}</p>
              </div>
            ))}
            </div>
            <div className='flex flex-row justify-center items-center bg-secondary 
            rounded-4xl z-9 w-35 h-8 gap-3 -translate-y-10'>
              <div className='bg-primary h-5 w-5 rounded-full'></div>
              <div className='bg-navbar h-5 w-5 rounded-full'></div>
              <div className='bg-navbar h-5 w-5 rounded-full'></div>
              <div className='bg-navbar h-5 w-5 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials