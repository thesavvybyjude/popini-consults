"use client";

import { motion } from "framer-motion";
import { Hexagon, ShieldCheck, Lightbulb, Landmark } from "lucide-react";

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

    const process = [
        { title: "Concept", desc: "Site analysis & spatial strategy" },
        { title: "Form & Massing", desc: "Volumetric exploration" },
        { title: "Materiality", desc: "Palette & detailing" },
        { title: "Documentation", desc: "Technical specifications" },
        { title: "Execution", desc: "Construction & delivery" }
    ];

    const team = [
        { name: "David Popini", role: "Principal Architect", bio: "With over 15 years in luxury residential and sustainable commercial design, David leads the creative direction.", credentials: "M.Arch, RIBA, ARCON" },
        { name: "Sarah Okafor", role: "Head of Urban Strategy", bio: "Sarah integrates structural complexities with human-centric urban planning principles.", credentials: "MSc Urban Design" },
        { name: "Michael Adeyemi", role: "Lead Interior Architect", bio: "Specializing in spatial fluidity, Michael bridges the gap between the building envelope and human experience.", credentials: "BA Interior Architecture" }
    ];

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

            {/* Design Philosophy & Process Storytelling */}
            <section className="py-32 bg-[var(--color-brand-soft)] relative overflow-hidden">
                {/* Subtle blueprint grid overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2a2a72 1px, transparent 1px), linear-gradient(90deg, #2a2a72 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container px-6 md:px-12 mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">Our Architectural Narrative</h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                                We approach every site as a unique dialogue between environment and inhabitation. Our methodology is rooted in absolute clarity of form, rational spatial organization, and rigorous environmental integration.
                            </p>
                            <ul className="space-y-4 text-gray-700 font-light">
                                <li className="flex gap-3"><span className="text-[var(--color-brand-sky)]">01.</span> <strong>Form & Massing:</strong> Utilizing volumetric hierarchy to articulate building utility and context.</li>
                                <li className="flex gap-3"><span className="text-[var(--color-brand-sky)]">02.</span> <strong>Material Palette:</strong> Selecting honest, durable materials that age gracefully within the African climate.</li>
                                <li className="flex gap-3"><span className="text-[var(--color-brand-sky)]">03.</span> <strong>Circulation:</strong> Choreographing intuitive movement through spatial compression and release.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-7 bg-white p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center relative group overflow-hidden"
                        >
                            {/* Abstract diagram graphic */}
                            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105">
                                <div className="w-full h-full opacity-50 border-[0.5px] border-gray-300 relative px-4">
                                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-[0.5px] border-gray-400 rotate-12 transition-transform duration-700 group-hover:rotate-0" />
                                    <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[var(--color-brand-sky)]/10" />
                                    <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-gray-300" />
                                </div>
                            </div>
                            <div className="relative z-10 text-center">
                                <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-2">Concept Diagram</p>
                                <p className="text-xl font-heading text-[var(--color-brand-charcoal)]">Spatial Hierarchy & Solar Orientation</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-3xl font-heading font-bold text-[var(--color-brand-charcoal)]">The Masterplan Process</h3>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-6xl mx-auto pb-16"
                    >
                        {process.map((step, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="flex flex-col md:flex-row items-center w-full md:w-auto relative group">
                                <div className="flex flex-col items-center z-10 relative">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100 group-hover:border-[var(--color-brand-gold)] transition-colors mb-4 relative z-20">
                                        <span className="font-heading font-bold text-[var(--color-brand-charcoal)]">{idx + 1}</span>
                                    </div>
                                    <div className="text-center absolute top-20 md:top-24 w-40 left-1/2 -translate-x-1/2">
                                        <h4 className="font-heading font-semibold text-[var(--color-brand-charcoal)] text-sm">{step.title}</h4>
                                        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">{step.desc}</p>
                                    </div>
                                </div>
                                {idx < process.length - 1 && (
                                    <div className="hidden md:block h-[1px] w-full bg-gray-300 mx-4 flex-1 min-w-[30px] self-start mt-10 relative overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full w-full bg-[var(--color-brand-sky)] origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Expertise & Team */}
            <section className="py-32">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 md:flex justify-between items-end"
                    >
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">Expertise & Team</h2>
                            <p className="text-gray-600 font-light text-lg">
                                Our interdisciplinary approach unites engineering precision, landscape integration, and urban planning under singular architectural visions.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-default"
                            >
                                <div className="aspect-[3/4] bg-gray-100 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    {/* Placeholder for portrait photos */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:text-gray-400 transition-colors">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-1">{member.name}</h3>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                                    <p className="text-[var(--color-brand-sky)] font-medium text-sm">{member.role}</p>
                                    <p className="text-xs text-gray-400 tracking-wider font-semibold">{member.credentials}</p>
                                </div>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
