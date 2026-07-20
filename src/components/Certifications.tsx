"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck, Briefcase } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  color: string;
}

const certificationsData: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025",
    credentialUrl: "https://aws.amazon.com/",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 2,
    title: "Spring Certified Professional",
    issuer: "VMware",
    date: "Oct 2025",
    credentialUrl: "https://spring.io/",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Advanced Next.js Certification",
    issuer: "Vercel / Next.js",
    date: "Aug 2025",
    credentialUrl: "https://vercel.com/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Award className="h-4 w-4" /> Credentials
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-border overflow-hidden glass flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Graphic Placeholder representation of Certificate */}
              <div
                className={`h-40 bg-gradient-to-br ${cert.color} relative flex items-center justify-center p-6`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="p-4 rounded-full bg-background/80 shadow-lg relative z-10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-10 w-10 text-accent" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-3">
                    <span className="bg-secondary px-2.5 py-0.5 rounded-full border border-border/40 font-bold uppercase tracking-wider text-[10px]">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-6 mt-auto">
                  <a
                    href={cert.credentialUrl}
                    target="_blank; noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-xs font-bold hover:bg-muted transition-all duration-200 cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
