"use client";

import { motion } from "framer-motion";
import { Search, LineChart, Target, Zap, ChevronRight } from "lucide-react";

export default function Consultancy() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const clients = [
        "Property Developers",
        "Real Estate Investors",
        "Corporations",
        "Educational Institutions",
        "Government Agencies"
    ];

    const process = [
        { title: "Research", icon: Search },
        { title: "Analysis", icon: LineChart },
        { title: "Strategy", icon: Target },
        { title: "Implementation Support", icon: Zap }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--color-brand-indigo)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h4 className="text-[var(--color-brand-sky)] font-bold tracking-widest text-sm uppercase mb-6">Strategic Focus</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                            Strategic Design Consultancy for Smart Development
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-8">
                                Clarity, precision, and long‑term value.
                            </h2>
                            <div className="w-20 h-1 bg-[var(--color-brand-gold)] mb-8" />
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-xl text-gray-600 font-light leading-relaxed"
                        >
                            We help developers, investors, and institutions make informed project decisions through expert planning, feasibility analysis, and design strategy.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Who We Serve & Process */}
            <section className="py-24 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* Who We Serve */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3 className="text-2xl font-heading font-bold mb-10 pb-4 border-b border-white/20">Who We Serve</h3>
                            <ul className="flex flex-col gap-6">
                                {clients.map((client, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-lg font-light hover:text-[var(--color-brand-gold)] transition-colors cursor-default">
                                        <ChevronRight className="text-[var(--color-brand-sky)]" size={20} />
                                        {client}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Consulting Process */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3 className="text-2xl font-heading font-bold mb-10 pb-4 border-b border-white/20">Consulting Process</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {process.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="p-6 bg-white/5 border border-white/10 hover:border-[var(--color-brand-sky)] transition-all duration-300"
                                    >
                                        <step.icon className="w-8 h-8 text-[var(--color-brand-sky)] mb-4" strokeWidth={1.5} />
                                        <div className="text-sm text-gray-400 font-medium mb-1">0{idx + 1}</div>
                                        <h4 className="text-lg font-heading font-medium">{step.title}</h4>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
