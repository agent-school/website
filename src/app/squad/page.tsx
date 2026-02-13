"use client";

import { motion } from "framer-motion";
import { Agent, ALL_VARIANTS } from "@/components/AgentCharacters";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SquadPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center">
                <div className="max-w-7xl mx-auto text-center w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl font-bold tracking-tight mb-16 text-slate-900"
                    >
                        The Squad
                    </motion.h1>

                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 max-w-6xl mx-auto">
                        {ALL_VARIANTS.map((variant, index) => (
                            <motion.div
                                key={variant}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.01 }}
                                className="flex flex-col items-center gap-2 group translate-z-0"
                                style={{ width: "95px" }}
                            >
                                <div className="transition-transform duration-300 group-hover:-translate-y-2 h-[100px] flex items-end justify-center pb-2">
                                    <Agent variant={variant} scale={0.55} />
                                </div>

                                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors z-10 relative">
                                    {variant}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
