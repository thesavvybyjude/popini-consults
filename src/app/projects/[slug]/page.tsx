"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock data store for dynamic routing (in a real app, this would be a CMS fetch)
const PROJECT_DATA: Record<string, any> = {
    "luxury-private-residence": {
        title: "Luxury Private Residence",
        location: "Asokoro, Abuja",
        category: "Residential",
        client: "Private Client",
        year: "2024",
        area: "1,200 sqm",
        description: "A masterclass in tropical modernism, this private residence in Asokoro was designed to harmonize with its natural surroundings while providing uncompromising luxury. The architectural language features expansive overhangs, floor-to-ceiling glazing, and a material palette of off-white concrete, natural timber, and dark steel.",
        challenge: "The primary challenge was negotiating a steep site topography while ensuring seamless indoor-outdoor connectivity and maximizing natural light without excessive solar heat gain.",
        solution: "We implemented a tiered terrace design that cascades down the landscape, creating distinct functional zones. Deep architectural shading devices and high-performance glazing mitigate the harsh afternoon sun while maintaining panoramic views.",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    "commercial-office-tower": {
        title: "Commercial Office Tower",
        location: "Victoria Island, Lagos",
        category: "Commercial",
        client: "Alpha Estates",
        year: "2025",
        area: "18,500 sqm",
        description: "Rising 22 stories above the Lagos skyline, this Grade-A commercial tower represents the next generation of West African corporate architecture. The facade utilizes an intelligent dynamic shading system that adapts to the sun's trajectory.",
        challenge: "Maximizing lettable area on a highly constrained urban footprint while achieving LEED Gold certification status in a challenging climate context.",
        solution: "A highly efficient central core structural strategy paired with an innovative double-skin facade that reduces cooling loads by 34% compared to standard glass towers in the region.",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541888031557-010526e03661?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop"
        ]
    }
};

export default function ProjectDetail() {
    const params = useParams();
    // Ensure slug is a string
    const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || "luxury-private-residence");

    // Fallback to a default project if the slug isn't found in our mock data
    const project = PROJECT_DATA[slug] || PROJECT_DATA["luxury-private-residence"];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Back Navigation Overlay */}
            <div className="pt-32 pb-8 bg-white container px-6 md:px-12 mx-auto">
                <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-brand-charcoal)] transition-colors font-medium text-sm tracking-wide uppercase">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>

            {/* Project Hero Title */}
            <section className="pb-16 bg-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="max-w-5xl"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-500 font-light">
                            <span className="text-[var(--color-brand-indigo)] font-medium">{project.location}</span>
                            <span className="hidden sm:inline">&bull;</span>
                            <span>{project.category}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Hero Image */}
            <motion.section
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                className="w-full h-[60vh] md:h-[80vh] bg-neutral-200 relative overflow-hidden"
            >
                <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={90}
                />
            </motion.section>

            {/* Project Metadata & Brief */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Metadata Column */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:col-span-4"
                        >
                            <div className="grid grid-cols-2 gap-y-10 gap-x-4 pb-10 border-b border-gray-100">
                                <div>
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Client</h5>
                                    <p className="font-medium text-[var(--color-brand-charcoal)]">{project.client}</p>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Location</h5>
                                    <p className="font-medium text-[var(--color-brand-charcoal)]">{project.location}</p>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Year</h5>
                                    <p className="font-medium text-[var(--color-brand-charcoal)]">{project.year}</p>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Area</h5>
                                    <p className="font-medium text-[var(--color-brand-charcoal)]">{project.area}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Description Column */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:col-span-8 flex flex-col gap-10"
                        >
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">Overview</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="w-12 h-px bg-gray-200" />

                            <div>
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">The Challenge</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            <div className="w-12 h-px bg-gray-200" />

                            <div>
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-6">The strategic solution</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Dynamic Image Gallery Placeholder */}
            <section className="py-24 bg-[var(--color-brand-soft)]">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="aspect-square bg-white shadow-sm flex items-center justify-center text-gray-400 relative overflow-hidden"
                        >
                            <Image src={project.gallery[0]} alt="Detail View" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </motion.div>
                        <div className="flex flex-col gap-8">
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="aspect-video bg-white shadow-sm flex items-center justify-center text-gray-400 relative overflow-hidden"
                            >
                                <Image src={project.gallery[1]} alt="Interior View" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="aspect-video bg-neutral-800 shadow-sm flex items-center justify-center text-gray-500 relative overflow-hidden"
                            >
                                <Image src={project.gallery[2]} alt="Twilight View" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
