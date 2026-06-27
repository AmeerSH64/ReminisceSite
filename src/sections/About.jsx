import { IconArrowRight } from "@tabler/icons-react"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-padding items-center text-center mx-auto">
        <h2 className="md:text-7xl text-5xl">Weddings and photography</h2>
        <p className="text-3xl md:text-4xl mb-8">What we do for 
          <span className="italic font-bold text-primary">you.</span>
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-47">
          <div className="flex items-center flex-col gap-10">
            <div className="about-text">
              <p>At Reminisce, we specialise in wedding photography and cinematography.</p>
              <p>With our team of skilled photographers, we capture those special moments for you.</p>
            </div>
            <div className="flex flex-center">
              <button>
                See our work
                <IconArrowRight className="hover:animate-ping" />
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col gap-5">
            <div className="about-top-images flex flex-row gap-5">
              <img src="/photos/deco-outside.jpg" alt="Outside Decoration" />
              <img src="/photos/grey-bride-swing.jpg" alt="Bride on Swing" />
            </div>
            <div className="about-bottom-images flex flex-row gap-5">
              <img src="/photos/car-interior.jpg" alt="Car Interior" />
              <img src="/photos/bride-window.jpg" alt="Bride at Window" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About