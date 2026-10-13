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
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" /> Connect
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Info Details (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Let&apos;s build something great.
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you have a project idea, want to talk code, or inquire about open developer opportunities, feel free to drop a message. I usually respond within 24 hours.
              </p>
            </div>

            {/* Contact detail cards */}
            <div className="space-y-4 py-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border glass shadow-sm"
                >
                  <div className="p-3 rounded-lg bg-secondary/50 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary hover:underline transition-all block truncate"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground truncate">
                        {info.value}
                      </p>
                    )}
                  </div>
                  {info.action && info.action}
                </div>
              ))}
            </div>

            {/* Custom vector map styling (Placeholder) */}
            <div className="rounded-2xl border border-border glass h-44 overflow-hidden relative shadow-sm hidden sm:block bg-grid-pattern">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2">
                <span className="flex h-3.5 w-3.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-foreground">Phnom Penh, KH</span>
              </div>
            </div>
          </div>

          {/* Contact Form Container (Right) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-border glass shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Send a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    placeholder="Hello, I would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/95 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-md shadow-primary/10"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitSuccess ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
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
                    className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2"
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
