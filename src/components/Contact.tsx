"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = personal.socials.email;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Opens the visitor's mail app with the message pre-filled, so nothing is silently lost.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const channels = [
    { label: "LinkedIn", value: "in/cheamnorakpanha", href: personal.socials.linkedin },
    { label: "GitHub", value: "@cheamnorakpanha", href: personal.socials.github },
    { label: "Location", value: contact.location },
    { label: "Status", value: contact.availability },
  ];

  return (
    <section id="contact" className="grid-paper text-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          label="Contact"
          title={contact.heading}
          highlight={contact.headingHighlight}
          aside={contact.description}
        />

        {/* Email slab */}
        <Reveal className="brut brut-shadow bg-signal text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="min-w-0">
            <p className="label">Write to</p>
            <a
              href={personal.socials.email}
              className="display normal-case block mt-2 text-[clamp(1.75rem,6vw,4.5rem)] [overflow-wrap:anywhere] hover:underline decoration-[3px] underline-offset-8"
            >
              {personal.email}
            </a>
          </div>
          <button type="button" onClick={copyEmail} className="brut-btn bg-white text-ink self-start lg:self-auto shrink-0">
            {copied ? <Check className="h-4 w-4" strokeWidth={3} /> : <Copy className="h-4 w-4" strokeWidth={3} />}
            <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
          </button>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Channels */}
          <Reveal className="lg:col-span-5 brut brut-shadow bg-white self-start w-full">
            <h3 className="label bg-ink text-paper px-4 py-3">Channels</h3>
            <dl>
              {channels.map((c) => (
                <div key={c.label} className="grid grid-cols-3 border-t-[3px] border-ink">
                  <dt className="label px-4 py-4 bg-paper border-r-[3px] border-ink">{c.label}</dt>
                  <dd className="col-span-2 px-4 py-4 font-semibold">
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 underline-offset-4 hover:bg-signal hover:text-white"
                      >
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.06} className="lg:col-span-7 brut brut-shadow bg-white">
            <h3 className="label bg-ink text-paper px-4 py-3">New_message.txt</h3>
            <form onSubmit={onSubmit} className="p-5 sm:p-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="label block mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="brut-field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="label block mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    className="brut-field"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="label block mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about the project or role…"
                  className="brut-field resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <p className="text-sm text-muted-foreground">Opens your email app with the message ready to send.</p>
                <button type="submit" className="brut-btn bg-signal text-white !px-7 !py-4">
                  Send message <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
