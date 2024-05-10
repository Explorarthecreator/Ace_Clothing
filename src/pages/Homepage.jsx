import model from '../model.jpg'
function Homepage() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${model})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">
        Coming Soon
      </h1>
      <p className="mb-5 text-gray-100">
        Ace clothing is an online store for all your wears that are of quality materials. We even offer customization on any item you would like from shirts to shoes and they are very affordable.
      </p>
      <button className="btn cursor-not-allowed text-white">
        ANTICIPATE
      </button>
    </div>
  </div>
</div>
  )
}

export default Homepage