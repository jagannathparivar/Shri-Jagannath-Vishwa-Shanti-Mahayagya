import heroBg from "@/assets/yagya-ceremony.jpg";
import jagannathIcon from "@/assets/jagannath1.webp";
import "./HeroSection.css";
const HeroSection = ({ onJoinClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={heroBg} alt="Sacred Yagya Fire" className="hero-bg-image" width={1920} height={1080} />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content">
        <img
          src={jagannathIcon}
          alt="Lord Jagannath"
          className="hero-icon"
          width={512}
          height={512} />
        

        <p className="hero-greeting">
          ॥ जय जगन्नाथ ॥
        </p>

        <h1 className="hero-title">
          Shri Jagannath<br />Vishwa Shanti Mahayagya<br />
          Kolkata
        </h1>

        <p className="hero-mantra">
          Nilachala Nivasaya Nityayaa Paramatmane<br />
          Balabhadra Subhadrabhyam Jagannathayate Namah
        </p>

        <div className="hero-divider">
          <span className="hero-divider-line" />
          <span className="hero-divider-icon">✦</span>
          <span className="hero-divider-line" />
        </div>

        <p className="hero-association">
          In Association with Jagannath Parivar
        </p>

        <p className="hero-description">
          A once-in-a-lifetime spiritual event - Mahayagya and 32 Besha together in Kolkata.
          Join and receive divine blessings.
        </p>

        <div className="hero-dates-wrapper">
          <p className="hero-dates">
            17th, 18th & 19th April 2026
          </p>
          <p className="hero-location">FD Block Ground, Salt Lake, Kolkata</p>
        </div>

        <button
          onClick={onJoinClick}
          className="hero-join-button">
          
          Join the Mahayagya
        </button>
      </div>

      <div className="hero-bottom-border" />
    </section>);

};

export default HeroSection;