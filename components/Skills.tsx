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
      color: "from-emerald-500 to-teal-500",
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
      color: "from-primary to-blue-500",
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
      color: "from-purple-500 to-pink-500",
      skills: [
        "MS SQL Server",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Cassandra",
        "SQLite",
        "Redis"
      ],
    },
    {
      title: "Tools & Platforms",
      color: "from-blue-500 to-cyan-500",
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-foreground">Technical </span>
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-linear-to-r ${category.color} opacity-20 flex items-center justify-center group-hover:opacity-30 transition-opacity`}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
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
                      className={`px-4 py-2 bg-linear-to-r ${category.color} bg-clip-text text-transparent border border-primary/30 rounded-full text-sm font-medium hover:border-primary/60 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/20`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
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
                  className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
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
