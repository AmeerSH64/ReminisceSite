import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(galleryRef.current.querySelectorAll('img'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className='gallery' ref={galleryRef}>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-5xl md:text-7xl'>Gallery</h2>
        <p className='text-2xl md:text-4xl mb-8'>A showcase of our
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