import { Calendar, MapPin, Users, Phone } from "lucide-react";
import "./EventDetails.css";





const EventDetails = ({ onJoinClick }) => {
  const details = [
  { icon: Calendar, label: "Date", value: "17th, 18th & 19th April 2026" },
  { icon: MapPin, label: "Venue", value: "FD Block Ground, Salt Lake, Kolkata" },
  { icon: Users, label: "Organised by", value: "Sri Rajadhiraj Jagannath Trust & Shri Jagannath Darshan Charitable Trust" }];


  const phones = [
  "+91 79781 75438",
  "+91 73809 66331",
  "+91 85097 17468"];


  return (
    <section id="details" className="events-section">
      <div className="events-container">
        <p className="events-subtitle">Event Information</p>
        <h2 className="events-title">
          When & Where
        </h2>

        <div className="events-contact-grid">
          {details.map((d) =>
          <div key={d.label} className="events-card">
              <d.icon className="events-card-icon" />
              <p className="events-card-label">{d.label}</p>
              <p className="events-card-value">{d.value}</p>
            </div>
          )}
        </div>

        <div className="events-phone-wrapper">
          <Phone className="events-phone-icon" />
          <p className="events-phone-label">Contact Us</p>
          <div className="events-phone-list">
            {phones.map((p) =>
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="events-phone-link">
              
                {p}
              </a>
            )}
          </div>
        </div>

        <p className="events-association">In Association with Jagannath Parivar</p>

        <button
          onClick={onJoinClick}
          className="events-join-button">
          
          Register Now
        </button>
      </div>
    </section>);

};

export default EventDetails;