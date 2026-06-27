const Home = () => {
  return (
    <section id="home" className="home">
      <div className="section-padding text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-7xl">Welcome to 
            <span className="font-bold text-primary"> Reminisce</span>
          </h1>
          <p className="text-4xl">Your moments. 
            <span className="italic text-primary"> Captured</span>.</p>
        </div>
        <div className=" home-collage grid grid-cols-6 gap-4 mt-12">
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

export default Home