import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Shield, IndianRupee, Clock, Heart } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917830735959?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20taxi%20services%20and%20tour%20packages.";

const packages = [
  {
    title: "Uttarakhand Tour Packages",
    description:
      "Explore the beauty of Uttarakhand with our customized tour packages covering all major destinations.",
  },
  {
    title: "Jim Corbett Packages",
    description:
      "Complete Jim Corbett experience including safari, stay, and sightseeing at best prices.",
  },
  {
    title: "Nainital Packages",
    description:
      "Discover the lake city with our curated Nainital tour packages for families and couples.",
  },
];

const galleryImages = [
  { src: "/assets/images/gallery-1.jpeg", alt: "Scenic Uttarakhand" },
  { src: "/assets/images/gallery-2.jpeg", alt: "Mountain views" },
  { src: "/assets/images/gallery-3.jpeg", alt: "Nature trail" },
  { src: "/assets/images/gallery-4.jpeg", alt: "Travel adventure" },
  { src: "/assets/images/gallery-5.jpeg", alt: "Corbett landscape" },
  { src: "/assets/images/gallery-6.jpeg", alt: "Nainital lake" },
  { src: "/assets/images/gallery-7.jpeg", alt: "Mountain road" },
  { src: "/assets/images/gallery-8.jpeg", alt: "Forest trail" },
  { src: "/assets/images/gallery-9.jpeg", alt: "Scenic beauty" },
  { src: "/assets/images/gallery-10.jpeg", alt: "Valley views" },
  { src: "/assets/images/gallery-11.jpeg", alt: "Himalayan peaks" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Trusted Local Service",
    description: "Years of experience serving travelers in Jim Corbett & Nainital region.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Best rates guaranteed.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round the clock service for all your travel needs, any time any day.",
  },
  {
    icon: Heart,
    title: "Comfortable Travel",
    description: "Well-maintained vehicles with experienced and courteous drivers.",
  },
];

export default function PackagesGallery() {
  const packagesRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const trustRef = useScrollAnimation();
  const whyRef = useScrollAnimation();

  return (
    <>
      {/* Tour Packages */}
      <section
        id="packages"
        className="py-20 px-4 relative"
        ref={packagesRef}
      >
        <div className="absolute inset-0 bg-[#141414]" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#d4af37]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Explore
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Tour Packages
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.title}
                className="fade-in-up bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-500 card-3d glow-gold flex flex-col"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="text-white font-semibold text-xl mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {pkg.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#d4af37] text-black font-semibold py-3 rounded-xl hover:bg-[#c4a030] transition-all duration-300 text-sm btn-shine hover:shadow-lg hover:shadow-[#d4af37]/20 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Plan Your Trip
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-[#0f0f0f]" ref={galleryRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Memories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Gallery
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="scale-in gallery-item break-inside-avoid"
                style={{ transitionDelay: `${(i % 4) * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-[#141414] relative" ref={trustRef}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Real Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Happy Customers & Successful Trips
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="fade-in-left gallery-item rounded-2xl overflow-hidden">
              <img
                src="https://mgx-backend-cdn.metadl.com/mgx-backend-1300249583/production/vr55pd/60140a3e52ab4fee8f770f5a119c758d/31639e412d2446fe9ee0dc0747a8c828.jpeg"
                alt="Happy customers"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="fade-in-right gallery-item rounded-2xl overflow-hidden" style={{ transitionDelay: "150ms" }}>
              <img
                src="/assets/images/last-page-image.png"
                alt="Successful trip"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#0f0f0f] relative" ref={whyRef}>
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#d4af37]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Why Choose Us
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="rotate-in text-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#d4af37]/50 transition-all duration-500 card-3d glow-gold"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 bg-[#d4af37]/15 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4af37]/25 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}