import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Home,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    // Hero Animation
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Staggered Grid Animation
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

  // --- Hardcoded Team Data ---
  const teamMembers = [
    {
      id: 1,
      name: "Ravi Sharma",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Production Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      social: { linkedin: "#", facebook: "#" },
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      role: "Client Relationship Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      id: 5,
      name: "Arjun Mehta",
      role: "Signage Installation Head",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
      social: { linkedin: "#", facebook: "#" },
    },
    {
      id: 6,
      name: "Kavita Iyer",
      role: "Digital Signage Consultant",
      image:
        "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=2070&auto=format&fit=crop",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      id: 7,
      name: "Rahul Singh",
      role: "LED Display Technician",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      id: 8,
      name: "Neha Deshmukh",
      role: "Marketing & Branding",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      social: { linkedin: "#", instagram: "#" },
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

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-12">
        {/* Breadcrumb Pill */}
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
            <span className="text-white font-medium">Our Team</span>
          </nav>
        </div>

        {/* Title */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="hero-content text-4xl md:text-6xl font-black mb-6 leading-tight">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-gradient-x">
              Creative Team
            </span>
          </h1>

          <p className="hero-content text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            A diverse group of innovators, designers, and engineers working
            together to redefine digital experiences.
          </p>
        </div>
      </div>

      {/* ================= TEAM GRID SECTION ================= */}
      <section className="relative px-6 pb-32 z-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80 z-10" />

                  {/* Hover Overlay with Socials */}
                  <div className="absolute inset-0 bg-green-900/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-20 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                    <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <button className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-white font-medium transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      View Profile
                    </p>
                  </div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content - Positioned Absolute Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-3 group-hover:w-20 transition-all duration-300" />
                    <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-green-400 transition-colors">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
};

export default TeamPage;
