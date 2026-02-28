"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, Compass, Award } from "lucide-react";
import Link from "next/link";

export default function Careers() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const perks = [
        { title: "Collaborative Culture", desc: "Work alongside industry-leading architects and strategists.", icon: Users },
        { title: "Innovative Projects", desc: "Contribute to landmark developments across the continent.", icon: Lightbulb },
        { title: "Career Growth", desc: "Tailored mentorship and clear pathways for advancement.", icon: Compass },
        { title: "Design Excellence", desc: "An uncompromising commitment to quality and legacy.", icon: Award }
    ];

    const openings = [
        { role: "Senior Project Architect", type: "Full-Time", location: "Lagos / Hybrid" },
        { role: "Urban Designer", type: "Full-Time", location: "Abuja" },
        { role: "Design Strategist", type: "Contract", location: "Remote" },
        { role: "3D Visualization Artist", type: "Full-Time", location: "Lagos" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="max-w-4xl"
                    >
                        <h4 className="text-[var(--color-brand-indigo)] font-bold tracking-widest text-sm uppercase mb-6">Join The Team</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight">
                            Build the Future with Us.
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Culture & Perks */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 text-[var(--color-brand-charcoal)]">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:w-1/3"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-6">
                                A culture of precision and possibility.
                            </h2>
                            <p className="text-gray-600 font-light leading-relaxed">
                                At POPINI Consults, we seek visionaries who understand that architecture is more than construction—it is legacy. We foster an environment where technical mastery meets artistic freedom.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {perks.map((perk, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="p-8 border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                    <perk.icon className="w-8 h-8 text-[var(--color-brand-sky)] mb-5" strokeWidth={1.5} />
                                    <h3 className="text-xl font-heading font-semibold mb-2">{perk.title}</h3>
                                    <p className="text-gray-500 font-light text-sm">{perk.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto max-w-5xl">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Open Positions</h2>
                            <div className="w-16 h-1 bg-[var(--color-brand-gold)]" />
                        </div>
                        <p className="text-gray-400 font-light">Don&apos;t see a fit? Send your portfolio anyway.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-4"
                    >
                        {openings.map((job, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 bg-white/5 border border-white/10 hover:border-[var(--color-brand-sky)] hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-xl font-heading font-medium mb-2 group-hover:text-[var(--color-brand-sky)] transition-colors">{job.role}</h3>
                                    <div className="flex gap-4 text-sm font-light text-gray-400">
                                        <span>{job.type}</span>
                                        <span>&bull;</span>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-0 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowRight className="text-[var(--color-brand-sky)]" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* General Application CTA */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mt-16 text-center"
                    >
                        <Link href="/contact" className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium hover:bg-white hover:text-[var(--color-brand-charcoal)] transition-all duration-500 ease-[var(--ease-architectural)] rounded-sm">
                            Submit General Application
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
