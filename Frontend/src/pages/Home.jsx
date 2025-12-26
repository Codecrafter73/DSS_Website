import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients } from "../data/clients";
import { useGetAllGalleryQuery } from "../api/gallery.api";
import {
  Play,
  ArrowRight,
  Monitor,
  Zap,
  Globe,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Award,
  Users,
  Shield,
  Calendar,
  Building,
  Quote,
  Clock,
  Tag,
  ExternalLink,
  FileText,
  PencilRuler,
  Building2,
  BadgeCheck,
  Truck,
  Wrench,
  Palette,
  Phone,
  MessageCircle,
} from "lucide-react";
import Stats from "./stats";
import HowWeWork from "../components/HowWeWork";
import TextMarquee from "../components/TextMarquee";
import WhyChooseUs from "../components/WhyChooseUs";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ================= HERO SECTION (UPDATED PADDING) =================
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      data-animate
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-green-500 rounded-full blur-3xl"
          style={{
            top: "20%",
            left: mousePosition.x * 0.02 + "%",
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"
          style={{
            bottom: "20%",
            right: mousePosition.y * 0.02 + "%",
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] pointer-events-none" />

      {/* Content - PADDING INCREASED HERE (pt-36 md:pt-32) */}
      <div className="relative z-10 w-full px-4 pt-36 pb-12 md:pt-32">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6 md:mb-8">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
            <span className="text-xs md:text-sm text-gray-300">
              18+ Years of Excellence
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black ">
            <span className="block text-white ">Transform Brand</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-gradient-x">
              With Digital Signage
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed px-2">
            Leading digital signage solutions in Uttar Pradesh. Cutting-edge LED
            displays, interactive solutions, and complete branding.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full max-w-md mx-auto sm:max-w-none">
            <button
              className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

// ================= ABOUT SECTION =================
const AboutSection = () => {
  return (
    <section
      id="about"
      data-animate
      className="relative bg-black  px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              DSS UP
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 ">
          <div className="space-y-6">
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl text-center md:text-left">
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Established in <strong className="text-green-400">2006</strong>, in the City of Nawabs – Lucknow,
                <strong className="text-white">
                  {" "}
                  3S Digital Signage Solutions UP
                </strong>{" "}
               has emerged as one of the region’s leading providers of customized digital signage and branding solutions. With over 18 years of experience and a clientele of more than 2000 satisfied clients, we’ve consistently delivered impactful visual communication across diverse industries. From humble beginnings, we've grown into a trusted name in digital display technology, driving innovation and transforming how businesses connect with their audiences.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "LED Display Walls",
                "Indoor/Outdoor",
                "Branding",
                "24/7 Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-white/10 rounded-xl"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Shield,
                title: "Trusted Brand",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Users,
                title: "2000+ Clients",
                color: "from-pink-500 to-red-500",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
                  <item.icon
                    className={`w-8 h-8 md:w-12 md:h-12 mb-3 bg-gradient-to-br ${item.color} p-1.5 md:p-2 rounded-xl`}
                  />
                  <h3 className="text-white text-sm md:text-base font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= SERVICES SECTION =================
const ServiceSection = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Outdoor Signage",
      slug: "outdoor-signage",
      desc: "Modern display solutions using advanced LED screens and interactive technology",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
      animation: "slide-up",
    },
    {
      title: "Indoor Signage",
      slug: "indoor-signage",
      desc: "High-brightness indoor & outdoor LED systems for maximum visual impact",
      icon: Zap,
      gradient: "from-green-500 to-teal-500",
      animation: "rotate-scale",
    },
    {
      title: "High Rise Signage",
      slug: "high-rise-signage",
      desc: "In-shop branding, retail displays, events & complete visual identity solutions",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      animation: "flip",
    },
  ];

  return (
    <section
      id="services"
      data-animate
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Elements - Hidden on small screens for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 animate-pulse" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive signage solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - 1 Col Mobile, 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative ${
                service.animation === "slide-up"
                  ? "animate-slide-up"
                  : service.animation === "rotate-scale"
                  ? "animate-rotate-scale"
                  : "animate-flip"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  service.gradient
                } opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-2xl ${
                  hoveredIndex === i ? "scale-110" : "scale-100"
                }`}
              />

              <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500">
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-20 rounded-bl-full`}
                />

                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${service.gradient} mb-4 transition-all duration-500 group-hover:w-full`}
                />
                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>

                <button
                  className="group/btn flex items-center gap-2 text-green-400 transition-all duration-300 group-hover:text-white cursor-pointer"
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  <span className="relative text-sm font-bold">Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .animate-float, .animate-float-delayed { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

// ================= PROJECTS SECTION =================
const ProjectSection = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND;

  const { data: galleryData } = useGetAllGalleryQuery();

  // Transform gallery data into projects format
  const projects =
    galleryData?.data?.map((item, index) => {
      const gradients = [
        "from-blue-500 to-cyan-500",
        "from-green-500 to-teal-500",
        "from-purple-500 to-pink-500",
        "from-orange-500 to-red-500",
        "from-indigo-500 to-blue-500",
        "from-pink-500 to-rose-500",
      ];

      return {
        title: item.category || "Project",
        desc: item.category || "Digital signage installation",
        type: item.category || "SHOWCASE",
        img:
          item.image?.public_url ||
          `${backendUrl}/${item.image?.url}` ||
          "https://picsum.photos/seed/default/900/650",
        gradient: gradients[index % gradients.length],
        _id: item._id,
      };
    }) || [];

  return (
    <section
      id="projects"
      data-animate
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-16 px-4"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of our premium digital signage installations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, 6).map((project, i) => (
            <div
              key={i}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-2xl`}
              />

              <div className="relative h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-[10px] md:text-xs font-semibold`}
                  >
                    {project.type}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 onClick={() => navigate("/projects")} className="text-lg  md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${project.gradient} mb-3 group-hover:w-full transition-all duration-500`}
                  />
                  {/* <p className="text-gray-400 mb-4 text-xs md:text-sm leading-relaxed">
                    {project.desc}
                  </p> */}
                  {/* <button
                    className="flex items-center gap-2 text-green-400 transition-all duration-300 hover:text-white cursor-pointer"
                    
                  >
                    <span className="relative text-xs md:text-sm font-bold">
                      View Details
                    </span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 mx-auto text-sm md:text-base cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            Explore More Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// ================= PROCESS SECTION =================
// const HowWeWork = () => {
//   const steps = [
//     { icon: FileText, title: "Requirement", desc: "Understanding needs" },
//     { icon: Building2, title: "Site Survey", desc: "Analyzing location" },
//     { icon: PencilRuler, title: "Design", desc: "Creating mockups" },
//     { icon: Wrench, title: "Fabrication", desc: "Manufacturing" },
//     { icon: BadgeCheck, title: "QC", desc: "Ensuring standards" },
//     { icon: Truck, title: "Installation", desc: "Professional setup" },
//   ];

//   return (
//     <section
//       id="process"
//       data-animate
//       className="relative bg-black py-12 md:py-16 px-4"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
//             Our Process
//           </h2>
//           <div className="w-24 h-1 bg-green-500 mx-auto" />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {steps.map((step, i) => (
//             <div key={i} className="relative group">
//               <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
//                 {i + 1}
//               </div>
//               <div className="h-full p-6 pt-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
//                 <step.icon className="w-8 h-8 md:w-10 md:h-10 text-green-400 mb-3" />
//                 <h3 className="text-lg md:text-xl font-bold text-white mb-1">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{step.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// ================= CLIENT SECTION (OPTIMIZED MARQUEE) =================
const ClientSection = () => {
  return (
    <section
      id="clients"
      data-animate
      className="relative bg-black py-12 md:py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Our Clients
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Trusted by leading brands
          </p>
        </div> */}
              {/* Header */}
      <div className="container mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Clients</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4"></div>
      </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2} // Reduced for mobile
            loop={true}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="client-swiper py-4"
          >
            {clients.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-square p-4 bg-white/5 border border-white/40 rounded-xl flex items-center justify-center group hover:bg-white/10 transition-all">
                  {/* Updated Image Class for Hover Color Effect */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain  transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{` .client-swiper .swiper-wrapper { transition-timing-function: linear !important; } `}</style>
    </section>
  );
};

