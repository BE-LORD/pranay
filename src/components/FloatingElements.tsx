import { MessageCircle, Phone, Navigation } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917830735959?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20taxi%20services%20and%20tour%20packages.";

const MAPS_URL =
  "https://www.google.com/maps/search/Jim+Corbett+National+Park";

export default function FloatingElements() {
  return (
    <>
      {/* Floating WhatsApp Button - Desktop */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 pulse-green animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#2a2a2a] py-2 px-4">
        <div className="flex items-center justify-around gap-2">
          <a
            href="tel:+917830735959"
            className="flex-1 flex flex-col items-center gap-1 bg-[#d4af37] text-black font-semibold py-2.5 rounded-xl text-xs active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-1 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-1 bg-[#1a1a1a] text-white font-semibold py-2.5 rounded-xl border border-[#2a2a2a] text-xs active:scale-95 transition-transform"
          >
            <Navigation className="w-5 h-5" />
            Directions
          </a>
        </div>
      </div>
    </>
  );
}