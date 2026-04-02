import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-heading text-2xl font-bold text-primary">
            ॥ Shri Jagannath
Vishwa Shanti Mahayagya ॥
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
            <a href="#events" className="text-muted-foreground hover:text-primary transition-colors text-sm">Events</a>
            <a href="#details" className="text-muted-foreground hover:text-primary transition-colors text-sm">Details</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a>
            <button
              onClick={() => setFormOpen(true)}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-gold-light transition-colors">
              
              Join Now
            </button>
          </div>
          <button
            onClick={() => setFormOpen(true)}
            className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
            
            Join
          </button>
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