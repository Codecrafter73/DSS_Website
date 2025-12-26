import React, { useState, useEffect, useRef } from "react";
import {
  Quote,
  CheckCircle,
  Star,
  Heart,
  Lightbulb,
  Home,
  ChevronRight,
  Sparkles,
  Building2,
  Monitor,
  Sun,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const DirectorMessage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);

  // --- Mouse Position Logic ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- Animations ---
  useEffect(() => {
    // Hero Fade In
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Scroll Animations for Sections
    const sections = document.querySelectorAll("section[data-animate]");
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // --- Data: 3 Specific Services ---
  const services = [
    {
      id: 1,
      title: "Outdoor Signage",
      subtitle: "Dominating Landscapes",
      desc: "Weather-resistant, high-brightness LED displays designed to capture attention in any environment. From billboards to unipoles.",
      icon: Sun,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop", // Replace with your Outdoor Image
      color: "text-orange-400",
      border: "group-hover:border-orange-500/50",
      bg: "group-hover:bg-orange-500/10",
    },
    {
      id: 2,
      title: "Indoor Signage",
      subtitle: "Immersive Experiences",
      desc: "Pixel-perfect fine-pitch displays for retail, corporate lobbies, and control rooms. Stunning clarity at close viewing distances.",
      icon: Monitor,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", // Replace with your Indoor Image
      color: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      bg: "group-hover:bg-blue-500/10",
    },
    {
      id: 3,
      title: "High Rise Signage",
      subtitle: "Skyline Branding",
      desc: "Engineered for heights. Wind-load tested, ultra-bright rooftop signage that makes your brand visible across the entire city.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Replace with your High Rise Image
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      bg: "group-hover:bg-purple-500/10",
    },
  ];

  // --- Data: Values ---
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Decisions centered around delivering exceptional value.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new tech to stay ahead of industry trends.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description: "Ensuring every project exceeds strict standards.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Star,
      title: "Trust & Integrity",
      description: "Building long-term relationships through transparency.",
      gradient: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden text-white selection:bg-green-500/30">
      {/* --- Global Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]"
            style={{
              top: "-10%",
              left: "20%",
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
            style={{
              bottom: "-10%",
              right: "10%",
              transform: `translate(${-mousePosition.x * 0.02}px, ${
                -mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>
      </div>

      {/* ================= HERO / BREADCRUMB ================= */}
      <div className="relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-12">
        <div className="hero-content max-w-7xl mx-auto px-6 mb-8 flex justify-center">
          <nav className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
            <Link
              to="/"
              className="hover:text-green-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="hover:text-green-400 transition-colors">
              About
            </span>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-medium">Director's Message</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="hero-content text-4xl md:text-6xl font-black mb-6 leading-tight">
            Visionary <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-gradient-x">
              Leadership
            </span>
          </h1>
        </div>
      </div>

      {/* ================= DIRECTOR MESSAGE ================= */}
      <section data-animate className="relative px-4 md:px-6 mb-32 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Quote Backgrounds */}
            <div className="absolute -top-10 -left-6 text-9xl text-white/[0.03] font-serif select-none pointer-events-none">
              "
            </div>

            <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-72 h-72 md:w-96 md:h-96">
                    {/* Glowing Ring */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full border-4 border-white/10 p-2 bg-gray-900 shadow-2xl">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Director"
                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Text */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                    <p>
                      <span className="text-4xl text-green-400 font-serif mr-2 float-left leading-none">
                        "
                      </span>
                      At{" "}
                      <strong className="text-white">
                        3S Digital Signage Solutions
                      </strong>
                      , we believe that every display we create tells a story.
                      Our journey has been shaped by a relentless commitment to
                      quality, trust, and timely delivery.
                    </p>
                    <p>
                      We don't just sell screens; we provide{" "}
                      <span className="text-white font-medium">visibility</span>
                      . Whether it is a massive outdoor unipole facing a highway
                      or a delicate fine-pitch display in a luxury lobby, our
                      engineering standards remain world-class.
                    </p>
                    <p>
                      My promise to you is simple: We will treat your brand's
                      visibility as if it were our own.
                    </p>
                  </div>

                  {/* Signature Block */}
                  <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div>
                      {/* Fake Signature Font */}
                      <div
                        className="text-4xl text-white mb-2 font-handwriting opacity-90"
                        style={{ fontFamily: "cursive" }}
                      >
                        Raj Malhotra
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-green-500"></div>
                        <p className="text-green-400 font-bold text-xs tracking-widest uppercase">
                          Director & Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES (The "Oor Better" Part) ================= */}
      <section data-animate className="relative px-6 py-10 mb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Expertise <span className="text-green-400">Areas</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                We specialize in three key verticals to ensure your brand
                dominates every space.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden md:flex items-center gap-2 text-white hover:text-green-400 transition-colors pb-2 group"
            >
              View All Services{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3-Column Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[500px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/10 ${service.border}`}
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10">
                  {/* Icon floating top right */}
                  <div
                    className={`absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:scale-110 ${service.bg} ${service.color}`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Text Details */}
                  <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p
                      className={`text-sm font-bold tracking-wider uppercase mb-2 ${service.color}`}
                    >
                      0{index + 1} — {service.subtitle}
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {service.desc}
                    </p>

                    {/* Arrow Button appearing on hover */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-200">
                      Explore Solution <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section
        data-animate
        className="relative px-6 py-20 bg-white/[0.02] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-gray-900 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
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

      {/* Custom Styles */}
      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
};

export default DirectorMessage;
