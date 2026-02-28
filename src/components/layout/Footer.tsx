import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-brand-charcoal)] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div className="relative w-12 h-12 flex shrink-0 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/dark gray.png"
                                    alt="Popini Consults Logo"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase">Popini</span>
                                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[var(--color-brand-gold)] uppercase mt-[2px]">Consults</span>
                            </div>
                        </Link>
                        <p className="text-sm font-light leading-relaxed text-gray-400 max-w-xs">
                            Premium architectural design and strategic consultancy for visionary African developments. Built for Legacy.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="w-12 h-12 border border-gray-700 flex items-center justify-center rounded-sm text-gray-400 font-heading text-[11px] font-bold tracking-widest hover:border-[var(--color-brand-gold)] hover:text-white transition-all cursor-default" title="ARCON Certified">
                                ARCON
                            </div>
                            <div className="w-12 h-12 border border-gray-700 flex items-center justify-center rounded-sm text-gray-400 font-heading text-[11px] font-bold tracking-widest hover:border-[var(--color-brand-gold)] hover:text-white transition-all cursor-default" title="RIBA Chartered Practice">
                                RIBA
                            </div>
                            <div className="w-12 h-12 border border-gray-700 flex items-center justify-center rounded-sm text-gray-400 font-heading text-[11px] font-bold tracking-widest hover:border-[var(--color-brand-gold)] hover:text-white transition-all cursor-default" title="AIA International Region">
                                AIA
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 tracking-wide">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {["About Us", "Projects", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 tracking-wide">Services</h4>
                        <ul className="flex flex-col gap-3">
                            {["Architecture", "Consultancy", "Master Planning", "Project Management"].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-medium text-lg mb-6 tracking-wide">Contact</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li>
                                <a href="mailto:hello@popiniconsults.com" className="hover:text-[var(--color-brand-gold)] transition-colors duration-300">
                                    hello@popiniconsults.com
                                </a>
                            </li>
                            <li>+234 800 000 0000</li>
                            <li className="mt-4 leading-relaxed">
                                Abuja • Lagos • Kano<br />
                                Nigeria
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {currentYear} POPINI Consults. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["LinkedIn", "Instagram", "Twitter"].map((social) => (
                            <a key={social} href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
