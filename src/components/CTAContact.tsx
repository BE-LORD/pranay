import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MessageCircle,
  PhoneCall,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917830735959?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20taxi%20services%20and%20tour%20packages.";

export default function CTAContact() {
  const ctaRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#141414] relative overflow-hidden" ref={ctaRef}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#d4af37]/[0.03] rounded-full blur-3xl" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-[#d4af37]/20 rounded-full" style={{ animation: "particle-float-1 10s ease-in-out infinite" }} />
          <div className="absolute bottom-[25%] right-[20%] w-1.5 h-1.5 bg-[#d4af37]/15 rounded-full" style={{ animation: "particle-float-2 8s ease-in-out infinite 2s" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="scale-in">
            <span className="inline-block bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#d4af37]/30 mb-6 tracking-wider uppercase">
              Ready to Travel?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Plan Your Trip Today
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Get in touch with us for the best travel deals in Jim Corbett &
              Nainital. We&apos;re just a message away!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base w-full sm:w-auto justify-center btn-shine hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.97] pulse-green"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
              <a
                href="tel:+917830735959"
                className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#c4a030] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base w-full sm:w-auto justify-center btn-shine hover:shadow-lg hover:shadow-[#d4af37]/30 active:scale-[0.97]"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section id="contact" className="py-20 px-4 bg-[#0f0f0f]" ref={contactRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Reach Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Contact Us
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="fade-in-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 card-3d glow-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/15 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+917830735959"
                      className="text-gray-400 hover:text-[#d4af37] transition-colors block"
                    >
                      +91 7830735959
                    </a>
                  </div>
                </div>
              </div>

              <div className="fade-in-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 card-3d glow-gold" style={{ transitionDelay: "100ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/15 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:aroratravelscorbett@gmail.com"
                      className="text-gray-400 hover:text-[#d4af37] transition-colors block"
                    >
                      aroratravelscorbett@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="fade-in-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 card-3d glow-gold" style={{ transitionDelay: "200ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/15 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      Jim Corbett & Nainital, Uttarakhand, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="fade-in-right rounded-2xl overflow-hidden border border-[#2a2a2a] h-[350px] lg:h-auto" style={{ transitionDelay: "150ms" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111048.08050981498!2d78.9!3d29.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a00a7a6e8e5a5%3A0x2c0e6b0b0b0b0b0b!2sJim+Corbett+National+Park!5e0!3m2!1sen!2sin!4v1711929600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arora Travels Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/d535e5a8-7154-4861-ab42-0603ab600321.png"
                alt="Arora Travels"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#d4af37]/30"
              />
              <div>
                <span className="text-white font-semibold">Arora Travels</span>
                <p className="text-gray-500 text-xs">
                  Jim Corbett & Nainital
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+917830735959"
                className="text-gray-400 hover:text-[#d4af37] transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Arora Travels. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}