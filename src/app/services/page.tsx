"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, Network, DraftingCompass, HardHat, FileText, PiggyBank, Target, ShieldAlert, MonitorPlay, LineChart } from "lucide-react";

export default function Services() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const architectureServices = [
        { title: "Architectural Design", icon: Building2 },
        { title: "Master Planning", icon: Network },
        { title: "Interior Architecture", icon: DraftingCompass },
        { title: "3D Visualization & Animation", icon: MonitorPlay },
        { title: "Construction Drawings", icon: FileText },
        { title: "Project Supervision", icon: HardHat },
    ];

    const consultancyServices = [
        { title: "Development Strategy", icon: BriefcaseBusiness },
        { title: "Feasibility Studies", icon: LineChart },
        { title: "Project Advisory", icon: Target },
        { title: "Cost Planning & Control", icon: PiggyBank },
        { title: "Risk Assessment", icon: ShieldAlert },
        { title: "Technical Due Diligence", icon: FileText },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h4 className="text-[var(--color-brand-gold)] font-bold tracking-widest text-sm uppercase mb-6">Expertise</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                            Our Services
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Architectural Services */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-4">Architectural Services</h2>
                        <div className="w-16 h-1 bg-[var(--color-brand-sky)]" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {architectureServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="p-8 border border-gray-100 rounded shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <service.icon className="w-10 h-10 text-[var(--color-brand-indigo)] mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                                <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-charcoal)]">{service.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Consultancy Services */}
            <section className="py-24 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-4">Consultancy Services</h2>
                        <div className="w-16 h-1 bg-[var(--color-brand-gold)]" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {consultancyServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="p-8 bg-white rounded shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                <service.icon className="w-10 h-10 text-[var(--color-brand-charcoal)] mb-6 group-hover:text-[var(--color-brand-gold)] transition-colors duration-300" strokeWidth={1} />
                                <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-charcoal)]">{service.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
