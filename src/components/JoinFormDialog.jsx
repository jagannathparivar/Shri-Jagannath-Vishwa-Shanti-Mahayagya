import { useState } from "react";
import "./JoinFormDialog.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription } from
"@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";



const JoinFormDialog = ({ open, onOpenChange }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      alert(" Registration Successful!\n\nYou have been registered for the Mahayagya. Jay Jagannath!");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="join-dialog-content">
        <DialogHeader>
          <DialogTitle className="join-dialog-title">
            Join the Mahayagya
          </DialogTitle>
          <DialogDescription className="join-dialog-desc">
            Fill in your details to register for the sacred event
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="join-form">
          <div className="join-form-group">
            <Label htmlFor="fullName" className="join-form-label">Full Name *</Label>
            <Input id="fullName" required placeholder="Enter your full name" className="join-form-input" />
          </div>

          <div className="join-form-row">
            <div className="join-form-group">
              <Label htmlFor="age" className="join-form-label">Age *</Label>
              <Input id="age" type="number" min="1" required placeholder="Your age" className="join-form-input" />
            </div>
            <div className="join-form-group">
              <Label htmlFor="gotra" className="join-form-label">Gotra</Label>
              <Input id="gotra" placeholder="Your Gotra" className="join-form-input" />
            </div>
          </div>

          <div className="join-form-row">
            <div className="join-form-group">
              <Label htmlFor="phone" className="join-form-label">Phone Number *</Label>
              <Input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="join-form-input" />
            </div>
            <div className="join-form-group">
              <Label htmlFor="email" className="join-form-label">Email *</Label>
              <Input id="email" type="email" required placeholder="your@email.com" className="join-form-input" />
            </div>
          </div>

          <div className="join-form-group">
            <Label htmlFor="address" className="join-form-label">Address *</Label>
            <Input id="address" required placeholder="Your full address" className="join-form-input" />
          </div>

          <div className="join-form-group">
            <Label htmlFor="donation" className="join-form-label">Donation Amount (INR)</Label>
            <Input id="donation" type="number" min="0" placeholder="Enter amount if contributing" className="join-form-input" />
          </div>

          <div className="join-form-group">
            <Label htmlFor="message" className="join-form-label">Message (Optional)</Label>
            <Textarea id="message" placeholder="Any special requests or message..." rows={3} className="join-form-input" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="join-form-submit">
            {loading ? "Registering..." : "Register for Mahayagya"}
          </button>
        </form>
      </DialogContent>
    </Dialog>);

};

export default JoinFormDialog;