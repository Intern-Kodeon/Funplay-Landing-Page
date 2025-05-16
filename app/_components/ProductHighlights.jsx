"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Head from 'next/head';

export default function ProductHighlights() {
    const products = [
        {
            name: "TOUCAN",
            desc: "Compact. Colorful. Stronger",
            stats: [
                { label: "3+ YEARS", icon: "👶" },
                { label: "385m²", icon: "📏" },
                { label: "21 USERS", icon: "👥" },
            ],
            image: "/producthighlight/Toucan-2.webp",
            bgColor: "white",
            accentColor: "from-blue-400 to-blue-600",
            svg1: "/producthighlight/climbing.webp",
            svgDesc1: "Climbing",
            svg2: "/producthighlight/Sliding.webp",
            svgDesc2: "Sliding",
            svg3: "/producthighlight/Jumping.webp",
            svgDesc3: "Jumping",
        },
        {
            name: "BELLATRIX",
            desc: "Towering fun for community parks.",
            stats: [
                { label: "5+ YEARS", icon: "🧒" },
                { label: "420m²", icon: "📏" },
                { label: "30 USERS", icon: "👥" },
            ],
            image: "/producthighlight/Bellatrix-1.webp",
            bgColor: "white",
            accentColor: "from-purple-400 to-purple-600",
            svg1: "/producthighlight/Rolling.webp",
            svgDesc1: "Rolling",
            svg2: "/producthighlight/Hanging.webp",
            svgDesc2: "Hanging",
            svg3: "/producthighlight/Balancing.webp",
            svgDesc3: "Balancing",
        },
        {
            name: "PAPERBOAT",
            desc: "Low-height playset for toddlers.",
            stats: [
                { label: "2+ YEARS", icon: "👶" },
                { label: "250m²", icon: "📏" },
                { label: "15 USERS", icon: "👥" },
            ],
            image: "/producthighlight/paper-boat-200.webp",
            bgColor: "white",
            accentColor: "from-green-400 to-green-600",
            svg2: "/producthighlight/climbing.webp",
            svgDesc2: "Climbing",
            svg1: "/producthighlight/Sliding.webp",
            svgDesc1: "Sliding",
            svg3: "/producthighlight/crawling.webp",
            svgDesc3: "Crawling",
        },
        {
            name: "ULTA GHAR",
            desc: "Soft play system for indoors.",
            stats: [
                { label: "8+ YEARS", icon: "🧑" },
                { label: "500m²", icon: "📏" },
                { label: "25 USERS", icon: "👥" },
            ],
            image: "/producthighlight/Ulta-Ghar3.webp",
            bgColor: "white",
            accentColor: "from-orange-400 to-orange-600",
            svg2: "/producthighlight/climbing.webp",
            svgDesc2: "Climbing",
            svg1: "/producthighlight/Sliding.webp",
            svgDesc1: "Sliding",
        },
        {
            name: "PHULA",
            desc: "Eco-themed outdoor structure.",
            stats: [
                { label: "8+ YEARS", icon: "🧑" },
                { label: "500m²", icon: "📏" },
                { label: "25 USERS", icon: "👥" },
            ],
            image: "/producthighlight/Phula6.webp",
            bgColor: "white",
            accentColor: "from-pink-400 to-pink-600",
            svg2: "/producthighlight/climbing.webp",
            svgDesc2: "Climbing",
            svg1: "/producthighlight/Sliding.webp",
            svgDesc1: "Sliding",
            svg3: "/producthighlight/crawling.webp",
            svgDesc3: "Crawling",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.3, // Stagger each card by 0.3 seconds
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.03,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const BackgroundPattern = () => (
        <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                fill="#3b82f6"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    );

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    const canonicalUrl = "https://funplaylandingpage.netlify.app/"; // Replace with the actual URL of this page
    return (
        <div ref={ref} className="relative bg-gradient-to-b from-[#f5fbff] to-[#e8f4fe] py-16 sm:py-24 px-4 overflow-hidden">
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="absolute inset-0 overflow-hidden">
                <BackgroundPattern />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/10 to-transparent"></div>
            </div>

            <motion.div
                className="absolute top-1/5 left-1/6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-100/20 backdrop-blur-sm"
                animate={isVisible ? {
                    y: [0, -30, 0],
                    opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-1/6 right-1/5 w-14 sm:w-18 h-14 sm:h-18 rounded-full bg-pink-100/20 backdrop-blur-sm"
                animate={isVisible ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto z-10">
                <motion.p
                    className="text-4xl sm:text-5xl text-center font-bold mb-8 tracking-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
                        Explore Our Signature Play Units
                    </span>
                </motion.p>

                <motion.div
                    className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-6 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-20">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            className={`relative rounded-2xl overflow-hidden group flex flex-col ${product.bgColor} border ${product.borderColor} shadow-md bg-opacity-90 bg-white/40 backdrop-blur-sm`}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            whileHover="hover"
                        >
                            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={`${product.name} playground`}
                                    loading='lazy'
                                    className="object-cover transition-all duration-500 group-hover:scale-105 h-full"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>

                                <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.accentColor} text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md`}>
                                    {product.name}
                                </div>
                            </div>

                            <div className="px-5 sm:px-6 py-5 sm:pt-6 flex-grow flex flex-col h-[240px]">
                                <p className='text-center text-gray-900 text-xl pb-2 font-bold'>{product.name}</p>
                                <p className="text-gray-700 text-sm sm:text-base text-center mb-4 leading-relaxed font-medium">
                                    {product.desc}
                                </p>

                                <motion.div
                                    className="w-full h-[2px] mt-2 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />

                                <div className='flex items-center justify-between'>
                                    {product.svg1 && product.svgDesc1 && (
                                        <div className='flex items-center gap-2 mt-4'>
                                            <img loading='lazy' src={product.svg1} alt={product.svgDesc1} className='w-5' />
                                            <p>{product.svgDesc1}</p>
                                        </div>
                                    )}
                                    {product.svg2 && product.svgDesc2 && (
                                        <div className='flex items-center gap-2 mt-4'>
                                            <img src={product.svg2} alt={product.svgDesc2} className='w-5' loading='lazy' />
                                            <p>{product.svgDesc2}</p>
                                        </div>
                                    )}
                                    {product.svg3 && product.svgDesc3 && (
                                        <div className='flex items-center gap-2 mt-4'>
                                            <img src={product.svg3} alt={product.svgDesc3} className='w-5' loading='lazy' />
                                            <p>{product.svgDesc3}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-center items-center gap-2 mt-8 cursor-pointer">
                                    <p
                                        className='text-center text-xl text-blue-500 hidden group-hover:block transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1'
                                    >
                                        Contact us
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-blue-500 hidden group-hover:block transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}