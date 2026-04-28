import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/+919579976241?text=Hi,%20I’d%20like%20to%20check%20room%20availability%20and%20current%20packages%20at%20Palmnest%20Resort.";

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
