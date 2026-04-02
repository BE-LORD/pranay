import { useState, useEffect } from "react";
import { MapPin, Phone, Star, MessageCircle, PhoneCall, ChevronDown } from "lucide-react";

const BASE_WHATSAPP = "https://wa.me/917830735959";
const DEFAULT_MSG =
  "Hi, I would like to know more about your taxi services and tour packages.";

function buildWhatsAppUrl(pickup: string, drop: string) {
  if (pickup.trim() && drop.trim()) {
    const msg = `Hi, I want to book a taxi.\n\nPickup: ${pickup.trim()}\nDrop: ${drop.trim()}\n\nPlease share details and fare.`;
    return `${BASE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }
  if (pickup.trim()) {
    const msg = `Hi, I want to book a taxi.\n\nPickup: ${pickup.trim()}\n\nPlease share details and fare.`;
    return `${BASE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }
  return `${BASE_WHATSAPP}?text=${encodeURIComponent(DEFAULT_MSG)}`;
}

const GENERAL_WHATSAPP = `${BASE_WHATSAPP}?text=${encodeURIComponent(DEFAULT_MSG)}`;

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleBookingClick = () => {
    const url = buildWhatsAppUrl(pickup, drop);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Quick Info Bar */}
      <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] py-2.5 px-4 shimmer">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Jim Corbett & Nainital
            </span>
            <a
              href="tel:+917830735959"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              7830735959
            </a>
          </div>
          <span className="flex items-center gap-1.5 text-[#d4af37] font-medium">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            Trusted Travel Service
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2a2a2a] sticky top-0 z-50 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/logo-new.png"
              alt="Arora Travels"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#d4af37]/30"
            />
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">
                Arora Travels
              </h1>
              <p className="text-[10px] text-[#d4af37] tracking-wider uppercase">
                Jim Corbett & Nainital
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {["Services", "Fleet", "Packages", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-[#d4af37] transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href={GENERAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#c4a030] transition-all duration-300 hidden sm:block btn-shine hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with parallax */}
        <div className="absolute inset-0">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/6a219520-5d9b-4e28-8bf3-aafe831d902d.png"
            alt="Scenic mountain road in Uttarakhand"
            className="w-full h-full object-cover parallax-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0f0f]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#d4af37]/30 rounded-full" style={{ animation: "particle-float-1 8s ease-in-out infinite" }} />
          <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-[#d4af37]/20 rounded-full" style={{ animation: "particle-float-2 10s ease-in-out infinite 1s" }} />
          <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-white/20 rounded-full" style={{ animation: "particle-float-3 7s ease-in-out infinite 2s" }} />
          <div className="absolute top-[60%] right-[30%] w-2.5 h-2.5 bg-[#d4af37]/15 rounded-full" style={{ animation: "particle-float-1 12s ease-in-out infinite 3s" }} />
          <div className="absolute top-[15%] right-[40%] w-1 h-1 bg-white/15 rounded-full" style={{ animation: "particle-float-2 9s ease-in-out infinite 0.5s" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-8 pb-16 text-center">
          <div className={`mb-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#d4af37]/30 mb-6 tracking-wider uppercase hero-animate">
              Premium Travel Partner
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 hero-animate-delay-1">
              Reliable Taxi & Tour Services
              <br />
              <span className="gradient-text-animated">in Jim Corbett & Nainital</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto hero-animate-delay-2">
              Safe, Comfortable & Affordable Travel Solutions
            </p>
          </div>

          {/* Booking Card */}
          <div className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg mx-auto card-3d transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h3 className="text-[#0f0f0f] font-semibold text-lg mb-5">
              Plan Your Journey
            </h3>
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#d4af37]/50 focus-within:bg-gray-50">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 animate-pulse" />
                <input
                  type="text"
                  placeholder="Pickup Location (e.g. Delhi Airport)"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="bg-transparent text-gray-800 placeholder-gray-500 text-sm w-full outline-none"
                />
              </div>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#d4af37]/50 focus-within:bg-gray-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Drop Location (e.g. Jim Corbett)"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="bg-transparent text-gray-800 placeholder-gray-500 text-sm w-full outline-none"
                />
              </div>
            </div>
            <button
              onClick={handleBookingClick}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold w-full py-3.5 rounded-xl transition-all duration-300 text-sm cursor-pointer btn-shine hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              Get Details on WhatsApp
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className={`flex items-center justify-center gap-4 mt-6 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href={GENERAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#d4af37] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#c4a030] transition-all duration-300 text-sm btn-shine hover:shadow-lg hover:shadow-[#d4af37]/30 active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </a>
            <a
              href="tel:+917830735959"
              className="flex items-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm hover:border-white/40 active:scale-[0.97]"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
            <a href="#services" className="inline-flex flex-col items-center text-gray-400 hover:text-[#d4af37] transition-colors">
              <span className="text-xs mb-1">Explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}