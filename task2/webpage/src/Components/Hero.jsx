import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>NEW PRODUCT</p>
        <h2>The Twist of Healthy Yogurt</h2>
        <button>Buy Now</button>
      </div>

      <div className="hero-image">
        <img src="bg-home.jpg" alt="Frozen Yogurt" />
      </div>
    </section>
  );
};

export default Hero;
