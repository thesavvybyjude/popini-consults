"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Consultancy", href: "/consultancy" },
        { title: "Projects", href: "/projects" },
        { title: "Insights", href: "/insights" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 flex shrink-0 transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/blue.png"
                                alt="Popini Consults Logo"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-xl leading-none tracking-tight text-[var(--color-brand-charcoal)] uppercase">Popini</span>
                            <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gray-500 uppercase mt-[2px]">Consults</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-[var(--color-brand-charcoal)] transition-colors relative group"
                            >
                                {link.title}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-gold)] transition-all duration-300 ease-[var(--ease-architectural)] group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-[var(--color-brand-charcoal)] text-white text-sm font-medium hover:bg-[var(--color-brand-indigo)] transition-all duration-300 ease-[var(--ease-architectural)] shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] rounded-sm"
                        >
                            Book Consultation
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-[var(--color-brand-charcoal)]"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} strokeWidth={1.5} />
                    </button>
                </div>
            </header>

            {/* Mobile Fullscreen Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[60] py-24 px-8 flex flex-col justify-center items-start"
                        style={{ backgroundColor: "var(--color-brand-charcoal)" }}
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>
                        <nav className="flex flex-col gap-8 w-full">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx + 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-4xl font-heading font-light tracking-tight hover:text-[var(--color-brand-gold)] transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-16 pt-8 border-t border-white/20 w-full"
                        >
                            <p className="text-white/60 text-sm mb-4">hello@popiniconsults.com</p>
                            <Link
                                href="/contact"
                                className="w-full text-center px-6 py-4 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] text-sm font-medium hover:bg-white transition-all duration-300 block"
                                onClick={() => setIsOpen(false)}
                            >
                                Start Your Project
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
