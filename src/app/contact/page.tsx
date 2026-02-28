"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

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
                        <h4 className="text-[var(--color-brand-gold)] font-bold tracking-widest text-sm uppercase mb-6">Connect</h4>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                            Let&apos;s Build Something Exceptional
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Details */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-[var(--color-brand-charcoal)] mb-10">Get In Touch</h2>

                            <div className="flex flex-col gap-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-sky)] flex items-center justify-center shrink-0">
                                        <Mail size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Email</h4>
                                        <a href="mailto:hello@popiniconsults.com" className="text-xl font-light text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-sky)] transition-colors">
                                            hello@popiniconsults.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-sky)] flex items-center justify-center shrink-0">
                                        <Phone size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Phone</h4>
                                        <a href="tel:+2348000000000" className="text-xl font-light text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-sky)] transition-colors">
                                            +234 800 000 0000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-sky)] flex items-center justify-center shrink-0">
                                        <MapPin size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Location</h4>
                                        <p className="text-xl font-light text-[var(--color-brand-charcoal)]">
                                            Abuja &nbsp;&bull;&nbsp; Lagos &nbsp;&bull;&nbsp; Kano
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating WhatsApp Prompt Placeholder */}
                            <div className="mt-16 p-8 bg-[var(--color-brand-soft)] rounded relative overflow-hidden group">
                                <div className="absolute right-0 top-0 text-[var(--color-brand-sky)] opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.563 0 5.825-4.738 10.563-10.564 10.563z" /></svg>
                                </div>
                                <h4 className="text-xl font-heading font-semibold text-[var(--color-brand-charcoal)] mb-2 relative z-10">Prefer WhatsApp?</h4>
                                <p className="text-gray-600 font-light mb-6 relative z-10">Message our project advisors directly for a fast response.</p>
                                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#25D366] text-white font-medium rounded-sm shadow-md hover:bg-[#128C7E] transition-colors relative z-10">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white p-10 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-sm"
                        >
                            <h3 className="text-2xl font-heading font-semibold text-[var(--color-brand-charcoal)] mb-8">Send us a message</h3>

                            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-500">Name</label>
                                        <input type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-sky)] focus:bg-white transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-500">Email</label>
                                        <input type="email" className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-sky)] focus:bg-white transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-500">Phone</label>
                                        <input type="tel" className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-sky)] focus:bg-white transition-colors" placeholder="+234..." />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-gray-500">Project Type</label>
                                        <select className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-sky)] focus:bg-white transition-colors text-gray-700">
                                            <option>Residential Architecture</option>
                                            <option>Commercial Development</option>
                                            <option>Institutional Planning</option>
                                            <option>Strategic Consultancy</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-500">Message</label>
                                    <textarea rows={5} className="px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-sky)] focus:bg-white transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <button type="submit" className="mt-4 w-full py-4 bg-[var(--color-brand-charcoal)] text-white font-medium hover:bg-[var(--color-brand-indigo)] transition-colors rounded-sm shadow-md">
                                    Submit Message
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
