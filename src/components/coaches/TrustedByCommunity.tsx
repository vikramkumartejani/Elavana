"use client";
import React from "react";
import Image from "next/image";

const TrustedByCommunity: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            Trusted by our community
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Become the best version of yourself by accessing to the perspectives
            and life experiences of others who've been there, done that.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Dashboard mockup with rounded corners and shadow */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/assets/hero/dashboard.png"
              alt="Dashboard Mockup"
              width={1200}
              height={675}
              className="w-full h-auto"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-105">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10 ml-1"
                >
                  <path d="M8 5V19L19 12L8 5Z" fill="#3A96AF" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCommunity;
