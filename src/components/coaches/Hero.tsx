"use client";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import RippleButton from "../ui/Button";
import ContactWithUsModal from "../ContactWithUsModal";
import { useState } from "react";

const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="relative w-full bg-white overflow-hidden min-h-[100vh] md:min-h-screen">
      {/* Background shapes */}
      <Image
        src="/assets/elements/circle.png"
        alt="hero-bg"
        width={32}
        height={32}
        className="absolute top-[25%] left-[45%] -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
      />
      <Image
        src="/assets/elements/triangle.png"
        alt="hero-bg"
        width={64}
        height={45}
        className="absolute top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
      />
      <Image
        src="/assets/elements/double-circle.png"
        alt="hero-bg"
        width={42}
        height={46}
        className="absolute bottom-[5%] left-[45%] -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
      />
      <Image
        src="/assets/elements/rectangle.png"
        alt="hero-bg"
        width={80}
        height={34}
        className="absolute bottom-[5%] left-[-1%] -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
      />
      <Image
        src="/assets/elements/rectangle-2.png"
        alt="hero-bg"
        width={80}
        height={34}
        className="absolute bottom-[5%] left-[25%] -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
      />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        {/* Left content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 py-8 md:py-12 lg:py-24 z-10">
          <h1 className="text-[8vw] leading-[1.2] md:text-[4vw] md:leading-[1.2] lg:text-[3.5vw] lg:leading-[1.4] font-bold text-[#252525] mb-4 md:mb-6">
            Build. Brand. Scale. <br />
            Your Coaching Empire
            <br /> Starts Here.
          </h1>
          <p className="text-[4vw] leading-[1.5] md:text-[1.5vw] md:leading-[1.5] lg:text-[1.25vw] lg:leading-[1.5] text-gray-600 mb-6 md:mb-10 max-w-[90%] md:max-w-xl">
            Turn your expertise into impact and income with an all-in-one
            coaching platform.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 md:gap-4">
              <Link
                href="/registration"
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#3A96AF] text-white px-4 py-3 md:px-6 md:py-4 rounded-full hover:bg-[#2d7a8c] transition-colors"
              >
                Start Free Today
              </Link>
              <RippleButton
                onClick={handleOpenContactModal}
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#F7F8F9] text-[#3A96AF] hover:bg-[#f1f5fa] px-4 py-3 md:px-6 md:py-4 rounded-full  transition-colors"
              >
                Book a 15 Minute Demo
              </RippleButton>
            </div>
          </div>
        </div>

        {/* Right side animated image columns */}
        <div className="w-full md:w-1/2 relative p-6  h-[50vh] md:h-[80vh] lg:h-screen max-h-[648px] max-w-[640px] overflow-hidden">
          <Image
            src="/assets/hero/4.jpg"
            alt="hero-image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactWithUsModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
    </div>
  );
};

export default Hero;
