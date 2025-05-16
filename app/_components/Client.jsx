"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function Client() {
    const stats = [
        { number: 21, label: "Years Of Experience", suffix: "+" },
        { number: 150, label: "Employees", suffix: "+" },
        { number: 15000, label: "Installations Nationwide", suffix: "+" },
        { number: 45000, label: "Sq. ft. Manufacturing Facility", suffix: "" },
    ];

    const Counter = ({ end, suffix, isVisible }) => {
        const [count, setCount] = useState(1);

        useEffect(() => {
            if (!isVisible) {
                setCount(1); // Reset to 1 when section is out of view
                return;
            }

            const duration = 2000; // 2 seconds
            const increment = end / (duration / 50); // Increment per 50ms
            let currentCount = 1;

            const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount >= end) {
                    currentCount = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(currentCount));
            }, 50);

            return () => clearInterval(timer);
        }, [end, isVisible]);

        return (
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-4xl sm:text-5xl md:text-7xl text-gray-900"
            >
                {count.toLocaleString()}{suffix}
            </motion.h3>
        );
    };

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

    return (
        <div ref={ref} className="w-full bg-gradient-to-b from-[#e6f5fc] to-[#e6f5fc] py-6 md:py-10">
            <div className="px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <Counter end={stat.number} suffix={stat.suffix} isVisible={isVisible} />
                        <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl text-center mt-2">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Client;