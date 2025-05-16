"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import WhyWorkSlider from "./WhyWorkSlider";
import { useInView } from "react-intersection-observer";

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: { opacity: 0.7, scale: 1, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } },
    hover: { opacity: 1 }
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } },
    hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }
};

const glowVariants = {
    animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.6, 0.3], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }
};

const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }
};

const cardSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
};

const features = [
    { link: "/", icon: <Users className="h-12 w-12 text-blue-500" />, img: "/new/icon1.webp", title: "Schools & Daycares", description: "Safe, durable, and age-appropriate.", image: "/new/img1.webp" },
    { link: "/", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "/new/icon2.webp", title: "Residential Societies", description: "Boost community engagement.", image: "/new/img2.webp" },
    { link: "/", icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "/new/icon3.webp", title: "Public Parks & Urban Spaces", description: "Inclusive and compliant.", image: "/new/img3.webp" },
    { link: "/", icon: <Shield className="h-12 w-12 text-blue-500" />, img: "/new/icon4.webp", title: "Builders & Architects", description: "Custom-built to specification", image: "/new/img4.webp" }
];

const New = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div className="relative bg-[url('https://funplaysystems.com/images/Vector.svg')] bg-blue-200/40 bg-repeat-x bg-cover">
            <section ref={ref} className="py-20 overflow-hidden relative">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent" variants={glowVariants} animate={inView ? "animate" : {}} />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <motion.p
                        className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8 tracking-tight font-sans"
                        variants={headingVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <span className="bg-clip-text text-transparent quicksand bg-gradient-to-r from-black to-gray-900">
                            Playgrounds That Fit Every Vision
                        </span>
                    </motion.p>
                    <motion.div
                        className="w-40 h-1 bg-gradient-to-r from-black/0 via-gray-900/80 to-indigo-300/0 mx-auto mt-8 rounded-full"
                        variants={dividerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    />
                    <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                        <div className="rounded-lg mb-6 md:mb-0 col-span-12 xl:col-span-4">
                            <WhyWorkSlider />
                        </div>
                        <div className="col-span-12 xl:col-span-8">
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                variants={cardSectionVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            >
                                {features.map((feature) => (
                                    <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                                        <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-50 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                                            <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                                        </motion.div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-5">
                                                <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                                    <img loading="lazy" src={feature.img} alt={feature.title} className="w-12" />
                                                </motion.div>
                                            </div>
                                            <p className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">{feature.title}</p>
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.description}</p>
                                            <div className="flex items-center gap-3 transition-colors duration-300 mt-6 cursor-pointer">
                                                <Link href={feature.link}>
                                                    <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                                                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                                                    </motion.div>
                                                </Link>
                                                <motion.div className="h-5 w-5 text-black">
                                                    <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default New;