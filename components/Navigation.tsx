"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    // Wait for the mobile menu's collapse animation to finish before
    // scrolling — running both animations at once causes scrollIntoView
    // to get interrupted/cancelled on mobile browsers.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); // matches the mobile menu's transition duration (0.25s) + buffer
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 flex justify-center px-4"
    >
      <div
        className={`w-full max-w-6xl transition-all duration-300 rounded-2xl ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border border-border shadow-lg shadow-black/20"
            : "bg-background/30 backdrop-blur-md border border-transparent"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all duration-300">
                <Image
                  src="/Zohaib's Logo.png"
                  alt="Zohaib Khan logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="hidden sm:block text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                ZK <span className="text-emerald-400">.</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {hoveredId === item.id && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500/15 via-teal-400/15 to-indigo-500/15 border border-emerald-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
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
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="px-3 py-3 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-emerald-500/10 transition-colors"
                  >
                    {item.label}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
