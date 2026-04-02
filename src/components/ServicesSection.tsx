import { useCallback, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Car, Map, Hotel, TreePine, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const WHATSAPP_URL =
  "https://wa.me/917830735959?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20taxi%20services%20and%20tour%20packages.";

const services = [
  {
    icon: Car,
    title: "Taxi Service",
    description:
      "Comfortable and reliable taxi services for local and outstation travel across Uttarakhand.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-03-18/c918f4a4-1c55-4042-8693-a778c33ab246.png",
  },
  {
    icon: Map,
    title: "Tour Packages",
    description:
      "Customized tour packages for Jim Corbett, Nainital, and all Uttarakhand destinations.",
    image: "/assets/images/nainital-lake.jpg",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "Best hotel deals in Jim Corbett and Nainital at affordable prices with premium comfort.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-03-18/f9f76a9d-ccdb-406f-a25b-fc395d14458f.png",
  },
  {
    icon: TreePine,
    title: "Jungle Safari",
    description:
      "Experience thrilling jungle safaris in Jim Corbett National Park with expert guides.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-03-18/d9327f46-8e8e-4265-a562-9fd8616dd71c.png",
  },
];

const popularServices = [
  {
    title: "Jim Corbett Jungle Safari",
    badge: "Most Popular",
    description: "Experience wildlife up close in India's oldest national park",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-03-18/d9327f46-8e8e-4265-a562-9fd8616dd71c.png",
  },
  {
    title: "Delhi Airport Pickup & Drop",
    badge: "Best Value",
    description: "Hassle-free airport transfers with comfortable vehicles",
    image: "/assets/images/delhi-airport-pickup.jpeg",
  },
  {
    title: "Nainital Round Trip",
    badge: "Trending",
    description: "Complete Nainital sightseeing with experienced local drivers",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/e170e0e9-b8f2-4289-98ae-0cd57e86d30b.png",
  },
];

const fleet = [
  {
    name: "SUV Cars",
    description: "Spacious and powerful for mountain roads. Perfect for family trips.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/f196f329-d16b-4aa7-8aef-bbc548bb5b36.png",
    capacity: "6-7 Seater",
  },
  {
    name: "Sedan Cars",
    description: "Comfortable and fuel-efficient for city and highway travel.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/b49eddfc-2fa5-4971-94bb-c363cce47536.png",
    capacity: "4 Seater",
  },
  {
    name: "Safari Gypsy",
    description: "Open-top 4x4 for the ultimate jungle safari experience.",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1039218/2026-04-01/f51b367c-fb7b-4558-b865-e9748c878619.png",
    capacity: "6 Seater",
  },
];

export default function ServicesSection() {
  const servicesRef = useScrollAnimation();
  const popularRef = useScrollAnimation();
  const fleetRef = useScrollAnimation();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#0f0f0f] relative" ref={servicesRef}>
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Services
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <a
                key={service.title}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-in-up group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 card-3d glow-gold"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 bg-[#d4af37]/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#d4af37]/25 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services - Auto Sliding Carousel */}
      <section className="py-20 px-4 bg-[#141414] relative overflow-hidden" ref={popularRef}>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Top Picks
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Popular Services
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          {/* Embla Carousel */}
          <div className="fade-in-up">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {popularServices.map((item, i) => (
                  <a
                    key={item.title}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-w-[300px] sm:min-w-[340px] flex-shrink-0 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 card-3d glow-gold"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-3 left-3 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.description}
                      </p>
                      <span className="text-[#d4af37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Enquire Now <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {popularServices.map((_, i) => (
                <button
                  key={i}
                  className={`embla-dot ${selectedIndex === i ? "active" : ""}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 px-4 bg-[#0f0f0f] relative" ref={fleetRef}>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#d4af37]/[0.02] rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
              Our Vehicles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Fleet
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map((vehicle, i) => (
              <div
                key={vehicle.name}
                className="fade-in-up group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 card-3d glow-gold"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="h-52 overflow-hidden bg-[#111]">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">
                      {vehicle.name}
                    </h3>
                    <span className="text-[#d4af37] text-xs font-medium bg-[#d4af37]/10 px-3 py-1 rounded-full">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}