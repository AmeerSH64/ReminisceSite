import { IconArrowDown } from "@tabler/icons-react";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {

  const sectionRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useGSAP(() => {
    const parts = [sectionRef.current, titleRef.current, descriptionRef.current, image1Ref.current, image2Ref.current];
    parts.forEach((part, index) => {
      gsap.fromTo(part, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: part, start: "top 70%" }
        }
      )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-padding items-center text-center mx-auto">
        <h2 className="md:text-7xl text-5xl animate-fade-in" ref={titleRef}>Weddings and photography</h2>
        <p className="text-3xl md:text-4xl mb-8 animate-fade-in" ref={titleRef}>What we do for 
          <span className="italic text-primary"> you.</span>
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-47">
          <div className="flex items-center flex-col gap-10 animate-fade-in" ref={descriptionRef}>
            <div className="about-text animation-delay-100">
              <p>At Reminisce, we specialise in wedding photography and cinematography.</p>
              <p>With our team of skilled photographers, we capture those special moments for you.</p>
            </div>
            <div className="flex flex-center animation-delay-200">
              <a href="#gallery">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">See our work</p>
                  <div className="arrow-wrapper">
                    <IconArrowDown className="size-5 xl:-translate-y-32 
                    translate-y-0 animate-bounce group-hover:translate-y-0 
                    transition-all duration-500 text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col animate-fade-in">
            <div className="about-top-images flex flex-row gap-5" ref={image1Ref}>
              <img src="/photos/deco-outside.jpg" alt="Outside Decoration" className="animation-delay-300" />
              <img src="/photos/grey-bride-swing.jpg" alt="Bride on Swing" className="animation-delay-400" />
            </div>
            <div className="about-bottom-images flex flex-row gap-5" ref={image2Ref}>
              <img src="/photos/car-interior.jpg" alt="Car Interior" className="animation-delay-500" />
              <img src="/photos/bride-window.jpg" alt="Bride at Window" className="animation-delay-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About