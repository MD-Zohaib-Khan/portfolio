"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zohaibtheprogrammer@gmail.com",
      link: "#",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 330 4283983",
      link: "#",
      description: "Mon–Sat, 9am–6pm",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kohat, KP, Pakistan",
      link: "#",
      description: "Open to remote work",
    },
  ];

  const inputBase =
    "w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder-foreground/30 text-sm transition-all duration-200 outline-none";
  const inputIdle = "border-border";
  const inputFocused = "border-primary ring-2 ring-primary/15";

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* ── Header ── */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border border-border bg-card text-xs font-medium tracking-[0.14em] uppercase text-foreground/50">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for work
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              <span className="text-foreground">Let&apos;s </span>
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-10 bg-linear-to-r from-transparent to-primary/60 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="h-px w-10 bg-linear-to-l from-transparent to-primary/60 rounded-full" />
            </div>

            <p className="text-foreground/55 max-w-xl mx-auto text-base leading-relaxed">
              I&apos;m always open to new projects and opportunities. Whether
              you have a question or just want to say hi — my inbox is always
              open.
            </p>
          </motion.div>

          {/* ── Info Cards ── */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute -bottom-2 -right-1 text-[4rem] font-extrabold text-foreground/4 leading-none select-none pointer-events-none">
                  0{index + 1}
                </span>

                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon
                    className="w-4.5 h-4.5 text-primary"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/40 mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                  <p className="text-xs text-foreground/40 mt-0.5">
                    {info.description}
                  </p>
                </div>

                <ArrowUpRight className="absolute top-4 right-4 w-3.5 h-3.5 text-foreground/20 group-hover:text-primary/60 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* ── Form ── */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-7 sm:p-9 shadow-sm hover:border-primary/30 transition-all duration-300">
              {/* Form header */}
              <div className="mb-7 pb-6 border-b border-border">
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  Send a Message
                </h3>
                <p className="text-sm text-foreground/45 mt-1">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-foreground/60 mb-1.5 uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      className={`${inputBase} ${focused === "name" ? inputFocused : inputIdle}`}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-foreground/60 mb-1.5 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      className={`${inputBase} ${focused === "email" ? inputFocused : inputIdle}`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-wide text-foreground/60 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder="Project inquiry"
                    className={`${inputBase} ${focused === "subject" ? inputFocused : inputIdle}`}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label className="block text-xs font-semibold tracking-wide text-foreground/60 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project…"
                    rows={5}
                    className={`${inputBase} resize-none ${focused === "message" ? inputFocused : inputIdle}`}
                    required
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={!isSubmitted ? { scale: 1.015 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.975 } : {}}
                  disabled={isSubmitted}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 cursor-default"
                      : "bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" strokeWidth={2} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
