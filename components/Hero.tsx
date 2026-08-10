"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleNetwork from "@/components/ParticleNetwork";

const BACKGROUND_SCROLL_TEXT =
  "Full Stack MERN Developer & AI Automation Specialist ";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="h-screen pt-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Interactive Background Particle Constellation Effect */}
      <ParticleNetwork className="z-0 opacity-80" />

      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-50 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Dynamic Background Text Effect */}
      <div className="absolute top-[35%] left-0 right-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Scroll half the width of the repeated text for a seamless loop
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }} // Adjust duration for speed
          className="whitespace-nowrap text-7xl sm:text-8xl lg:text-9xl font-black text-foreground/[0.07] select-none"
          style={{ width: "200%" }}
        >
          {BACKGROUND_SCROLL_TEXT.repeat(10) +
            BACKGROUND_SCROLL_TEXT.repeat(10)}{" "}
          {/* Duplicate content for seamless loop */}
        </motion.div>
      </div>

      {/* Foreground Content with Frosted Glass Backdrop Blur */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 py-6 sm:px-10 sm:py-8 text-center rounded-3xl backdrop-blur-md bg-background/40 border border-emerald-500/15 shadow-2xl shadow-emerald-500/10"
      >
        {/* Name and Specialist Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-linear-to-r from-emerald-500 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
            Zohaib Khan
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 font-medium mt-1 tracking-[0.10em]">
            Full Stack MERN Developer & AI Automation Specialist
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 mb-4 italic font-light"
        >
          I, with the <span className="text-sky-400 font-bold">We</span>{" "}
          Mentality
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-foreground/60 max-w-2.5xl mx-auto mb-6 leading-relaxed"
        >
          Crafting beautiful, performant web experiences and intelligent AI
          automations with modern technologies. I believe in building solutions
          that not only look stunning but also solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-7 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-7 py-2.5 border border-primary text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links with Premium Radiant Hover Effects & Tooltips */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-4 mb-5"
        >
          {[
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
            {
              icon: Mail,
              href: "mailto:zohaibtheprogrammer@gmail.com",
              label: "Email",
            },
          ].map((social, index) => (
            <div key={index} className="relative group">
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.12, rotate: index % 2 === 0 ? 5 : -5 }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 rounded-xl bg-slate-900/70 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-lg hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-indigo-500/20 hover:shadow-[0_0_25px_rgba(52,211,153,0.45)] transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
              
              {/* Tooltip Popup */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none px-2.5 py-0.5 bg-slate-900/90 text-emerald-300 text-xs font-semibold rounded-md border border-emerald-500/30 shadow-md whitespace-nowrap z-30">
                {social.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator with pulse ring */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About"
            className="p-2.5 rounded-full bg-slate-900/60 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300 group"
          >
            <ArrowDown className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

