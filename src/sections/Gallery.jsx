import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);
  const titleRef = useRef(null); 
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);

  useGSAP(() => {
    const parts = [galleryRef.current, titleRef.current, image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current, image5Ref.current, image6Ref.current];
    parts.forEach((part, index) => {
      gsap.fromTo(part, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: part, start: "top 50%" }
        }
      )
    })
    gsap.fromTo(galleryRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, []);

  return (
    <section id="gallery" className='gallery' ref={galleryRef}>
      <div className='section-padding mx-auto text-center'>
        <h2 className='text-5xl md:text-7xl' ref={titleRef}>Gallery</h2>
        <p className='text-2xl md:text-4xl mb-8' ref={titleRef}>A showcase of our
          <span className='italic text-primary'> work.</span>
        </p>
        <div className="gallery-collage grid grid-cols-3 md:grid-cols-6 gap-4 mt-5">
          <img src="/photos/wide-couple.webp" alt="Couple Wide Shot" className="col-span-3"
           ref={image1Ref} />
          <img src="/photos/nikkah-plaque.webp" alt="Nikkah Plaque" className="row-span-2"
           ref={image2Ref} />
          <img className="col-span-2" src="/photos/groom-bride-walking-away.webp" alt="Walking Away"
          ref={image3Ref} />
          <img className="col-span-2" src="/photos/flower-curtains.webp" alt="Curtains"
          ref={image4Ref} />
          <img src="/photos/bride-outfit.webp" alt="Bride Outfit"
          ref={image5Ref} />
          <img className="col-span-2" src="/photos/wedding-car.webp" alt="Wedding Car"
          ref={image6Ref} />
        </div>
      </div>
    </section>
  )
}

export default Gallery