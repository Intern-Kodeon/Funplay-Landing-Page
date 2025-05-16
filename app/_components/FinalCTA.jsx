"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { memo } from "react";
import Head from "next/head";

// Optimized animation variants
const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.7 } }
};

const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
};

const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.1 }
    }),
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
};

// Memoized Button component to prevent unnecessary re-renders
const CTAButton = memo(({ text, index, gradientFrom, gradientTo }) => (
    <motion.div
        custom={index}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
    >
        <button
        id="text"
            className={`px-6 sm:px-8 py-3 rounded-full text-base font-semibold shadow-md border border-[#7CC1ED]/30 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-gray-900`}
        >
            {text}
        </button>
    </motion.div>
));
CTAButton.displayName = 'CTAButton';

const FinalCTA = () => {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

    const canonicalUrl = "https://funplaylandingpage.netlify.app/"; // Replace with the actual URL of this page

    return (
        <section
            ref={ref}
            className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-[#B3E0F5] text-center"
        >
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgMTAgTCAxMCAwIE0gLTEgMSBMIDEgLTEgTSAxMSA5IEwgOSAxMSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZ3JhaW4pIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-10" />
            {/* Simplified floating elements for performance */}
            <motion.div
                className="absolute top-1/5 left-1/4 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#7CC1ED]/20"
                animate={inView ? { y: [-10, 10, -10], opacity: 0.4 } : {}}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#B3E0F5]/20"
                animate={inView ? { scale: [1, 1.1, 1], opacity: 0.4 } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative max-w-3xl mx-auto">
                <motion.p
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700"
                    variants={headingVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    Ready to Build Your Dream Play Space?
                </motion.p>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                />
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-800 font-medium mt-10"
                    variants={paragraphVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    Let’s bring fun, creativity, and joy to your space—start with a free design consultation.
                </motion.p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <CTAButton
                        text="Book a Free Site Visit"
                        index={0}
                        gradientFrom="from-white"
                        gradientTo="to-[#E6F5FC]"
                    />
                    <CTAButton
                        text="Download Product Catalogue"
                        index={1}
                        gradientFrom="from-[#7CC1ED]/90"
                        gradientTo="to-[#B3E0F5]/90"
                    />
                    <CTAButton
                        text="Talk to an Expert"
                        index={2}
                        gradientFrom="from-white"
                        gradientTo="to-[#E6F5FC]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;