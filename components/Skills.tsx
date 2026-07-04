"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skillCategories = [
    {
      title: "AI Automation",
      accent: "emerald",
      iconGradient: "from-emerald-500 to-emerald-300",
      skills: [
        "n8n",
        "AI Agents",
        "RAG Pipelines",
        "LLMs (Claude, OpenAI)",
        "Workflows",
        "Vector DBs",
        "Apify",
      ],
    },
    {
      title: "Development",
      accent: "sky",
      iconGradient: "from-sky-500 to-sky-300",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "Hapi",
        "Mongoose",
        "REST APIs",
        "Prisma",
      ],
    },
    {
      title: "Databases",
      accent: "amber",
      iconGradient: "from-amber-500 to-amber-300",
      skills: [
        "MS SQL Server",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Cassandra",
        "SQLite",
        "Redis",
      ],
    },
    {
      title: "Tools & Platforms",
      accent: "violet",
      iconGradient: "from-violet-500 to-violet-300",
      skills: [
        "Git",
        "GitHub",
        "AWS",
        "Stripe",
        "Postman",
        "Vercel",
        "Supabase",
        "Firebase",
        "Swagger",
      ],
    },
  ];

  // Maps each accent name to concrete Tailwind classes.
  // Using a static lookup (rather than template-literal class names)
  // ensures Tailwind's JIT compiler picks these up at build time.
  const accentStyles: Record<string, { badge: string; iconBg: string }> = {
    emerald: {
      badge:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:shadow-emerald-500/20",
      iconBg: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
    },
    sky: {
      badge:
        "bg-sky-500/10 text-sky-400 border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/20 hover:shadow-sky-500/20",
      iconBg: "bg-sky-500/20 group-hover:bg-sky-500/30",
    },
    amber: {
      badge:
        "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/20 hover:shadow-amber-500/20",
      iconBg: "bg-amber-500/20 group-hover:bg-amber-500/30",
    },
    violet: {
      badge:
        "bg-violet-500/10 text-violet-400 border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/20 hover:shadow-violet-500/20",
      iconBg: "bg-violet-500/20 group-hover:bg-violet-500/30",
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-secondary/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-foreground">Technical </span>
              <span className="bg-linear-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const styles = accentStyles[category.accent];
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-linear-to-r ${category.iconGradient} opacity-20 flex items-center justify-center group-hover:opacity-30 transition-opacity`}
                    />
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:shadow-lg ${styles.badge}`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Proficiency Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              { label: "Projects Completed", value: "25+" },
              { label: "Years Experience", value: "3+" },
              { label: "Team Members Mentored", value: "10+" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-4xl font-bold bg-linear-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent mb-2"
                >
                  {metric.value}
                </motion.p>
                <p className="text-foreground/60 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
