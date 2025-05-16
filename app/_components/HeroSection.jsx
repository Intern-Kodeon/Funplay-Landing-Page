"use client";
import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import Head from "next/head";

// Predefined constants
const images = [
    "/hero/heropage1.webp",
    "/hero/heropage2.webp ",
    "/hero/heropage3.webp "
];


const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 }
};
const formVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(2px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

// Memoized FormComponent to prevent unnecessary re-renders
const FormComponent = memo(({ register, errors, handleSubmit, onSubmit, isSubmitted }) => (
    <motion.form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Your name */}
            <div className="relative">
                <label className="font-medium text-gray-900 text-xl flex items-center gap-2">
                    Enter Your name *
                </label>
                <div className="relative">
                    <input
                        type="text"
                        {...register("name", { required: "This field is required" })}
                        className={`w-full h-12 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.name ? "border-red-500" : ""}`}
                        placeholder="Enter Your name"
                    />
                    {errors.name && (
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    )}
                </div>
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            {/* Your email address */}
            <div className="relative">
                <label className="font-medium text-gray-900 text-xl flex items-center gap-2">
                    Enter Your email *
                </label>
                <div className="relative">
                    <input
                        type="email"
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address",
                            },
                        })}
                        className={`w-full h-12 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.email ? "border-red-500" : ""}`}
                        placeholder="Enter Your email"
                    />
                    {errors.email && (
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    )}
                </div>
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* Your phone number */}
            <div className="relative md:col-span-2">
                <label className="font-medium text-gray-900 text-xl flex items-center gap-2">
                    Enter Your phone number *
                </label>
                <div className="relative">
                    <input
                        type="tel"
                        {...register("phone", {
                            required: "This field is required",
                            pattern: {
                                value: /^\+[0-9]{10,15}$/,
                                message: "Invalid phone number (must be + followed by 10-15 digits)",
                            },
                        })}
                        className={`w-full h-12 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.phone ? "border-red-500" : ""}`}
                        placeholder="Enter Your phone number"
                    />
                    {errors.phone && (
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    )}
                </div>
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>

            {/* Your message */}
            <div className="md:col-span-2 relative">
                <label className="font-medium text-gray-900 text-xl flex items-center gap-2">
                    Your message *
                </label>
                <div className="relative">
                    <textarea
                        {...register("comment", { required: "This field is required" })}
                        className={`w-full min-h-24 px-3 pt-2 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 resize-none pr-10 ${errors.comment ? "border-red-500" : ""}`}
                        placeholder="Your message"
                    />
                    {errors.comment && (
                        <svg className="absolute right-3 top-5 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    )}
                </div>
                {errors.comment && (
                    <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
                )}
            </div>
        </div>

        <motion.div
            variants={buttonVariants}
            whileHover={isSubmitted ? {} : "hover"}
            whileTap={isSubmitted ? {} : "tap"}
            className="relative"
        >
            <button
            id="alb" aria-labelledby="labeldiv"
                type="submit"
                disabled={isSubmitted}
                className={`w-full h-12 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 hover:shadow-lg"
                    }`}
            >
                {isSubmitted ? "Submitted" : "Send Me the Quote"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </button>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={isSubmitted ? {} : { x: "100%" }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    </motion.form>
));
FormComponent.displayName = "FormComponent";

export default function HeroSectionWithForm() {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            comment: "",
        },
    });

    // Handle form submission using fetch
    const onSubmit = async (data) => {
        try {
            // Send the form data to the server using fetch
            const response = await fetch("https://funplaysystems.com/email-templates/contact-form.php ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            // Clear the form after successful submission
            reset();

            // Update the submission state
            setIsSubmitted(true);

            // Redirect to the thank-you page after a 2-second delay
            setTimeout(() => {
                window.location.href = "https://funplaysystems.com/thank-you.html ";
            }, 2000);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    // Define the canonical URL for this page
    const canonicalUrl = "https://funplaylandingpage.netlify.app/"; // Replace with the actual URL of this page

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-black/80">
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div className="absolute inset-0 overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    className="w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                                style={{ backgroundImage: `url('${image}')` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative max-w-7xl mx-auto z-10 px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="text-center lg:text-left">
                    <motion.img
                        src="/hero/logo.webp"
                        alt="logo"
                        loading="lazy"
                        className="mx-auto lg:mx-0 mb-4 w-32 sm:w-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"

                        animate={inView ? "visible" : "hidden"}
                    >
                        <span className="quicksand bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                            Transform Your Space Into a World of Play
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-100 max-w-xl mx-auto lg:mx-0 font-light tracking-wide"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                    >
                        Design-awarded playgrounds crafted for schools, communities, and homes across India.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">🏆</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">DESIGN AWARD 2024</p>
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">✨</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">PREMIUM MATERIALS</p>
                        </div>
                        <div className="cursor-pointer flex items-center gap-2 border border-gray-400/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white">
                            <span className="text-base sm:text-lg">🧠</span>
                            <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-700">CHILD DEVELOPMENT FOCUSED</p>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-[80%] w-full">
                    <motion.div
                        className="bg-gray-200 rounded-sm p-6 sm:p-8 border border-gray-300/50 shadow-2xl max-w-5xl mx-auto lg:mx-0"
                        variants={formVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                            Enquire Now
                        </p>
                        <FormComponent
                            register={register}
                            errors={errors}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                            isSubmitted={isSubmitted}
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute top-1/4 left-1/4 w-10 sm:w-12 h-10 sm:h-12 border border-gray-400/20 rounded-full"
                animate={inView ? {
                    y: [0, -20, 0],
                    opacity: [0.5, 0.8, 0.5]
                } : {}}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-gray-400/10 rounded-full"
                animate={inView ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                } : {}}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-gray-200/50 to-transparent"></div>
        </section>
    );
}