"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const experiences = [
    {
      role: "Full Stack Developer & AI Automation",
      company: "Freelance & Professional Projects",
      duration: "2025 - Current",
      description:
        "Designing and deploying AI-powered automation agents using n8n, integrating LLM APIs (Claude, OpenAI, Gemini) and vector databases for complex business workflows.",

      achievements: [
        "Built Totality Software with task queues, deadlines, and debt collection workflows",
        "Deployed AI agents for trend tracking, competitive analysis, and report generation",
        "Integrated Stripe for payments and Supabase for real-time operations",
      ],
    },
    {
      role: "Back-End Developer Intern",
      company: "Brandora, Kohat",
      duration: "Jun 2025 - Present",
      description:
        "Designing RESTful APIs and implementing JWT-based role-based access control (RBAC) for enterprise-level management systems.",

      achievements: [
        "Built secure modules for Campus and Fee Management Systems",
        "Collaborated on seamless frontend-to-backend API integrations",
      ],
    },
    {
      role: "Front-End Developer",
      company: "KUST, Kohat",
      duration: "2024 - May 2025",
      description:
        "Developed reusable React components and interactive dashboards following UX best practices.",

      achievements: [
        "Built responsive interfaces with React, Tailwind CSS, and JQuery",
        "Optimized college portal (Explore GPGC) for better discoverability",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 px-4 sm:px-6 lg:px-8 relative bg-secondary/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-8">

            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-foreground">Professional </span>
              <span className="bg-linear-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-500 via-teal-400 to-emerald-500 transform md:-translate-x-1/2" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-12 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
              >
                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full transform md:-translate-x-1.5 border-4 border-background"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 ml-8 md:ml-0"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sky-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full font-medium whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/60 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                        }
                        transition={{ delay: 0.3 + achIndex * 0.1 }}
                        className="flex gap-3 text-sm text-foreground/70"
                      >
                        <span className="text-primary font-bold mt-1">›</span>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
