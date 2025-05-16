"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import Head from "next/head";

export default function LeadForm() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    const formRef = useRef(null);

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
            location: "",
            customerType: "",
            comment: "",
        },
    });

    // Updated onSubmit function
    const onSubmit = async (data) => {
        try {
            // Submit the form data to the server
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

            // Redirect to the thank-you page
            window.location.href = "https://funplaysystems.com/thank-you.html";
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    // Animation variants (unchanged)
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    const dividerVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
        },
    };
    const formVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(2px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.98 },
    };

    const canonicalUrl = "https://funplaylandingpage.netlify.app/"; // Replace with the actual URL of this page

    return (
        <div className="relative bg-[url('https://funplaysystems.com/images/Group77.svg ')] bg-blue-200/20 bg-no-repeat bg-cover">
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
                {/* Floating Elements */}
                <motion.div
                    className="absolute top-1/4 left-1/5 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-blue-300/10 to-transparent blur-xl"
                    animate={inView ? { y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] } : {}}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/5 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-blue-300/10 to-transparent blur-xl"
                    animate={inView ? { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] } : {}}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.p
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
                            variants={headingVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-900">
                                Get a Free Custom Quote in 30 Seconds
                            </span>
                        </motion.p>
                        <motion.div
                            className="w-32 sm:w-40 h-1 bg-gradient-to-r from-gray-300/0 via-gray-600/80 to-gray-300/0 mx-auto mt-6 sm:mt-8 rounded-full"
                            variants={dividerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        />
                    </div>
                    <motion.form
                        ref={formRef}
                        className="space-y-6 bg-gray-50 backdrop-blur-xl rounded-xl shadow-lg p-6 md:p-10 border border-gray-200/50 relative overflow-hidden"
                        variants={formVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        onSubmit={handleSubmit(onSubmit)} // Use handleSubmit to handle form submission
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Your name */}
                            <div className="relative">
                                <label className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Your name *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        {...register("name", { required: "This field is required" })}
                                        className={`w-full h-16 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.name ? "border-red-500" : ""}`}
                                        placeholder="Your name"
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

                            {/* Your phone number */}
                            <div className="relative">
                                <label className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    Your phone number *
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
                                        className={`w-full h-16 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.phone ? "border-red-500" : ""}`}
                                        placeholder="Your phone number"
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

                            {/* Your email address */}
                            <div className="relative">
                                <label className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9 6 9-6m-9 6v8m-9-8h18V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8z"></path>
                                    </svg>
                                    Your email address *
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
                                        className={`w-full h-16 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.email ? "border-red-500" : ""}`}
                                        placeholder="Your email address"
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

                            {/* Your location */}
                            <div className="relative">
                                <label className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L12 21.314l-5.657-5.657a8 8 0 1111.314 0zM12 12a3 3 0 100-6 3 3 0 000 6z"></path>
                                    </svg>
                                    Your location *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        {...register("location", { required: "This field is required" })}
                                        className={`w-full h-16 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.location ? "border-red-500" : ""}`}
                                        placeholder="Your location"
                                    />
                                    {errors.location && (
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    )}
                                </div>
                                {errors.location && (
                                    <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                                )}
                            </div>

                            {/* Category */}
                            <div className="md:col-span-2 relative">
                                <label
                                    htmlFor="customerType" // Add for attribute to match the select's id
                                    className="font-medium text-gray-900 text-2xl flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5a2 2 0 01-2-2v-1a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2z"></path>
                                    </svg>
                                    Type of Installation *
                                </label>
                                <div className="relative">
                                    <select
                                        id="customerType" // Add id to link with the label
                                        {...register("customerType", { required: "This field is required" })}
                                        className={`w-full h-16 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 pr-10 ${errors.customerType ? "border-red-500" : ""}`}
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="Preschool">Preschool</option>
                                        <option value="School">School</option>
                                        <option value="Park">Park</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.customerType && (
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    )}
                                </div>
                                {errors.customerType && (
                                    <p className="text-red-500 text-sm mt-1">{errors.customerType.message}</p>
                                )}
                            </div>

                            {/* Your message */}
                            <div className="md:col-span-2 relative">
                                <label className="font-medium text-gray-900 text-2xl flex items-center gap-2">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-8 4h8M4 6h16M4 6l4 4m12-4l-4 4m-8 6H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-4"></path>
                                    </svg>
                                    Your message *
                                </label>
                                <div className="relative">
                                    <textarea
                                        {...register("comment", { required: "This field is required" })}
                                        className={`w-full min-h-32 px-3 bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-300 rounded-sm mt-2 resize-none pr-10 ${errors.comment ? "border-red-500" : ""}`}
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
                            whileHover="hover"
                            whileTap="tap"
                            className="relative"
                        >
                            <button
                                id="alb" aria-labelledby="labeldiv"
                                type="submit"
                                className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Me the Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </button>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                        <p className="text-center text-gray-600 text-sm mt-4">
                            * We respect your privacy. Your information will not be shared.
                        </p>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}