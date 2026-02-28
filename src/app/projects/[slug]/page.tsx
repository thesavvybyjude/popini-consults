"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Download, Ruler, Mountain, Wind, Home, Layers, Trees, Award, Building, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock data store for dynamic routing with the new rich architectural schema
const PROJECT_DATA: Record<string, any> = {
    "luxury-private-residence": {
        overview: {
            title: "Luxury Private Residence",
            type: "Residential Architecture & Interior Design",
            location: "Asokoro, Abuja (9.0544° N, 7.5317° E)",
            client: "Private Developer",
            scope: "Ground-up construction of a 6-bedroom luxury tropical modern villa with integrated landscape architecture.",
            keyFeatures: ["Cantilevered Overhangs", "Off-white architectural concrete", "Passively ventilated core", "Smart-glass fenestration strategy"],
        },
        site: {
            topography: "Steep 15% gradient descending northwards.",
            climate: "Tropical savanna, optimizing for cross-ventilation against prevailing South-West winds.",
            zoning: "Low-density premium residential.",
            mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" // Mock map
        },
        visuals: {
            hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
            gallery: [
                { url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop", caption: "Twilight Perspective showing interior illumination" },
                { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop", caption: "Living Room - Natural light harvesting" },
                { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", caption: "Rear Elevation Context" }
            ],
            progress: "https://images.unsplash.com/photo-1541888031557-010526e03661?q=80&w=1200&auto=format&fit=crop"
        },
        concept: {
            philosophy: "A minimalist spatial language emphasizing seamless transparency, heavy massing against the steep grade, and an intense connection to natural light without thermal compromise.",
            form: "Stacked monolithic volumes sliding past each other to create deep, shaded terraces.",
            materials: "Board-formed concrete, native Iroko wood cladding, and low-e acoustic glass.",
            sustainability: "Rainwater harvesting cisterns hidden in the topography, solar PV integration, and massive thermal mass walls."
        },
        technical: {
            structural: "Deep pile foundations with a reinforced concrete frame and post-tensioned cantilevered slabs.",
            circulation: "Central spine gallery with a floating steel stair connecting all 3 levels.",
            landscape: "Drought-resistant native flora acting as bioswales for site drainage."
        },
        metrics: {
            area: "1,200 m² (12,900 ft²)",
            height: "12 meters / 3 Levels",
            budget: "Undisclosed",
            recognition: "ArchDaily Featured 2024"
        }
    }
};

const INITIAL_FALLBACK = PROJECT_DATA["luxury-private-residence"];

export default function ProjectDetail() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || "luxury-private-residence");

    // Fallback to default if not exact match (for demo purposes)
    const project = PROJECT_DATA[slug] || INITIAL_FALLBACK;

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            {/* Back Navigation */}
            <div className="pt-32 pb-8 bg-white container px-6 md:px-12 mx-auto">
                <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--color-brand-charcoal)] transition-colors font-medium text-sm tracking-wide uppercase">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>

            {/* 1. Project Overview & Hero Section */}
            <section className="pb-16 bg-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-6">
                            {project.overview.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-500 font-light mb-12">
                            <span className="text-[var(--color-brand-indigo)] font-medium flex items-center gap-2"><MapPin size={16} /> {project.overview.location}</span>
                            <span className="hidden sm:inline">&bull;</span>
                            <span>{project.overview.type}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="w-full h-[60vh] md:h-[80vh] bg-neutral-200 relative overflow-hidden">
                    <Image src={project.visuals.hero} alt={project.overview.title} fill className="object-cover" priority sizes="100vw" quality={90} />
                </motion.div>
            </section>

            {/* Executive Summary Grid */}
            <section className="py-16">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-gray-100">
                        <div><h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Client</h5><p className="font-medium text-[var(--color-brand-charcoal)]">{project.overview.client}</p></div>
                        <div className="md:col-span-2"><h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Project Scope</h5><p className="font-light text-gray-600">{project.overview.scope}</p></div>
                        <div><h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Key Features</h5><ul className="text-sm font-light text-gray-600 list-disc pl-4">{project.overview.keyFeatures.map((f: string) => <li key={f}>{f}</li>)}</ul></div>
                    </div>
                </div>
            </section>

            {/* 4. Design Concept & Architectural Narrative */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 md:px-12 mx-auto">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-4xl">
                        <h3 className="text-3xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-8">Concept & Form</h3>
                        <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">{project.concept.philosophy}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 shadow-sm">
                                <Layers className="text-[var(--color-brand-gold)] mb-4" size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Massing & Form</h4>
                                <p className="text-sm text-gray-500">{project.concept.form}</p>
                            </div>
                            <div className="bg-white p-6 shadow-sm">
                                <Home className="text-[var(--color-brand-gold)] mb-4" size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Material Palette</h4>
                                <p className="text-sm text-gray-500">{project.concept.materials}</p>
                            </div>
                            <div className="bg-white p-6 shadow-sm">
                                <Trees className="text-[var(--color-brand-gold)] mb-4" size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Sustainability</h4>
                                <p className="text-sm text-gray-500">{project.concept.sustainability}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Visual Documentation (Gallery) */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <h3 className="text-2xl font-heading font-bold text-gray-400 mb-10 uppercase tracking-widest text-center">Visual Documentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="aspect-square relative overflow-hidden bg-gray-100 group">
                            <Image src={project.visuals.gallery[0].url} alt="Gallery image" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium">{project.visuals.gallery[0].caption}</div>
                        </motion.div>
                        <div className="grid grid-rows-2 gap-4 h-full">
                            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden bg-gray-100 group min-h-[300px]">
                                <Image src={project.visuals.gallery[1].url} alt="Gallery image" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium">{project.visuals.gallery[1].caption}</div>
                            </motion.div>
                            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden bg-gray-100 group min-h-[300px]">
                                <Image src={project.visuals.gallery[2].url} alt="Gallery image" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium">{project.visuals.gallery[2].caption}</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Geospatial Context & 5. Technical Information */}
            <section className="py-24 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Geospatial Map Placeholder */}
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                            <h3 className="text-2xl font-heading font-medium mb-8 flex items-center gap-3"><MapPin className="text-[var(--color-brand-gold)]" /> Site & Geospatial Context</h3>
                            <div className="aspect-video relative bg-neutral-800 mb-8 border border-white/10 overflow-hidden">
                                <Image src={project.site.mapImage} alt="Site Context Map" fill className="object-cover opacity-60" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="px-6 py-3 bg-[var(--color-brand-charcoal)]/80 backdrop-blur-md text-xs font-mono border border-white/20">INTERACTIVE MAP VIEW</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 text-sm font-light text-gray-300">
                                <div><span className="block text-[var(--color-brand-gold)] font-bold mb-1"><Mountain size={14} className="inline mr-1" />Topography</span> {project.site.topography}</div>
                                <div><span className="block text-[var(--color-brand-gold)] font-bold mb-1"><Wind size={14} className="inline mr-1" />Climate</span> {project.site.climate}</div>
                                <div className="col-span-2"><span className="block text-[var(--color-brand-gold)] font-bold mb-1 text-xs uppercase">Zoning</span> {project.site.zoning}</div>
                            </div>
                        </motion.div>

                        {/* Technical Information */}
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="lg:pl-12 border-l border-white/10">
                            <h3 className="text-2xl font-heading font-medium mb-8 flex items-center gap-3"><Ruler className="text-[var(--color-brand-gold)]" /> Technical Execution</h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-2">Structural System</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">{project.technical.structural}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-2">Program & Circulation</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">{project.technical.circulation}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-2">Landscape Integration</h4>
                                    <p className="text-gray-400 font-light text-sm leading-relaxed">{project.technical.landscape}</p>
                                </div>
                            </div>

                            {/* 6. Metrics */}
                            <div className="mt-12 p-6 bg-white/5 border border-white/10 grid grid-cols-2 gap-6">
                                <div><span className="block text-gray-400 text-xs uppercase mb-1 flex items-center gap-1"><Building size={12} /> Area</span> <span className="font-mono text-sm">{project.metrics.area}</span></div>
                                <div><span className="block text-gray-400 text-xs uppercase mb-1 flex items-center gap-1"><Layers size={12} /> Height</span> <span className="font-mono text-sm">{project.metrics.height}</span></div>
                                <div><span className="block text-gray-400 text-xs uppercase mb-1 flex items-center gap-1"><DollarSign size={12} /> Budget</span> <span className="font-mono text-sm">{project.metrics.budget}</span></div>
                                <div><span className="block text-[var(--color-brand-gold)] text-xs uppercase mb-1 flex items-center gap-1"><Award size={12} /> Recognition</span> <span className="font-mono text-sm">{project.metrics.recognition}</span></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 7. Call-to-Action */}
            <section className="py-24 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)]">
                <div className="container px-6 md:px-12 mx-auto text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Interested in exploring this scale of vision?</h2>
                    <p className="text-lg font-medium opacity-80 mb-10 max-w-2xl">Connect with our architectural directors to discuss feasibility, site analysis, and master planning for your next legacy development.</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-[var(--color-brand-charcoal)] text-white font-medium hover:bg-neutral-800 transition-colors shadow-xl">
                            Schedule a Site Consultation
                        </Link>
                        <button className="px-8 py-4 bg-white/50 hover:bg-white text-[var(--color-brand-charcoal)] font-medium transition-colors flex items-center justify-center gap-2">
                            <Download size={18} /> Download Project Folio PDF
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
