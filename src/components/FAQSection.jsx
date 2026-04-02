import "./FAQSection.css";

const FAQSection = () => {
  const faqs = [
  {
    q: "What is Vishwa Shanti Mahayagya?",
    a: "Vishwa Shanti Mahayagya is a grand sacred fire ceremony dedicated to Lord Jagannath, aimed at promoting world peace, spiritual well-being, and divine blessings. It brings together 32 different sacred ceremonies (Besha) in one grand event."
  },
  {
    q: "Who can participate in the Mahayagya?",
    a: "Everyone is welcome! There are no restrictions of caste, creed, or religion. Lord Jagannath is the Lord of the Universe, and His blessings are for all. Families, individuals, and groups can all participate."
  },
  {
    q: "Is there any fee to attend?",
    a: "The event is open to all devotees. You can register through our form to participate. Voluntary contributions and donations are welcome to support the grand scale of the ceremonies."
  },
  {
    q: "What is Mahaprasad?",
    a: "Mahaprasad is the sacred food offering of Lord Jagannath, prepared in the traditional way as done at the Jagannath Temple in Puri, Odisha. It is considered the holiest food and is believed to purify the body, mind, and soul."
  },
  {
    q: "What should I bring or wear?",
    a: "Wear comfortable, modest traditional clothing. You may bring flowers, fruits, or other offerings for the yagya. Most importantly, bring your devotion and an open heart."
  },
  {
    q: "Can I bring my entire family?",
    a: "Absolutely! Family participation is highly encouraged. The blessings of the Mahayagya extend to all family members present. Please mention the number of family members during registration."
  }];


  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-subtitle">Common Questions</p>
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) =>
            <details
              key={i}
              className="faq-details"
            >
              <summary className="faq-summary">
                {faq.q}
                <span className="faq-icon-wrapper">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </span>
              </summary>
              <div className="faq-answer">
                {faq.a}
              </div>
            </details>
          )}
        </div>
      </div>
    </section>);

};

export default FAQSection;