import React, { useState } from 'react'
import MemberCard from '../components/MemberCard'
import { teamMembers } from '../constants';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };
  
  return (
    <section id="gallery" className='gallery'>
      
    </section>
  )
}

export default Gallery