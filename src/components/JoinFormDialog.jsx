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
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gotra: "",
    phone: "",
    email: "",
    address: "",
    donation: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyGp9IqSXrEuSWiKGcSOUiMAk1fbNVBUdCWSRGrjuoUgfNhYtzc_c-yMnOd6X787DW2/exec";

    try {
      // Use URLSearchParams for maximum compatibility with Google Apps Script
      const params = new URLSearchParams(formData);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      setLoading(false);
      onOpenChange(false);
      
      // Reset form
      setFormData({
        fullName: "",
        age: "",
        gotra: "",
        phone: "",
        email: "",
        address: "",
        donation: "",
        message: ""
      });

      alert("✨ Registration Successful!\n\nYour details have been recorded in the Mahayagya register. Jay Jagannath!");
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
      alert("Registration failed. Please try again or check your internet connection.");
    }
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
          <div className="join-dialog-notice">
            * <strong>Important:</strong> To maintain the sanctity of the rituals, 
            participation is limited to only <strong>51 families per day</strong>.
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="join-form">
          <div className="join-form-group">
            <Label htmlFor="fullName" className="join-form-label">Full Name *</Label>
            <Input 
              id="fullName" 
              required 
              placeholder="Enter your full name" 
              className="join-form-input"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="join-form-row">
            <div className="join-form-group">
              <Label htmlFor="age" className="join-form-label">Age *</Label>
              <Input 
                id="age" 
                type="number" 
                min="1" 
                required 
                placeholder="Your age" 
                className="join-form-input"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="join-form-group">
              <Label htmlFor="gotra" className="join-form-label">Gotra</Label>
              <Input 
                id="gotra" 
                placeholder="Your Gotra" 
                className="join-form-input"
                value={formData.gotra}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="join-form-row">
            <div className="join-form-group">
              <Label htmlFor="phone" className="join-form-label">Phone Number *</Label>
              <Input 
                id="phone" 
                type="tel" 
                required 
                placeholder="+91 XXXXX XXXXX" 
                className="join-form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="join-form-group">
              <Label htmlFor="email" className="join-form-label">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="your@email.com" 
                className="join-form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="join-form-group">
            <Label htmlFor="address" className="join-form-label">Address *</Label>
            <Input 
              id="address" 
              required 
              placeholder="Your full address" 
              className="join-form-input"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="join-form-group">
            <Label htmlFor="donation" className="join-form-label">Donation Amount (INR)</Label>
            <Input 
              id="donation" 
              type="number" 
              min="0" 
              placeholder="Enter amount if contributing" 
              className="join-form-input"
              value={formData.donation}
              onChange={handleChange}
            />
          </div>

          <div className="join-form-group">
            <Label htmlFor="message" className="join-form-label">Message (Optional)</Label>
            <Textarea 
              id="message" 
              placeholder="Any special requests or message..." 
              rows={4} 
              className="join-form-input min-h-[100px]"
              value={formData.message}
              onChange={handleChange}
            />
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