"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

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
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Foreground Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Name and Specialist Title */}
        <motion.div variants={itemVariants} className="mb-6">
          {" "}
          {/* Keep mb-6 for spacing before tagline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Zohaib Khan
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 italic font-medium mt-2">
            Full Stack MERN Developer & AI Automation Specialist
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-foreground/70 mb-8 italic font-light"
        >
          I, with the <span className="text-primary font-bold">We</span>{" "}
          Mentality
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/60 max-w-2.5xl mx-auto mb-12 leading-relaxed"
        >
          Crafting beautiful, performant web experiences and intelligent AI
          automations with modern technologies. I believe in building solutions
          that not only look stunning but also solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-primary text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
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
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full border border-foreground/20 hover:border-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
