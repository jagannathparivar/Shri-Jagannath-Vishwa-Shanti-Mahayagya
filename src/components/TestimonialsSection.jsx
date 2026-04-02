import { Quote } from "lucide-react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const testimonials = [
  {
    text: "Participating in a Jagannath Mahayagya transformed my life. The peace I felt during the ceremony stayed with me for months. My family experienced unprecedented harmony and blessings.",
    name: "Devotee from Kolkata",
    role: "Attended Previous Yagya"
  },
  {
    text: "The sacred fire ceremony connected me to something beyond words. I could feel the divine presence of Mahaprabhu. It was truly a once-in-a-lifetime spiritual experience.",
    name: "Devotee from Puri",
    role: "Regular Jagannath Devotee"
  },
  {
    text: "After the Mahayagya, our business flourished and our family's health improved. The power of collective prayer and sacred rituals is beyond human understanding.",
    name: "Devotee from Mumbai",
    role: "Jagannath Parivar Member"
  }];


  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <p className="testimonials-subtitle">Divine Experiences</p>
          <h2 className="testimonials-title">
            Blessings & Experiences
          </h2>
          <p className="testimonials-desc">
            Hear from devotees who have experienced the divine grace of Lord Jagannath through sacred yagyas.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) =>
          <div
            key={i}
            className="testimonial-card">
            
              <Quote className="testimonial-icon" />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author-wrapper">
                <p className="testimonial-author-name">{t.name}</p>
                <p className="testimonial-author-role">{t.role}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;