// ================= TESTIMONIALS SECTION =================
const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Outstanding outdoor signage work!",
      name: "Rohit Sharma",
      role: "Retail Owner",
      img: "https://picsum.photos/seed/t1/100",
    },
    {
      quote: "Boosted our customer engagement.",
      name: "Priya Verma",
      role: "Manager",
      img: "https://picsum.photos/seed/t2/100",
    },
    {
      quote: "Excellent finishing & professional.",
      name: "Arjun Mehta",
      role: "Supervisor",
      img: "https://picsum.photos/seed/t3/100",
    },
    {
      quote: "Increased walk-ins significantly.",
      name: "Neha Kapoor",
      role: "Marketing",
      img: "https://picsum.photos/seed/t4/100",
    },
  ];

  return (
    <section
      id="testimonials"
      data-animate
      className="relative bg-black pt-12  px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Testimonials
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            What our clients say
          </p>
        </div> */}
      {/* Header */}
      <div className="container mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
         What our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">clients say</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4"></div>
      </div>
        {/* --- SECTION 2: Google Reviews Widget --- */}
        <div className="pb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <MessageCircle className="text-blue-400" /> Google Reviews
            </h2>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
              Live Feed
            </div>
          </div>

          {/* Iframe Container */}
          <div className="w-full min-h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://widgets.sociablekit.com/google-reviews/iframe/25594313"
              className="w-full h-[800px] border-0"
              title="Google Reviews"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= CUSTOM CURSOR (DESKTOP ONLY) =================
const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const updateHoverState = (e) =>
      setIsHovering(!!e.target.closest("a, button, input"));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", updateHoverState);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", updateHoverState);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>{` * { cursor: none !important; } `}</style>
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2 ${
          isHovering ? "border-green-400 bg-green-400/10" : "border-white/50"
        } ${isClicking ? "scale-75" : "scale-100"}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHovering ? "50px" : "40px",
          height: isHovering ? "50px" : "40px",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, transform 0.1s",
        }}
      />
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full ${
          isHovering ? "bg-green-400 scale-150" : "bg-white"
        }`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

// ================= MAIN COMPONENT =================
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        const sections = document.querySelectorAll("section[data-animate]");
        sections.forEach((sec) => {
          gsap.fromTo(
            sec,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      } else {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        document.querySelectorAll("[data-animate]").forEach((sec) => {
          sec.style.opacity = "1";
          sec.style.transform = "none";
        });
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-green-500/30">
      {!isMobile && <CustomCursor />}
      <HeroSection />
      <AboutSection />
      <Stats/>
      <ServiceSection />
      <ProjectSection />
      <HowWeWork />
 <WhyChooseUs/>
      <ClientSection />

      <TestimonialSection />
    

      {/* ULTRA PREMIUM CTA SECTION */}
      {/* <div className="relative py-16 md:py-24 px-4 overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-gray-300">
              Trusted by 200+ Businesses
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              Transform
            </span>{" "}
            <br className="hidden md:block" /> Your Brand?
          </h2>

          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Let's discuss how our digital signage solutions can elevate your
            business presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            <button
              onClick={() => (window.location.href = "tel:+916386901011")}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-green-400" />
              <span>+91-6386901011</span>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
