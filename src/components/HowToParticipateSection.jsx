import { Flame, Users, HandHeart, Gift } from "lucide-react";
import "./HowToParticipateSection.css";





const HowToParticipateSection = ({ onJoinClick }) => {
  const steps = [
  {
    icon: Users,
    step: "01",
    title: "Register Yourself",
    desc: "Fill out the registration form with your details. Bring your family and loved ones along for collective blessings."
  },
  {
    icon: Flame,
    step: "02",
    title: "Attend the Mahayagya",
    desc: "Visit FD Block Ground, Salt Lake, Kolkata on 17th-19th April 2026. Be present for the sacred fire ceremonies."
  },
  {
    icon: HandHeart,
    step: "03",
    title: "Offer Your Prayers",
    desc: "Participate in the rituals guided by learned pandits. Offer your prayers and ahuti into the sacred fire."
  },
  {
    icon: Gift,
    step: "04",
    title: "Receive Mahaprasad",
    desc: "Partake in the sacred Mahaprasad from Lord Jagannath - the divine food that purifies body and soul."
  }];


  return (
    <section className="participate-section">
      <div className="participate-container">
        <div className="participate-header">
          <p className="participate-subtitle">Your Journey</p>
          <h2 className="participate-title">
            How to Participate
          </h2>
          <p className="participate-desc">
            Your path to divine blessings is simple. Follow these steps to be part of this sacred event.
          </p>
        </div>

        <div className="participate-grid">
          {steps.map((s) =>
          <div key={s.step} className="participate-step-wrapper">
              <div className="participate-step-icon-container">
                <div className="participate-step-icon-bg">
                  <s.icon className="participate-step-icon" />
                </div>
              </div>
              <div>
                <span className="participate-step-number">Step {s.step}</span>
                <h3 className="participate-step-title">{s.title}</h3>
                <p className="participate-step-desc">{s.desc}</p>
              </div>
            </div>
          )}
        </div>

        <div className="participate-button-wrapper">
          <button
            onClick={onJoinClick}
            className="participate-join-button">
            
            Begin Your Journey - Register Now
          </button>
        </div>
      </div>
    </section>);

};

export default HowToParticipateSection;