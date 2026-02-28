"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Slow Zoom Background Image Placeholder */}
        <motion.div
          className="absolute inset-0 z-0 bg-neutral-900"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Architecture"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-brand-charcoal)]" />
        </motion.div>

        <div className="container relative z-10 px-6 md:px-12 mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight max-w-4xl"
          >
            Designing Spaces.<br />
            <span className="font-bold">Shaping Legacies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mt-8 font-light leading-relaxed"
          >
            Premium architectural design and strategic consultancy for visionary African developments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <Link href="/contact" className="px-8 py-4 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] font-medium hover:bg-white transition-all duration-500 ease-[var(--ease-architectural)] rounded-sm">
              Start Your Project
            </Link>
            <Link href="/consultancy" className="px-8 py-4 bg-transparent border border-white text-white font-medium hover:bg-white hover:text-[var(--color-brand-charcoal)] transition-all duration-500 ease-[var(--ease-architectural)] rounded-sm">
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-[var(--color-brand-soft)]">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { title: "Architecture", desc: "Innovative architectural design, spatial planning, and project execution for residential, commercial, and institutional developments." },
              { title: "Consultancy", desc: "Strategic design advisory, feasibility studies, and development planning for investors, corporations, and institutions." },
              { title: "Project Delivery", desc: "End‑to‑end project coordination from concept to construction with precision and excellence." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-12 rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-gray-50 text-[var(--color-brand-sky)] flex items-center justify-center rounded-full mb-8 group-hover:bg-[var(--color-brand-sky)] group-hover:text-white transition-colors duration-500">
                  <ArrowRight size={20} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-[var(--color-brand-charcoal)] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-white">
        <div className="container px-6 md:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h4 className="text-[var(--color-brand-sky)] font-bold tracking-widest text-sm uppercase mb-6">Who We Are</h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-8">
                Built for Legacy.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-10 max-w-lg">
                POPINI Consults is a Nigerian-based architecture and development consultancy firm delivering world‑class design solutions tailored to Africa&apos;s evolving urban and commercial landscape.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 text-[var(--color-brand-indigo)] font-semibold hover:text-[var(--color-brand-sky)] transition-colors group">
                Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-100 rounded-sm relative overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Architecture Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 bg-[var(--color-brand-charcoal)] text-white">
        <div className="container px-6 md:px-12 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div>
              <h4 className="text-[var(--color-brand-gold)] font-bold tracking-widest text-sm uppercase mb-4">Selected Works</h4>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="px-6 py-3 border border-gray-600 hover:border-white hover:bg-white hover:text-[var(--color-brand-charcoal)] transition-all duration-300">
              View All Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Contemporary Residential Villa", location: "Abuja", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
              { title: "Mixed‑Use Commercial Plaza", location: "Lagos", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" },
              { title: "Corporate Office Complex", location: "Kano", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop" }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group cursor-pointer block"
                >
                  <div className="aspect-[4/5] bg-gray-800 rounded-sm mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-architectural)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-[var(--color-brand-gold)] font-bold tracking-widest text-xs uppercase mb-2">View Project</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-medium mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm font-light">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[var(--color-brand-indigo)]">
        <div className="container px-6 md:px-12 mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to build something remarkable?
            </h2>
            <p className="text-[var(--color-brand-soft)] text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
              Let&apos;s design your next landmark.
            </p>
            <Link href="/contact" className="px-10 py-4 bg-white text-[var(--color-brand-indigo)] font-bold hover:bg-[var(--color-brand-gold)] hover:text-white transition-all duration-300 rounded-sm inline-block shadow-lg">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
