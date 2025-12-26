import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/DSS_logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About DSS",
      dropdown: [
        { name: "Our Brandstory", path: "/about/story" },
        { name: "Director Message", path: "/about/director-message" },
        { name: "Vision & Mission", path: "/about/vision&mission" },
        { name: "Our Team", path: "/about/team" },
      ],
    },
    {
      name: "Our Services",
      dropdown: [
        { name: "Outdoor Signage", path: "/services/outdoor-signage" },
        { name: "Indoor Signage", path: "/services/indoor-signage" },
        { name: "High Rise Signage", path: "/services/high-rise-signage" },
      ],
    },
    // { name: "Products", path: "/products" },
    { name: "Our Project", path: "/projects" },
    { name: "Clients", path: "/client" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Latest Articles", path: "/blog" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLogoClick = () => navigate("/");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg overflow-visible">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-18 cursor-pointer bg-white"
          onClick={handleLogoClick}
        />

        {/* Desktop NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-white">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-400 transition py-2">
                {item.path ? (
                  <Link to={item.path}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}

                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {item.dropdown && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-xl rounded-lg py-3 w-52 border border-gray-200">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white border-t border-gray-700 py-4 px-4 space-y-3 animate-slideDown max-h-[100vh] overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center py-2 border-b border-white/10"
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-lg">{item.name}</span>
                )}

                {item.dropdown && (
                  <ChevronDown
                    className={`${
                      activeDropdown === index ? "rotate-180" : ""
                    } transition`}
                  />
                )}
              </div>

              {item.dropdown && activeDropdown === index && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-gray-300 hover:text-green-400 transition"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
