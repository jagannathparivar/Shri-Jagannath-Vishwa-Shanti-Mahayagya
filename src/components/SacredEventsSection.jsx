import yagyaCeremony from "@/assets/yagya-ceremony.jpg";
import "./SacredEventsSection.css";

const SacredEventsSection = () => {
  const events = [
    { name: "Vishwa Shanti Mahayagya", desc: "A grand Vedic fire ritual for universal peace and the well-being of all humanity." },
    { name: "Presence of Puri Daitapati", desc: "Sacred guidance and rituals performed by the traditional Daitapati Sevayats of Puri Temple." },
    { name: "Shri Jagannath from Puri", desc: "Divine rituals and spiritual vibrations transported directly from the heart of Puri Dham." },
    { name: "Mahaprasad of Puri Temple", desc: "The rare opportunity to receive the holy Mahaprasad, blessed by Lord Jagannath himself." }
  ];

  return (
    <section id="events" className="sacred-events-section">
      <div className="sacred-events-bg-wrapper">
        <img src={yagyaCeremony} alt="" className="sacred-events-bg-image" loading="lazy" width={1920} height={800} />
      </div>
      <div className="sacred-events-container">
        <div className="sacred-events-header">
          <p className="sacred-events-subtitle">32 Sacred Ceremonies</p>
          <h2 className="sacred-events-title">
            A Grand Spiritual Gathering
          </h2>
          <p className="sacred-events-desc">
            For the first time in Kolkata, witness 32 Besha (sacred ceremonies) performed together - 
            a rare convergence of divine rituals that happens once in a lifetime.
          </p>
        </div>

        <div className="sacred-events-grid">
          {events.map((e, i) =>
            <div
              key={e.name}
              className="sacred-event-card"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="sacred-event-icon-wrapper">
                <span className="sacred-event-number">{i + 1}</span>
              </div>
              <h3 className="sacred-event-title">{e.name}</h3>
              <p className="sacred-event-desc">{e.desc}</p>
            </div>
          )}
        </div>

        <p className="sacred-events-footer">
          ...and 28 more sacred ceremonies. Join to experience them all.
        </p>
      </div>
    </section>
  );

};

export default SacredEventsSection;