import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients } from "../data/clients";
import { useGetAllGalleryQuery } from "../api/gallery.api";
import { useGetAllBlogsQuery } from "../api/blog.api";
import formatDate from "../utils/FormateDate";
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
  CalendarDays,
  BookOpen,
  Hammer,
  Settings,
} from "lucide-react";
import Stats from "./stats";
import ScrollFloat from "../components/ScrollFloat";
import HowWeWork from "../components/HowWeWork";
import TextMarquee from "../components/TextMarquee";
import WhyChooseUs from "../components/WhyChooseUs";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ================= HERO SECTION (UPDATED PADDING) =================
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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
              5+ Years of Excellence
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
            Leading digital signage solutions in India. Cutting-edge LED
            displays, interactive solutions, and complete branding.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full max-w-md mx-auto sm:max-w-none">
            <button
              className="w-full sm:w-auto group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => navigate("/projects")}
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() =>
                window.open("https://youtube.com/@DSSUP", "_blank")
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
    <section id="about" data-animate className="relative bg-black  px-4">
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
                Established in <strong className="text-green-400">2001</strong>,
                in the City of Nawabs – Lucknow,
                <strong className="text-white">
                  {" "}
                  3S Digital Signage Solutions UP
                </strong>{" "}
                has emerged as one of the region's leading providers of
                customized digital signage and branding solutions. With over 18
                years of experience and a clientele of more than 2000 satisfied
                clients, we've consistently delivered impactful visual
                communication across diverse industries. From humble beginnings,
                we've grown into a trusted name in digital display technology,
                driving innovation and transforming how businesses connect with
                their audiences.
              </p>
            </div>
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

// ================= PRODUCTS SECTION =================
const ProductSection = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
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
              Products
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 animate-pulse" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Premium signage products tailored to your business needs
          </p>
        </div>

        {/* Services Grid - 1 Col Mobile, 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className={`group relative ${
                product.animation === "slide-up"
                  ? "animate-slide-up"
                  : product.animation === "rotate-scale"
                  ? "animate-rotate-scale"
                  : "animate-flip"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  product.gradient
                } opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-2xl ${
                  hoveredIndex === i ? "scale-110" : "scale-100"
                }`}
              />

              <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500">
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${product.gradient} opacity-20 rounded-bl-full`}
                />

                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <product.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {product.title}
                </h3>
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${product.gradient} mb-4 transition-all duration-500 group-hover:w-full`}
                />
                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                  {product.desc}
                </p>

                <button
                  className="group/btn flex items-center gap-2 text-green-400 transition-all duration-300 group-hover:text-white cursor-pointer"
                  onClick={() => navigate(`/services/${product.slug}`)}
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

// ================= SERVICES SECTION (NEW) =================
const ServicesSection = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Fabrication",
      slug: "fabrication",
      desc: "Expert metal and material fabrication for custom signage structures with precision engineering",
      icon: Hammer,
      gradient: "from-orange-500 to-red-500",
      features: ["Metal Work", "Custom Designs", "Quality Materials"],
    },
    {
      title: "Installation",
      slug: "installation",
      desc: "Professional installation services ensuring secure and perfect mounting of all signage types",
      icon: Wrench,
      gradient: "from-cyan-500 to-blue-500",
      features: ["Expert Team", "Safe Setup", "Quick Turnaround"],
    },
    {
      title: "Civil Work",
      slug: "civil-work",
      desc: "Complete civil construction and structural work for signage foundations and support systems",
      icon: Building2,
      gradient: "from-emerald-500 to-green-500",
      features: ["Foundation Work", "Structural Support", "Compliance"],
    },
    {
      title: "ACP Work",
      slug: "acp-work",
      desc: "Aluminum Composite Panel cladding and finishing for modern, durable signage solutions",
      icon: Settings,
      gradient: "from-violet-500 to-purple-500",
      features: ["Modern Finish", "Weather Resistant", "Premium Look"],
    },
    {
      title: "Installation Missing",
      slug: "installation-missing",
      desc: "Troubleshooting and completing incomplete or problematic signage installations",
      icon: BadgeCheck,
      gradient: "from-pink-500 to-rose-500",
      features: ["Problem Solving", "Quick Fixes", "Quality Assurance"],
    },
  ];

  return (
    <section
      id="our-services"
      data-animate
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 animate-pulse" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive signage services from fabrication to installation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  service.gradient
                } opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-2xl ${
                  hoveredIndex === i ? "scale-110" : "scale-100"
                }`}
              />

              {/* Card */}
              <div className="relative h-full p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500 hover:border-white/30">
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-20 rounded-bl-full`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Underline */}
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${service.gradient} mb-4 transition-all duration-500 group-hover:w-full`}
                />

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className="group/btn flex items-center gap-2 text-blue-400 transition-all duration-300 group-hover:text-white cursor-pointer"
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  <span className="relative text-sm font-bold">
                    Explore Service
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 mx-auto text-sm md:text-base cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Get Custom Quote
            <Phone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// ================= PROJECTS SECTION =================
const ProjectSection = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
                  <h3
                    onClick={() => navigate("/projects")}
                    className="text-lg  md:text-xl font-bold text-white mb-2 cursor-pointer hover:text-green-400 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${project.gradient} mb-3 group-hover:w-full transition-all duration-500`}
                  />
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

// ================= BLOG SECTION (CAROUSEL WITH AUTOPLAY) =================
const BlogSection = () => {
  const navigate = useNavigate();
  const { data: blogData, isLoading } = useGetAllBlogsQuery();
  const swiperRef = useRef(null);

  if (isLoading) {
    return null; // Don't show section while loading
  }

  if (!blogData?.data || blogData.data.length === 0) {
    return null; // Don't show section if no blogs
  }

  return (
    <section
      id="blog"
      data-animate
      className="relative bg-black py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Latest </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6" />
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital signage
          </p>
        </div>

        {/* Swiper Carousel Container */}
        <div className="relative px-12 md:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={blogData.data.length > 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="blog-carousel !pb-8"
          >
            {blogData.data.map((post) => (
              <SwiperSlide key={post._id}>
                <div className="group h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]">
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10" />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-white">
                      <CalendarDays className="w-3.5 h-3.5 text-green-400" />
                      {formatDate(post?.updatedAt)}
                    </div>

                    <img
                      src={post?.image?.public_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
                        <Tag className="w-3 h-3" />
                        {post?.category || "Technology"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-green-400 transition-colors min-h-[3rem]">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <div className="text-gray-400 text-sm line-clamp-2 mb-4 min-h-[2.5rem]">
                      <div
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      />
                    </div>

                    {/* Read More */}
                    <button
                      onClick={() => navigate(`/blog-detail/${post.slug}`)}
                      className="inline-flex items-center text-sm font-bold text-white group-hover:text-green-400 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/blog")}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all flex items-center gap-2 mx-auto text-sm md:text-base"
          >
            View All Articles
            <BookOpen className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style>{`
        .blog-carousel .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

// ================= CLIENT SECTION (OPTIMIZED MARQUEE) =================
const ClientSection = () => {
  return (
    <section
      id="clients"
      data-animate
      className="relative bg-black py-12 md:py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
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
        {/* Header */}
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            What our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              clients say
            </span>
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
      <Stats />
      <ProductSection />
      <ServicesSection />
      <ProjectSection />
      <HowWeWork />
      <WhyChooseUs />
      <BlogSection />
      <ClientSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
