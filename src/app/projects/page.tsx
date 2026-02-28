"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const filters = ["All", "Residential", "Commercial", "Institutional", "Concept"];

    const projects = [
        {
            title: "Luxury Private Residence",
            location: "Asokoro, Abuja",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "1,200 sqm", status: "Completed 2023", certification: "LEED Gold" },
            description: "The project optimizes solar orientation, daylighting, and spatial hierarchy to enhance occupant comfort and efficiency within a modern tropical context."
        },
        {
            title: "Commercial Office Tower",
            location: "Victoria Island, Lagos",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "15,000 sqm", status: "Ongoing", certification: "EDGE Advanced" },
            description: "A high-performance facade integrating passive cooling strategies, maximizing floor plate efficiency while maintaining structural elegance."
        },
        {
            title: "Mixed‑Use Development",
            location: "Lekki Phase 1, Lagos",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "8,500 sqm", status: "Completed 2022", certification: "BREEAM Excellent" },
            description: "Seamlessly weaving retail, residential, and public realms. Urban massing is broken down to human scale, fostering community interaction."
        },
        {
            title: "Institutional Complex",
            location: "Kano",
            category: "Institutional",
            image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "22,000 sqm", status: "Completed 2024", certification: "LEED Platinum" },
            description: "Drawing inspiration from vernacular architecture, the design employs thermal mass and shaded courtyards for optimal environmental performance."
        },
        {
            title: "Civic Center Concept",
            location: "Port Harcourt",
            category: "Concept",
            image: "https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "5,000 sqm", status: "Concept Phase", certification: "Targeting LEED" },
            description: "A bold exploration of form and materiality. The tectonic expression of the structural grid dictates the spatial organization."
        },
        {
            title: "Contemporary Terraces",
            location: "Maitama, Abuja",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            metrics: { area: "3,200 sqm", status: "Under Construction", certification: "EDGE Target" },
            description: "A study in proportion and privacy. Clean lines define the building envelope, while deep overhangs provide essential solar shading."
        }
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                        className="group cursor-pointer block"
                                    >
                                        <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative shadow-sm">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/80 transition-colors duration-500 z-10" />
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-architectural)]"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                                <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-[var(--color-brand-gold)] font-medium tracking-wide mb-4">{project.location}</p>

                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                                                    <p className="text-gray-300 font-light text-sm mb-6 line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-white/80 border-t border-white/20 pt-4">
                                                        <div><span className="text-white/50 block font-medium uppercase tracking-wider text-[10px]">Area</span> {project.metrics.area}</div>
                                                        <div><span className="text-white/50 block font-medium uppercase tracking-wider text-[10px]">Status</span> {project.metrics.status}</div>
                                                        <div className="col-span-2"><span className="text-white/50 block font-medium uppercase tracking-wider text-[10px]">Sustainability</span> {project.metrics.certification}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:hidden">
                                            <h3 className="text-xl font-heading font-semibold text-[var(--color-brand-charcoal)] mb-1">{project.title}</h3>
                                            <p className="text-gray-500 font-light text-sm mb-2">{project.location}</p>
                                            <p className="text-gray-600 font-light text-sm line-clamp-2">{project.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </section>
        </div>
    );
}
