"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Sparkles, Cpu, Layers, Zap, Target, Users, Code2, CheckCircle2 } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-10"
        >

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who I Am</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Architecting the <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Future of Web & AI</span>
            </h2>

            <p className="text-base sm:text-lg text-foreground/70 font-light leading-relaxed">
              Full Stack MERN Developer & AI Automation Specialist dedicated to building high-performance web applications and intelligent autonomous workflows.
            </p>
          </motion.div>

          {/* Main Bento & Portrait Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Premium Profile Portrait Card (4 Columns) */}
            <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col">
              <div className="relative group h-full rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 p-6 shadow-2xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-500">
                {/* Profile Image Frame */}
                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-inner group">
                  <Image
                    src="https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/id_card.jpeg"
                    alt="Zohaib Khan Profile"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Availability Pill */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-300">Available for Work</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white">Zohaib Khan</h3>
                    <p className="text-xs text-emerald-400/90 font-medium">Full Stack MERN & AI Specialist</p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-3">Primary Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "TypeScript", "AI Agents", "RAG", "n8n"].map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Bento Grid (8 Columns) */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              
              {/* Bento Card 1: Main Bio Statement (Spans 2 columns on desktop) */}
              <motion.div variants={itemVariants} className="sm:col-span-2 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-7 shadow-xl hover:border-emerald-500/30 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Crafting High-Impact Digital Experiences</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed font-light">
                  With over <span className="font-semibold text-emerald-400">3+ years of hands-on experience</span>, I bridge complex backend logic with beautiful, responsive frontends. My focus lies at the intersection of modern full-stack web architectures and intelligent AI automations.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom RAG & Autonomous AI Agents</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Scalable Next.js & MERN Applications</span>
                  </div>
                </div>
              </motion.div>

              {/* Bento Card 2: AI & Automation Focus */}
              <motion.div variants={itemVariants} className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 shadow-xl hover:border-emerald-500/30 transition-all duration-300 space-y-3 group">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 w-fit group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">AI & Automation</h4>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                  Building autonomous LLM workflows, vector database embeddings, n8n automations, and custom RAG pipelines to streamline operations.
                </p>
              </motion.div>

              {/* Bento Card 3: Full-Stack Engineering */}
              <motion.div variants={itemVariants} className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 shadow-xl hover:border-emerald-500/30 transition-all duration-300 space-y-3 group">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 w-fit group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Full Stack MERN</h4>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                  Developing robust REST/GraphQL APIs, interactive React/Next.js interfaces, and scalable MongoDB database models.
                </p>
              </motion.div>

              {/* Bento Card 4: Core Mindset & Traits (Spans 2 columns on desktop) */}
              <motion.div variants={itemVariants} className="sm:col-span-2 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 shadow-xl space-y-4">
                <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest">My Working Mindset</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Zap,
                      title: "Fast Learner",
                      desc: "Quickly masters emerging tech & frameworks.",
                      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
                    },
                    {
                      icon: Target,
                      title: "Problem Solver",
                      desc: "Transforms complex logic into simple code.",
                      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                    },
                    {
                      icon: Users,
                      title: "We Mentality",
                      desc: "Driven by team synergy and shared goals.",
                      color: "text-sky-400 bg-sky-500/10 border-sky-500/30",
                    },
                  ].map((trait, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 space-y-2">
                      <div className={`p-2 rounded-xl border w-fit ${trait.color}`}>
                        <trait.icon className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-bold text-white">{trait.title}</h5>
                      <p className="text-xs text-foreground/60 font-light leading-relaxed">{trait.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
