import React, { useState } from 'react'
import MemberCard from '../components/MemberCard'
import { teamMembers } from '../constants';
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };
  
  return (
    <section id="team" className='team'>
      <div className='section-padding text-center'>
        <h1 className='text-5xl'>Meet the
          <span className='italic text-primary'> team</span>
        </h1>
        <p className='text-xl'>The visionaries behind the magic.</p>
      </div>
      <div className='max-w-4xl mx-auto flex flex-row items-center justify-center gap-10'>
        <button onClick={previous} 
        className="p-2 rounded-full glass text-secondary bg-primary/50
        hover:bg-primary/10 hover:text-primary transition-all">
          <IconArrowLeft />
        </button>
        <div className='relative'>
          <div>
            <MemberCard name={teamMembers[activeIndex].name} role={teamMembers[activeIndex].role} image={teamMembers[activeIndex].image} />
          </div>
        </div>
        <button onClick={next} 
        className="p-2 rounded-full glass bg-navbar hover:bg-primary/10 hover:text-primary transition-all">
          <IconArrowRight />
        </button>
      </div>
    </section>
  )
}

export default Team