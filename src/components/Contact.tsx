"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const emailAddress = "cheam.panha168@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 4500);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email Address",
      value: emailAddress,
      action: (
        <button
          onClick={handleCopyEmail}
          className="ml-2 p-1.5 rounded-lg border border-border glass hover:bg-muted transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground"
          title="Copy Email"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      ),
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-accent" />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/cheamnorakpanha",
      href: "https://linkedin.com/in/cheamnorakpanha",
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-foreground" />,
      label: "GitHub Account",
      value: "github.com/cheamnorakpanha",
      href: "https://github.com/cheamnorakpanha",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      label: "Location",
      value: "Phnom Penh, Cambodia",
    },
  ];

  return (
    <section id="contact" className="py-28 relative bg-[#07070a] overflow-hidden">
      {/* Background Ambient Lighting for Glass Refraction */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#e50914]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#e50914]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono tracking-[0.2em] uppercase text-white/90 mb-4">
            <Mail className="h-3.5 w-3.5 text-[#e50914]" />
            DISPATCH &amp; INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
            LET&apos;S ARCHITECT <span className="text-[#e50914]">TOGETHER</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you have a distributed system to engineer, a high-throughput API to build, or an exciting full-stack opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Info Details (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Let&apos;s build something great.
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                Whether you have a project idea, want to talk code, or inquire about open developer opportunities, feel free to drop a message. I usually respond within 24 hours.
              </p>
            </div>

            {/* Contact detail cards */}
            <div className="space-y-3.5 py-2">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel-interactive relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                  <div className="p-3 rounded-xl glass-pill flex-shrink-0 text-[#e50914]">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-[#e50914] transition-colors block truncate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white truncate">
                        {info.value}
                      </p>
                    )}
                  </div>
                  {info.action && info.action}
                </div>
              ))}
            </div>

            {/* Custom vector map styling */}
            <div className="rounded-2xl glass-panel h-44 overflow-hidden relative hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e50914] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e50914]"></span>
                </span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Contact Form Container (Right) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-panel relative overflow-hidden h-full flex flex-col justify-center">
              {/* Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#e50914]" />
                Send a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl glass-input text-white focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl glass-input text-white focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    placeholder="Hello Norakpanha, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl glass-input text-white focus:outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e50914] hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitSuccess ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Dispatch</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Feedback Alert Modal */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 rounded-xl glass-panel border-emerald-500/30 text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Thank you! Your message was submitted successfully.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
