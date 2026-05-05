import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// const WHATSAPP_URL =
//   "https://wa.me/+919579976241?text=Hi,%20I’d%20like%20to%20check%20room%20availability%20and%20current%20packages%20at%20Palmnest%20Resort.";

const message = `Greeting from the Palmnest Farm Resort
Thank you for your enquiry through our website.
We’re delighted to know about your interest in staying with us. Please share your preferred check-in and check-out dates, number of guests, and room requirements so we can assist you with the best available options and packages 
We look forward to hosting you and making your stay a memorable one!
Regards,
Team Palmnest Farm Resort`;

const WHATSAPP_URL = `https://wa.me/+919579976241?text=${encodeURIComponent(message)}`;

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
