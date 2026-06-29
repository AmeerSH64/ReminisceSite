import { IconArrowRight } from "@tabler/icons-react"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-padding items-center text-center mx-auto">
        <h2 className="md:text-7xl text-5xl animate-fade-in">Weddings and photography</h2>
        <p className="text-3xl md:text-4xl mb-8 animate-fade-in">What we do for 
          <span className="italic font-bold text-primary"> you.</span>
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-47">
          <div className="flex items-center flex-col gap-10 animate-fade-in">
            <div className="about-text animation-delay-100">
              <p>At Reminisce, we specialise in wedding photography and cinematography.</p>
              <p>With our team of skilled photographers, we capture those special moments for you.</p>
            </div>
            <div className="flex flex-center animation-delay-200">
              <button>
                See our work
                <IconArrowRight />
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col gap-5 animate-fade-in">
            <div className="about-top-images flex flex-row gap-5">
              <img src="/photos/deco-outside.jpg" alt="Outside Decoration" className="animation-delay-300" />
              <img src="/photos/grey-bride-swing.jpg" alt="Bride on Swing" className="animation-delay-400" />
            </div>
            <div className="about-bottom-images flex flex-row gap-5">
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