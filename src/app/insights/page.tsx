"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText, PlayCircle } from "lucide-react";

export default function Insights() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const articles = [
        {
            title: "Decolonizing Urban Space in West Africa",
            category: "Urban Design",
            date: "October 12, 2024",
            image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop",
            excerpt: "Examining how indigenous spatial hierarchies can be integrated into contemporary masterplanning to foster community and cultural continuity."
        },
        {
            title: "Passive Cooling Strategies in Tropical Commercial Tall Buildings",
            category: "Sustainability",
            date: "September 28, 2024",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
            excerpt: "A deep dive into facade engineering and natural ventilation systems that dramatically reduce HVAC loads in equatorial climates."
        },
        {
            title: "The Return to Earth: Rammed Earth Construction in Luxury Retail",
            category: "Materiality",
            date: "August 15, 2024",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            excerpt: "How traditional building techniques are being repurposed to create premium, low-carbon environments for high-end retail brands."
        }
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
                        <h4 className="text-[var(--color-brand-sky)] font-bold tracking-widest text-sm uppercase mb-6">Thought Leadership</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--color-brand-charcoal)] leading-tight mb-6">
                            Insights & Perspectives
                        </h1>
                        <p className="text-xl text-gray-600 font-light max-w-2xl">
                            Architectural research, urban strategies, and technical white papers shaping the built environment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Articles Grid */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
                        <h2 className="text-3xl font-heading font-bold text-[var(--color-brand-charcoal)]">Latest Articles</h2>
                        <div className="hidden md:flex gap-4">
                            <span className="text-sm font-medium text-[var(--color-brand-charcoal)] border-b border-[var(--color-brand-charcoal)] pb-1 cursor-pointer">All</span>
                            <span className="text-sm font-medium text-gray-400 hover:text-[var(--color-brand-charcoal)] transition-colors cursor-pointer">Sustainability</span>
                            <span className="text-sm font-medium text-gray-400 hover:text-[var(--color-brand-charcoal)] transition-colors cursor-pointer">Urbanism</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((article, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="aspect-[4/3] bg-gray-100 mb-6 relative overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[var(--ease-architectural)]"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-xs font-bold tracking-wider uppercase text-[var(--color-brand-charcoal)] shadow-sm">
                                        {article.category}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-3">{article.date}</p>
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-4 group-hover:text-[var(--color-brand-sky)] transition-colors leading-tight">{article.title}</h3>
                                <p className="text-gray-600 font-light text-sm mb-6 flex-grow">{article.excerpt}</p>
                                <div className="flex items-center text-[var(--color-brand-gold)] font-medium text-sm mt-auto">
                                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-[var(--color-brand-charcoal)] text-white">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Technical Resources</h2>
                            <p className="text-gray-400 font-light text-lg mb-10 max-w-md">
                                Download our definitive guides and white papers to understand our rigorous approach to engineering and design.
                            </p>

                            <div className="flex flex-col gap-6">
                                <a href="#" className="flex items-center justify-between p-6 border border-gray-700 hover:border-[var(--color-brand-gold)] bg-white/5 hover:bg-white/10 transition-all group rounded-sm">
                                    <div className="flex items-center gap-4">
                                        <FileText className="text-[var(--color-brand-sky)] group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
                                        <div>
                                            <h4 className="font-heading font-semibold text-lg">Zero-Carbon Retrofitting Guide</h4>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">PDF • 4.2 MB</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" />
                                </a>

                                <a href="#" className="flex items-center justify-between p-6 border border-gray-700 hover:border-[var(--color-brand-gold)] bg-white/5 hover:bg-white/10 transition-all group rounded-sm">
                                    <div className="flex items-center gap-4">
                                        <PlayCircle className="text-[var(--color-brand-sky)] group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
                                        <div>
                                            <h4 className="font-heading font-semibold text-lg">Site Analysis: Lekki Masterplan</h4>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Video • 12 Mins</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-[var(--color-brand-indigo)]/20 p-12 lg:p-16 rounded-lg border border-[var(--color-brand-indigo)]/30 text-center"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-4">Subscribe to our newsletter</h3>
                            <p className="text-sm text-gray-300 font-light mb-8 max-w-sm mx-auto">Get quarterly updates on our latest research, firm news, and architectural insights.</p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Email address" className="flex-grow px-4 py-3 bg-white/10 border border-white/20 focus:outline-none focus:border-[var(--color-brand-sky)] text-white placeholder-gray-400 text-sm transition-colors" />
                                <button type="submit" className="px-6 py-3 bg-[var(--color-brand-sky)] text-[var(--color-brand-charcoal)] font-semibold text-sm hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
