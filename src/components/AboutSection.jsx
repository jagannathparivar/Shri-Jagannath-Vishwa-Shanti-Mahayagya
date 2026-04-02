import { Heart, Sparkles, HandHeart } from "lucide-react";
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
          It specifically fosters <strong>Peace</strong> by harmonizing the mind, 
          invites <strong>Wealth</strong> through spiritual and material abundance, 
          and bestows eternal <strong>Happiness</strong> by connecting the soul with 
          Lord Jagannath’s infinite grace and universal love.
        </p>

        <div className="about-grid">
          {[
          {
            icon: Sparkles,
            title: "Peace",
            desc: "Achieve profound inner tranquility and mental harmony through sacred Vedic vibrations that purify the mind and surroundings."
          },
          {
            icon: Heart,
            title: "Wealth",
            desc: "Invoke divine abundance and material prosperity through sacred offerings that open new pathways to holistic success and well-being."
          },
          {
            icon: HandHeart,
            title: "Happiness",
            desc: "Experience everlasting joy and soul-deep contentment by establishing a direct spiritual connection with Lord Jagannath’s infinite grace."
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