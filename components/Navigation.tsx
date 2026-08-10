"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active Section Scroll Spy
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
    >
      <div
        className={`w-full max-w-[97vw] xl:max-w-7xl transition-all duration-500 rounded-b-2xl px-6 py-2.5 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-x border-b border-emerald-500/30 shadow-2xl shadow-emerald-950/50"
            : "bg-slate-900/70 backdrop-blur-md border-x border-b border-white/10 shadow-xl"
        }`}
      >
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-emerald-500/40 group-hover:ring-emerald-400 shadow-md transition-all duration-300">
              <Image
                src="https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/Zohaib's Logo.png"
                alt="Zohaib Khan logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              ZK<span className="text-emerald-400">.</span>
            </span>
          </motion.button>

          {/* Desktop Navigation with Active Section Highlight */}
          <div className="hidden md:flex items-center gap-1.5 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredId === item.id;

              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-300 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {/* Active Section Animated Glowing Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-emerald-500/20 border border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.35)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover Pill (when not active) */}
                  {!isActive && isHovered && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-400/15 to-indigo-500/15 border border-emerald-500/25"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 rounded-full shadow-md hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-emerald-500/20 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-emerald-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-emerald-400" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-4 shadow-2xl z-50"
          >
            <div className="space-y-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 font-semibold"
                        : "text-slate-200 hover:text-white hover:bg-emerald-500/15"
                    }`}
                  >
                    {item.label}
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-emerald-400/50"}`} />
                  </motion.button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 rounded-xl text-center shadow-md"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

