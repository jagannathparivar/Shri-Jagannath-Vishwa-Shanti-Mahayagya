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

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Details", href: "#details" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-heading text-base sm:text-lg md:text-2xl font-bold text-primary whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0 mr-2">
            <span className="hidden sm:inline">॥ Shri Jagannath Vishwa Shanti Mahayagya ॥</span>
            <span className="sm:hidden">॥ Shri Jagannath Mahayagya ॥</span>
          </span>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setFormOpen(true)}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-gold-light transition-colors shadow-glow-gold">
              Join Now
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shadow-sm">
              Join
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 text-primary hover:bg-primary/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 border-b border-border overflow-hidden transition-all duration-300 ease-in-out shadow-lg z-50 ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: 'hsl(0, 30%, 8%)' }}
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 border-b border-border/50 last:border-0"
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
      <HowToParticipateSection onJoinClick={() => setFormOpen(true)} />
      <TestimonialsSection />
      <EventDetails onJoinClick={() => setFormOpen(true)} />
      <FAQSection />

      <footer className="py-10 px-4 bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-heading text-2xl text-primary mb-2">ॐ Jay Jagannath ॐ</p>
          <p className="text-muted-foreground text-sm mb-4">
            Organised by Sri Rajadhiraj Jagannath Trust & Shri Jagannath Darshan Charitable Trust
          </p>
          <p className="text-muted-foreground text-sm mb-1">In Association with Jagannath Parivar</p>
          <p className="text-muted-foreground text-xs mt-4">
            © 2026 All rights reserved.
          </p>
        </div>
      </footer>

      <JoinFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>);

};

export default Index;