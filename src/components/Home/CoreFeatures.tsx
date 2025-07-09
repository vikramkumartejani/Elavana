'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const CoreFeatures = () => {
    const [activeTab, setActiveTab] = useState('customers');

    const customerFeatures = [
        {
            icon: "/assets/icons/core-features1.svg",
            title: "Easy Coach Discovery",
            description: "Browse and find the perfect coach based on your goals, preferences, and budget."
        },
        {
            icon: "/assets/icons/core-features2.svg",
            title: "Secure Booking System",
            description: "Book sessions with confidence using our secure scheduling platform."
        },
        {
            icon: "/assets/icons/core-features3.svg",
            title: "Progress Tracking",
            description: "Monitor your journey with detailed progress reports and milestone tracking."
        },
        {
            icon: "/assets/icons/core-features4.svg",
            title: "Flexible Payment Options",
            description: "Pay securely with multiple payment methods including M-Pesa integration."
        },
        {
            icon: "/assets/icons/core-features5.svg",
            title: "Session History",
            description: "Access all your past sessions, notes, and resources in one place."
        },
        {
            icon: "/assets/icons/core-features6.svg",
            title: "24/7 Support",
            description: "Get help whenever you need it with our round-the-clock customer support."
        }
    ];

    const coachFeatures = [
        {
            icon: "/assets/icons/core-features1.svg",
            title: "Seamless M-Pesa Payments",
            description: "Simple and intuitive design for hassle-free planning."
        },
        {
            icon: "/assets/icons/core-features2.svg",
            title: "Smart Booking & Scheduling",
            description: "Manage your calendar with automated booking and smart scheduling tools."
        },
        {
            icon: "/assets/icons/core-features3.svg",
            title: "Personal Profile + Portfolio",
            description: "Showcase your expertise with a professional profile and portfolio showcase."
        },
        {
            icon: "/assets/icons/core-features4.svg",
            title: "Marketplace Visibility",
            description: "Get discovered by potential clients through our optimized marketplace."
        },
        {
            icon: "/assets/icons/core-features5.svg",
            title: "Reviews & Testimonials",
            description: "Build credibility with client reviews and testimonial management system."
        },
        {
            icon: "/assets/icons/core-features6.svg",
            title: "Earnings Dashboard",
            description: "Track your income, sessions, and performance with comprehensive analytics."
        }
    ];

    const currentFeatures = activeTab === 'customers' ? customerFeatures : coachFeatures;

    return (
        <>
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: scaleX(0);
                        opacity: 0;
                    }
                    to {
                        transform: scaleX(1);
                        opacity: 1;
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                    transform-origin: left;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out;
                }
            `}</style>
            <div className="w-full pt-[100px] pb-[150px] md:px-8 px-5 bg-[url('/assets/core-bg.svg')] bg-no-repeat bg-cover bg-center">
                <div className="max-w-[1127px] mx-auto">
                    {/* Header */}
                    <div className="text-center w-full">
                        <h2 className="text-[24px] sm:text-[40px] sm:leading-[44px] font-bold text-[#181E4B] mb-4">
                            Core Features
                        </h2>
                        <p className="text-[#8896AB] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] max-w-[919px] mx-auto mb-4">
                            {activeTab === 'customers'
                                ? 'Discover and connect with expert coaches to accelerate your personal and professional growth journey.'
                                : 'Empower your coaching business with tools designed to help you reach more clients and maximize your impact.'
                            }
                        </p>
                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-[56px] h-[44px] max-w-fit mx-auto items-center border-b border-[#8896AB]">
                            <button
                                onClick={() => setActiveTab('customers')}
                                className={`px-3 sm:px-4 text-[20px] sm:text-[24px] sm:leading-[28px] h-full flex items-center relative transition-colors cursor-pointer ${activeTab === 'customers'
                                    ? 'text-[#3A96AF] font-bold'
                                    : 'text-[#8896AB] font-medium'
                                    }`}
                            >
                                For Customers
                                {activeTab === 'customers' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A96AF] animate-slideIn"></div>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('coaches')}
                                className={`px-3 sm:px-4 text-[20px] sm:text-[24px] sm:leading-[28px] h-full flex items-center relative transition-colors cursor-pointer ${activeTab === 'coaches'
                                    ? 'text-[#3A96AF] font-bold'
                                    : 'text-[#8896AB] font-medium'
                                    }`}
                            >
                                For Coaches
                                {activeTab === 'coaches' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A96AF] animate-slideIn"></div>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[46px] gap-y-[36px] animate-fadeIn" key={activeTab}>
                        {currentFeatures.map((feature, index) => (
                            <div key={index} className="text-center transition duration-300 hover:shadow-md flex items-center justify-center flex-col bg-white rounded-[20px] pb-3.5 pt-6 px-6">
                                {/* Icon */}
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={60}
                                    height={62}
                                />
                                {/* Content */}
                                <h3 className="mt-5 mb-2 text-[20px] leading-[32px] font-semibold text-[#181E4B]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#8896AB] text-[16px] leading-[25px] font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoreFeatures;