"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function LogoSlide() {
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } }
    };

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
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

    const clients = [
        { img: "/abad.webp" },
        { img: "/alfeen.webp" },
        { img: "/baldato.png" },
        { img: "/bgs.webp" },
        { img: "/brigade.png" },
        { img: "/casagrand.webp" },
        { img: "/dac.webp" },
        { img: "/diamond.png" },
        { img: "/felixa.webp" },
        { img: "/godrej.webp" },
        { img: "/golden-arch.webp" },
        { img: "/jindal.webp" },
        { img: "/kalyan.webp" },
        { img: "/nanma.webp" },
        { img: "/purva.webp" },
        { img: "/raghuvir.webp" },
        { img: "/ryan.webp" },
        { img: "/sangini.jpg" },
        { img: "/schmitten.jpg" },
        // { img: "/shyam.webp" },
        { img: "/velammal.webp" },
        { img: "/welmont.webp" },
    ];

    return (
        <div ref={ref} className="bg-white py-32">
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-8 tracking-tight font-sans"
                variants={headingVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Our Clients
                </span>
            </motion.h2>
            <motion.div
                className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-900/0 via-gray-900/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                variants={dividerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            />
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="max-w-7xl mx-auto mt-20"
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center ">
                            <div className="bg-gray-100 rounded-3xl px-4 py-6 w-96 flex items-center justify-center transition-all duration-300 ">
                                <img
                                    src={client.img}
                                    alt={client.alt || `Client ${index + 1}`}
                                    className="h-20  transition-all duration-300 object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .swiper-pagination-bullet {
                    background: #999;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: #333;
                    opacity: 1;
                }
                .swiper {
                    padding-bottom: 40px;
                }
            `}</style>
        </div>
    );
}

export default LogoSlide;