"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const filters = ["All", "Residential", "Commercial", "Institutional", "Concept"];

    const projects = [
        { title: "Luxury Private Residence", location: "Asokoro, Abuja", category: "Residential" },
        { title: "Commercial Office Tower", location: "Victoria Island, Lagos", category: "Commercial" },
        { title: "Mixed‑Use Development", location: "Lekki Phase 1, Lagos", category: "Commercial" },
        { title: "Institutional Complex", location: "Kano", category: "Institutional" },
        { title: "Civic Center Concept", location: "Port Harcourt", category: "Concept" },
        { title: "Contemporary Terraces", location: "Maitama, Abuja", category: "Residential" }
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">
                            Selected Works
                        </h1>
                        <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">
                            A curated portfolio of high-end architectural and strategic developments shaping the African skyline.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Grid */}
            <section className="py-20">
                <div className="container px-6 md:px-12 mx-auto">

                    {/* Filters */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    >
                        {filters.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${filter === f
                                    ? "bg-[var(--color-brand-charcoal)] text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <AnimatePresence>
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="group cursor-pointer block"
                                >
                                    <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative shadow-sm">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                                        {/* Image Placeholder */}
                                        <div className="absolute inset-0 bg-neutral-200 w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-architectural)]" />

                                        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-[var(--color-brand-gold)] font-light tracking-wide">{project.location}</p>
                                        </div>
                                    </div>
                                    <div className="md:hidden">
                                        <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-charcoal)] mb-1">{project.title}</h3>
                                        <p className="text-gray-500 font-light text-sm">{project.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
