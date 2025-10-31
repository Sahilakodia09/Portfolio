"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-gray-400">{"<"}</span> SG{" "}
          <span className="text-gray-400">{"/>"}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition ${
                activeSection === item.id
                  ? "bg-white text-black px-4 py-2 rounded-full"
                  : "hover:text-gray-400"
              }`}
            >
              {item.label !== "Contact Me" ? (
                item.label
              ) : (
                <span
                  className={`px-4 py-2 rounded-full transition ${
                    activeSection === item.id
                     
                  }`}
                >
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full ${
                activeSection === item.id
                  ? "bg-white text-black px-4 py-2 rounded-full"
                  : "hover:text-gray-400"
              }`}
            >
              {item.label !== "Contact Me" ? (
                item.label
              ) : (
                <span
                  className={`inline-block px-4 py-2 rounded-full transition ${
                    activeSection === item.id
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
