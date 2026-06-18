"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const curtainVariants = {
    initial: { x: 0 },
    openLeft: {
      x: "-100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    openRight: {
      x: "100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* 🌈 Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 blur-3xl rounded-full" />

      <div id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="mb-16 text-center md:text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">About </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* 🔥 IMAGE CARD */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative flex justify-center"
              >
                <div className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[320px] sm:h-[360px] md:h-[380px] rounded-3xl p-[2px] bg-gradient-to-br from-primary to-accent">
                  {/* Glass Card */}
                  <div className="relative w-full h-full rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl group">
                    <Image
                      src="/id_card.jpeg"
                      alt="Profile"
                      fill
                      className="object-cover opacity-90 group-hover:scale-110 transition duration-700"
                      priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Floating Motivation Messages */}
                    {[
                      {
                        text: "Build, Learn, Repeat.",
                        style: "top-8 -left-10 group-hover:left-4",
                        delay: 0,
                      },
                      {
                        text: "Code with Purpose",
                        style: "top-16 -right-16 group-hover:right-4",
                        delay: 0.1,
                      },
                      {
                        text: "Think, Create, Solve.",
                        style: "bottom-24 -left-20 group-hover:left-6",
                        delay: 0.2,
                      },
                      {
                        text: "Always Evolving",
                        style: "bottom-16 -right-20 group-hover:right-6",
                        delay: 0.3,
                      },
                      {
                        text: "Ideas → Reality",
                        style:
                          "top-1/2 -translate-y-1/2 -left-24 group-hover:left-2",
                        delay: 0.4,
                      },
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className={`absolute ${msg.style} opacity-0 group-hover:opacity-100 transition-all duration-700 px-4 py-2 rounded-full text-xs font-medium bg-white/10 border border-primary/30 backdrop-blur-md text-white shadow-lg`}
                        style={{ transitionDelay: `${msg.delay}s` }}
                      >
                        <span className="bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                          {msg.text}
                        </span>
                      </div>
                    ))}

                    {/* Glow pulse */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-primary/10 animate-pulse" />

                    {/* Name */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <p className="text-white font-semibold text-lg">
                        Zohaib Khan
                      </p>
                      <p className="text-xs text-white/70">
                        Full Stack & AI Specialist
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-5 -right-1 bg-card border border-primary/30 rounded-xl px-4 py-2 shadow-xl backdrop-blur-md"
                >
                  <p className="text-xs text-primary font-semibold">
                    Available for Work
                  </p>
                </motion.div>
              </motion.div>

              {/* TEXT */}
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I am a results-driven{" "}
                  <span className="font-semibold">
                    Full Stack MERN Developer
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    AI Automation Specialist
                  </span>{" "}
                  with 3+ years of experience building scalable applications and
                  intelligent automated workflows.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  I specialize in designing{" "}
                  <span className="font-semibold">AI Agents</span>,{" "}
                  <span className="font-semibold">RAG Pipelines</span>, and
                  intuitive frontend experiences that actually feel good to use.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Outside coding, I explore new tech, contribute to ideas, and
                  constantly improve my craft.
                </p>

                {/* Feature Cards */}
                <div className="grid gap-4 pt-6">
                  {[
                    {
                      icon: "🚀",
                      title: "Fast Learner",
                      desc: "Quickly adapts to new tech",
                    },
                    {
                      icon: "🎯",
                      title: "Focused",
                      desc: "Solves real problems",
                    },
                    {
                      icon: "🤝",
                      title: "Team Driven",
                      desc: "Strong collaboration mindset",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary/40 transition"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-foreground/60">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
