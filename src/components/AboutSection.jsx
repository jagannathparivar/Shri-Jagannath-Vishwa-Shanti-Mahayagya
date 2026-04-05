import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <p className="about-subtitle">The Sacred Connection</p>
        <h2 className="about-title">
          The Divine Bond of Mahayagya
        </h2>
        <div className="about-divider">
          <span className="about-divider-line" />
          <span className="about-divider-icon">✦</span>
          <span className="about-divider-line" />
        </div>

        <p className="about-description">
          Jagannath Vishwa Shanti Mahayagya is a divine Vedic ritual for global welfare. 
          It specifically helps <strong>Remove Negativity</strong> by purifying the mind, 
          invites <strong>Prosperity</strong> through spiritual and material abundance, 
          and bestows <strong>Health & Well-Being</strong> by connecting the soul with 
          Lord Jagannath’s infinite grace and universal love.
        </p>

        <div className="about-grid">
          {[
          {
            icon: ShieldCheck,
            title: "Remove Negativity",
            desc: "Eliminate negative energies and obstacles through sacred Vedic vibrations that purify the mind and surroundings."
          },
          {
            icon: Sparkles,
            title: "Prosperity",
            desc: "Invoke divine abundance and material growth through sacred offerings that open new pathways to holistic success."
          },
          {
            icon: Heart,
            title: "Health & Well-Being",
            desc: "Experience physical vitality and mental wellness by connecting with the healing vibrations of the Mahayagya."
          }].
          map((item) =>
          <div
            key={item.title}
            className="about-card">
            
              <div className="about-card-icon-wrapper">
                <item.icon className="about-card-icon" />
              </div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-desc">{item.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;