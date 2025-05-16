"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const images = [
    "/new/slider1.webp",
    "/new/slider2.webp",
    "/new/slider3.webp",
    "/new/slider4.webp",
];

const WhyWorkSlider = () => {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(1);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (slideIndex) => {
        setDirection(slideIndex > index ? 1 : -1);
        setIndex(slideIndex);
    };

    useEffect(() => {
        if (!isPlaying || !inView) return;
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [index, isPlaying, inView]);

    return (
        <div ref={ref} className="flex flex-col justify-center gap-10 mt-10 md:mt-0">
            <div className="w-full mx-auto overflow-hidden rounded-lg shadow-xl">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        alt={`Slide ${index}`}
                        loading="lazy"
                        className="w-full h-[480px] object-cover rounded-lg"
                        initial={{ opacity: 0, x: direction * 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 100 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
            <div className="flex justify-between items-center mt-1 mx-3">
                <div className="flex justify-center items-center gap-2">
                    <Button onClick={prevSlide}><ArrowLeft /></Button>
                    <Button onClick={nextSlide}><ArrowRight /></Button>
                </div>
                <div>
                    {images.map((_, i) => (
                        <motion.button
                            key={i}
                            className={`w-10 h-1 -ml-2 rounded-full transition-all ${i === index ? "bg-black shadow-lg" : "bg-gray-400"}`}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
                <Button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
            </div>
        </div>
    );
};

export default WhyWorkSlider;