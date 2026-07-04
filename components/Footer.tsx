"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MD-Zohaib-Khan",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zohaib-khan-cs/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/iTheZohaibKhan", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:zohaibtheprogrammer@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Full Stack Development",
    "AI Automation",
    "Software Maintenance",
    "Web Design",
    "Consulting",
    "Team Mentoring",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <footer className="relative border-t border-border overflow-hidden bg-card">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-72 h-72 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute -top-24 right-1/4 w-56 h-56 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════
            TOP — brand + columns + newsletter
        ═══════════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 pb-12"
        >
          {/* Brand — 4 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 space-y-5"
          >
            {/* Logo lockup */}
            <div>
              <h3 className="font-heading text-2xl font-extrabold tracking-tight bg-linear-to-r from-emerald-500 to-indigo-400 bg-clip-text text-transparent">
                Zohaib Khan
              </h3>
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-foreground/35 mt-0.5">
                Full Stack & AI Specialist
              </p>
            </div>

            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
              Building innovative web solutions with modern technologies.
              Passionate about crafting exceptional digital experiences.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background text-xs font-medium text-foreground/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.88 }}
                  className="w-9 h-9 rounded-xl border border-border bg-background flex items-center justify-center text-foreground/45 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <s.icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links — 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-4"
          >
            <h4 className="font-heading text-xs font-semibold tracking-[0.14em] uppercase text-foreground/40">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-foreground/55 hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services — 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-4"
          >
            <h4 className="font-heading text-xs font-semibold tracking-[0.14em] uppercase text-foreground/40">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-foreground/55"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter — 4 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 space-y-4"
          >
            <h4 className="font-heading text-xs font-semibold tracking-[0.14em] uppercase text-foreground/40">
              Stay Updated
            </h4>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Get notified about new projects, articles, and insights. No spam,
              ever.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-4 pr-12 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground transition-all hover:opacity-90"
                >
                  <Send className="w-3 h-3" strokeWidth={2} />
                </motion.button>
              </div>

              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-emerald-500 font-medium"
                >
                  ✓ You're subscribed!
                </motion.p>
              )}
            </form>

            {/* Motto */}
            <p className="text-[11px] text-foreground/30 italic pt-1">
              "I, with the We Mentality"
            </p>
          </motion.div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* ═══════════════════════════════════
            BOTTOM bar
        ═══════════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-foreground/35 order-2 sm:order-1"
          >
            © {currentYear} Zohaib Khan. All rights reserved.
          </motion.p>

          {/* Back to top */}
          <motion.button
            variants={itemVariants}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="order-1 sm:order-2 flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-xs font-medium text-foreground/50 hover:text-primary hover:border-primary/40 transition-all duration-200 group"
          >
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </motion.button>

          {/* Made with */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-foreground/35 order-3 flex items-center gap-1"
          >
            Made with
            <span className="text-rose-500 mx-0.5">💖</span>
            by <span className="font-semibold">Zohaib Khan</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
