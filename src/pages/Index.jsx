import { useState } from "react";
import { Menu, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignificanceSection from "@/components/SignificanceSection";
import SacredEventsSection from "@/components/SacredEventsSection";
import HowToParticipateSection from "@/components/HowToParticipateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventDetails from "@/components/EventDetails";
import FAQSection from "@/components/FAQSection";
import JoinFormDialog from "@/components/JoinFormDialog";
import GallerySection from "@/components/GallerySection";
import "./Index.css";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Details", href: "#details" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">
            <span className="hidden sm:inline">॥ Shri Jagannath Vishwa Shanti Mahayagya ॥</span>
            <span className="sm:hidden">
              ॥ Shri Jagannath <br /> Vishwa Shanti Mahayagya ॥
            </span>
          </span>

          <div className="nav-desktop-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setFormOpen(true)}
              className="nav-join-button">
              Join Now
            </button>
          </div>

          <div className="nav-mobile-actions">
            <button
              onClick={() => setFormOpen(true)}
              className="nav-join-button-mobile">
              Join
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-menu-button"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`nav-mobile-menu ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: 'hsl(0, 30%, 8%)' }}
        >
          <div className="nav-mobile-links-container">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                className="nav-mobile-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <HeroSection onJoinClick={() => setFormOpen(true)} />
      <AboutSection />
      <SignificanceSection />
      <SacredEventsSection />
      <GallerySection />
      <HowToParticipateSection onJoinClick={() => setFormOpen(true)} />
      <TestimonialsSection />
      <EventDetails onJoinClick={() => setFormOpen(true)} />
      <FAQSection />

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-title">ॐ Jay Jagannath ॐ</p>
          <p className="footer-text">
            Organised by Sri Rajadhiraj Jagannath Trust & Shri Jagannath Darshan Charitable Trust
          </p>
          <p className="footer-association">In Association with Jagannath Parivar</p>
          <p className="footer-copyright">
            © 2026 All rights reserved.
          </p>
        </div>
      </footer>

      <JoinFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>);

};

export default Index;