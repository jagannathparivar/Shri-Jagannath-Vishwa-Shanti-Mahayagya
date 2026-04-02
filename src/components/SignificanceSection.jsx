import templeView from "@/assets/Temple3.webp";
import "./SignificanceSection.css";

const SignificanceSection = () => {
  return (
    <section className="significance-section">
      <div className="significance-container">
        <div className="significance-grid">
          <div>
            <p className="significance-subtitle">Why This Mahayagya?</p>
            <h2 className="significance-title">
              The Spiritual Significance
            </h2>
            <div className="significance-content">
              <p>
                Lord Jagannath - the Lord of the Universe - is the supreme deity worshipped by millions.
                The Vishwa Shanti Mahayagya is a sacred endeavour to invoke His divine blessings for
                world peace, harmony, and the spiritual upliftment of all beings.
              </p>
              <p>
                This Mahayagya creates the purest bridge between the devotee and God. When you sit
                before the sacred fire and offer your prayers, every mantra chanted becomes a thread
                connecting your soul to the divine. It is believed that participating in such a
                grand yagya washes away past karmas and opens new doors of prosperity.
              </p>
              <p>
                The sacred Mahaprasad of Lord Jagannath, which will be distributed during the event,
                is considered the holiest food - it knows no distinction of caste, creed, or status.
                Everyone is equal before Mahaprabhu.
              </p>
            </div>

            <div className="significance-stats-grid">
              {[
              { num: "32", label: "Sacred Ceremonies" },
              { num: "51", label: "Yagya Kund" },
              { num: "3", label: "Divine Days" }].
              map((stat) =>
              <div key={stat.label} className="significance-stat-card">
                  <p className="significance-stat-num">{stat.num}</p>
                  <p className="significance-stat-label">{stat.label}</p>
                </div>
              )}
            </div>
          </div>

          <div className="significance-image-container">
            <div className="significance-image-wrapper">
              <img
                src={templeView}
                alt="Sacred Temple"
                className="significance-image"
                loading="lazy"
                width={800}
                height={600} />
              
            </div>
            <div className="significance-quote-card">
              <p className="significance-quote-text">
                "Jagannath Swami Nayana Patha Gami Bhavatu Me"
              </p>
              <p className="significance-quote-author">- Ancient Prayer</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SignificanceSection;