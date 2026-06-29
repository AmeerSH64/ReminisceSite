import React, { useState } from 'react'
import MemberCard from '../components/MemberCard'
import { teamMembers } from '../constants';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Gallery = () => {
  
  return (
    <section id="gallery" className='gallery'>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-4xl md:text-7xl'>Gallery</h2>
        <p className='md:text-4xl mb-8'>A showcase of our
          <span className='italic text-primary'> work.</span>
        </p>
      </div>
    </section>
  )
}

export default Gallery