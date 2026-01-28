
import React from 'react';
import { Headphones } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "6282133279965";
  const message = "Halo admin, saya mau bertanya?";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-soft group"
      aria-label="Chat with Customer Service on WhatsApp"
    >
      <Headphones className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat CS Kami
      </span>
    </a>
  );
};

export default WhatsAppButton;