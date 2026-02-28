"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hexagon, ShieldCheck, Lightbulb, Landmark } from "lucide-react";

export default function About() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const values = [
        { title: "Design Excellence", desc: "World‑class aesthetics and technical mastery.", icon: Hexagon },
        { title: "Integrity", desc: "Transparency, trust, and ethical practice.", icon: ShieldCheck },
        { title: "Innovation", desc: "Forward‑thinking design driven by research and technology.", icon: Lightbulb },
        { title: "Legacy", desc: "We design for generations.", icon: Landmark }
    ];

    const process = ["Concept", "Strategy", "Design", "Documentation", "Delivery"];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h4 className="text-[var(--color-brand-sky)] font-bold tracking-widest text-sm uppercase mb-6">About POPINI Consults</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight">
                            Built for Legacy.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-8">
                                Redefining architectural excellence in Africa.
                            </h2>
                            <div className="w-20 h-1 bg-[var(--color-brand-gold)] mb-8" />
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-lg text-gray-600 font-light leading-relaxed flex flex-col gap-6"
                        >
                            <p>
                                POPINI Consults was founded to redefine architectural excellence and strategic consultancy in Nigeria and Africa. We believe architecture is not merely construction — it is identity, legacy, and long‑term value.
                            </p>
                            <p>
                                We combine technical expertise, artistic vision, and strategic thinking to deliver solutions that stand the test of time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold">Core Values</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="p-8 border border-white/10 hover:border-[var(--color-brand-gold)]/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                            >
                                <v.icon className="w-10 h-10 text-[var(--color-brand-gold)] mb-6" strokeWidth={1.5} />
                                <h3 className="text-xl font-heading font-medium mb-3">{v.title}</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-32 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-charcoal)]">The Design Process</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 max-w-5xl mx-auto"
                    >
                        {process.map((step, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-100 z-10 relative group">
                                    <span className="font-heading font-bold text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-sky)] transition-colors">{step}</span>
                                </div>
                                {idx < process.length - 1 && (
                                    <div className="h-8 md:h-[2px] w-[2px] md:w-full bg-[var(--color-brand-indigo)]/20 my-2 md:my-0 flex-1 min-w-[40px]" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
