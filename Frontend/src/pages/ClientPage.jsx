import React, { useState, useEffect } from "react";
import CountUp from "../components/CountUp";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Users,
  Handshake,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image Imports
import { clients } from "../data/clients";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ClientPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // --- Background Mouse Effect ---
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
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Grid Stagger
    gsap.fromTo(
      ".client-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".client-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

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

      <div className="relative z-10 pt-32 pb-12 lg:pt-40 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex justify-center mb-8">
            <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
              <Link
                to="/"
                className="hover:text-green-400 flex items-center gap-1 transition-colors"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-white font-medium">Clients</span>
            </nav>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="hero-animate text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
                Trusted By Industry Leaders
              </span>
            </h1>
            <p className="hero-animate text-gray-400 max-w-2xl mx-auto text-lg mb-12">
              We are proud to partner with visionary companies across various
              sectors, powering their brand presence with our digital solutions.
            </p>

            {/* Stats */}
            <div className="hero-animate grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Users, label: "Happy Clients", val: 200, suffix: "+" },
                {
                  icon: Handshake,
                  label: "Partnerships",
                  val: 50,
                  suffix: "+",
                },
                { icon: Globe, label: "Cities Covered", val: 15, suffix: "+" },
                { icon: Award, label: "Excellence", val: 100, suffix: "%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    <CountUp to={stat.val} duration={2} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Client Grid --- */}
          <div className="client-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-24">
            {clients?.map((client, idx) => (
              <div
                key={idx}
                className="client-card group relative p-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]"
              >
                {/* Logo Container - White Background for Logo Visibility */}
                <div className="bg-white rounded-xl overflow-hidden aspect-square flex items-center justify-center p-4 mb-3 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    loading="lazy"
                    alt={client.name}
                    className="w-full h-full object-contain filter hover:brightness-110 transition-all"
                  />
                </div>

                {/* Client Name */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Ready to join our success story?
            </h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto relative z-10">
              Let's collaborate to elevate your brand visibility with our
              cutting-edge digital signage solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg relative z-10"
            >
              Become a Partner <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
}
