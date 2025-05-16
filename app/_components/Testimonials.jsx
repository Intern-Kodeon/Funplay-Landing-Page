"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect, memo } from 'react';
import { useInView } from "react-intersection-observer";

// Predefined constants to avoid repeated declarations
const testimonials = [
    { img: "/testimonial/img1.webp" },
    { img: "/testimonial/img2.webp" },
    { img: "/testimonial/img3.webp" },
    { img: "/testimonial/img4.webp" }
];

const reviews = [
    {
        text: "Fun Play Systems Pvt. Ltd. has been instrumental in helping us tailor our playground structures within budget while adding popular elements. Their expertise and professionalism are impressive.",
        name: "Nayan Shah",
        company: "Damji Shamji Shah Group"
    },
    {
        text: "We at Jaideep Construction have been using Fun Play Systems’ equipment for its safety, aesthetics, and durability. From product selection to after-sales service, their support has been exceptional. We highly recommend Fun Play Systems.",
        name: "Customer",
        company: "Jaideep Construction"
    },
    {
        text: "The Multi-activity design from Fun Play Systems has been a huge hit. The children enjoy the spacious, well-designed play area, which has positively impacted their outdoor play.",
        name: "Sanjay S. Deshmukh",
        company: "Urja Hospitality LLP"
    },
    {
        text: "We prioritize adding top-quality amenities that enhance the value of our projects, and the playground equipment from Funplay Systems Pvt. Ltd. has truly impressed us. The installation was efficient, and the design seamlessly integrated with our community spaces.",
        name: "Customer",
        company: "Ridhi Sidhi Developers"
    },
    {
        text: "As developers, we are always on the lookout for high-quality amenities that add value to our projects, and the playground equipment provided by Funplay Systems Pvt. Ltd. has exceeded our expectations. The installation process was seamless, and the design perfectly complements our community spaces.",
        name: "Customer",
        company: "Gami Group"
    }
];

// Animation variants (unchanged to maintain design)
const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3 }
    })
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.3 }
    }),
    hover: { y: -5, transition: { duration: 0.3 } }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } }
};

// Memoized ReviewCard to prevent unnecessary re-renders
const ReviewCard = memo(({ review, index }) => (
    <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative"
    >
        <Card className="bg-white/90 border border-gray-200/50 shadow-md rounded-lg">
            <CardContent className="p-6">
                <p className="text-gray-700 text-sm sm:text-lg mb-4">{review.text}</p>
            </CardContent>
        </Card>
        <div className="flex items-center my-10">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mr-3">
                <img
                    src="/testimonial/user.webp"
                    alt={`${review.name}'s avatar`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">{review.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{review.company}</p>
            </div>
        </div>
    </motion.div>
));
ReviewCard.displayName = 'ReviewCard';

const TestimonialsSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

    // Optimized IntersectionObserver
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // Increased interval for better performance
        return () => clearInterval(interval);
    }, []); // Removed unnecessary dependency

    return (
        <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.p
                    className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
                    variants={headingVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        What Our Clients Say
                    </span>
                </motion.p>
                <motion.div
                    className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                    variants={dividerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                />
                <div className="flex flex-col items-center mb-12 sm:mb-16 mt-10 space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                    <motion.div
                        custom={0}
                        variants={statsVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <div className="relative w-16 h-16 sm:w-[160px] sm:h-40 rounded-full overflow-hidden bg-gray-200">
                            <motion.img
                                key={currentImageIndex}
                                src={testimonials[currentImageIndex].img}
                                alt="Client testimonial"
                                className="w-full h-full object-cover"
                                variants={imageVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <p className="text-2xl max-w-[340px] font-bold text-gray-800 text-center sm:text-left">
                                Enjoyed by over <span className="text-purple-600">25,000+</span><br />
                                happy customers are using our products.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        custom={1}
                        variants={statsVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="text-center sm:text-left"
                    >
                        <p className="text-2xl sm:text-6xl font-bold text-gray-800">200+</p>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-48 font-semibold">Projects with innovative designs.</p>
                    </motion.div>
                    <motion.div
                        custom={2}
                        variants={statsVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="text-center sm:text-left"
                    >
                        <div className="flex flex-col justify-start items-center sm:items-start mb-2">
                            <p className="text-2xl sm:text-6xl font-bold text-gray-800">4.9</p>
                            <span className="text-yellow-400 text-2xl">★★★★★</span>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-40 font-semibold">Average rating from thousands of happy clients.</p>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 p-6">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;