"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setActiveImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }

      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const projects = [
    {
      title: "Totality Software",
      description:
        "Enterprise debt collection platform with tickler queues, automations, and Stripe integration.",
      image: "💰",
      tags: ["React", "TypeScript", "MongoDB", "Prisma", "Stripe"],
      links: { demo: "#", github: "https://github.com/MD-Zohaib-Khan" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality3.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality4.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality5.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/totality6.png",
      ],
    },
    {
      title: "Campus Management System",
      description:
        "A complete role based Campus Management System for universities and colleges.",
      image: "🎓",
      tags: ["React", "JavaScript", "Node.js", "Express", "SQL Server"],
      links: { demo: "#", github: "#" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS3.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS4.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS5.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS6.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/CMS7.png",
      ],
    },
    {
      title: "Explore GPGC",
      description:
        "An exploring portal for my graduation college, Government PostGraduate College Kohat.",
      image: "📚",
      tags: ["React", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
      links: { demo: "#", github: "#" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc3.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc4.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc5.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc6.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc7.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc8.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc9.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/gpgc10.png",
      ],
    },
    {
      title: "Pakistani Law RAG Agent",
      description:
        "AI chat agent specialized in Pakistani law using a Cohere-embedding RAG pipeline with Groq and Gemini LLMs.",
      image: "⚖️",
      tags: ["n8n", "Supabase", "Groq", "Gemini", "Lovable"],
      links: { demo: "#", github: "#" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/law1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/law2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/law3.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/law4.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/law5.png",
      ],
    },
    {
      title: "Social Media Trends Tracker",
      description:
        "A 16-node automation pipeline tracking trends across Reddit, X, and Instagram with AI summaries and auto-publishing.",
      image: "📈",
      tags: ["n8n", "Claude AI", "API Integration", "Automation"],
      links: { demo: "#", github: "#" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/trend1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/trend2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/trend3.png",
      ],
    },
    {
      title: "YouTube Video Data Extractor",
      description:
        "Automated workflow extracting metadata and transcripts to generate AI summaries and key learning points.",
      image: "🎥",
      tags: ["n8n", "Apify", "Groq LLM", "Airtable", "G-Mail"],
      links: { demo: "#", github: "#" },
      gallery: [
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/yt1.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/yt2.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/yt3.png",
        "https://pub-fa26f07d70dc487b8fbe653d6ddebc87.r2.dev/projects/yt4.png",
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Featured </span>
                <span className="bg-linear-to-r from-emerald-500 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>

              <div className="h-1 w-20 bg-linear-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full" />
            </motion.div>

            {/* Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => openModal(project)}
                  className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Image Area */}
                  <div className="relative h-52 bg-linear-to-br from-emerald-500/20 via-teal-400/20 to-indigo-500/20 flex items-center justify-center overflow-hidden">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity"
                    >
                      {project.image}
                    </motion.span>

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wide">
                        View Project
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/60 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-sky-500/15 text-sky-400 text-xs rounded-full font-medium border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-600 text-emerald-400 hover:text-emerald-100 rounded-lg transition-all font-semibold text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.button>

                      <motion.a
                        href={project.links.github}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border hover:border-emerald-500 text-foreground hover:text-emerald-500 rounded-lg transition-all font-semibold text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-999 bg-black/70 backdrop-blur-md flex items-center justify-center overflow-y-auto lg:overflow-hidden px-4 py-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl lg:max-h-[92vh] lg:overflow-y-auto"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image — clean, no text overlay, never cropped */}
              <div className="relative h-56 sm:h-80 lg:h-96 w-full overflow-hidden bg-black/40">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={selectedProject.gallery[activeImage]}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Subtle bottom fade only — no text sits on it anymore */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />

                {/* Navigation */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                      {activeImage + 1} / {selectedProject.gallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Section — title, tags & description live here now */}
              <div className="p-5 sm:p-8">
                <h2 className="font-heading text-xl sm:text-3xl font-bold text-foreground mb-3">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/20 text-sky-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                {/* Thumbnails */}
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {selectedProject.gallery.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative min-w-22.5 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeImage === idx
                          ? "border-primary scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
