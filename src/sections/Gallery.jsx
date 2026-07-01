import React, { useState } from 'react'
import MemberCard from '../components/MemberCard'

const Gallery = () => {
  
  return (
    <section id="gallery" className='gallery'>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-4xl md:text-7xl'>Gallery</h2>
        <p className='md:text-4xl mb-8'>A showcase of our
          <span className='italic text-primary'> work.</span>
        </p>
        <div className="gallery-collage grid grid-cols-3 md:grid-cols-6 gap-4 mt-5">
          <div className="col-span-3">
            <img src="/photos/wide-couple.png" alt="Couple Wide Shot" />
          </div>
          <div className="row-span-2">
            <img src="/photos/nikkah-plaque.png" alt="Nikkah Plaque" />
          </div>
          <img className="col-span-2" src="/photos/groom-bride-walking-away.png" alt="Walking Away" />
          <img className="col-span-2" src="/photos/flower-curtains.png" alt="Curtains" />
          <img src="/photos/bride-outfit.png" alt="Bride Outfit" />
          <img className="col-span-2" src="/photos/wedding-car.png" alt="Wedding Car" />
        </div>
      </div>
    </section>
  )
}

export default Gallery