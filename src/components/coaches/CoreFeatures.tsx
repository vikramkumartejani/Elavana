"use client";
import React from "react";
import Image from "next/image";

const CoreFeatures: React.FC = () => {
  const features = [
    {
      position: "md:top-[30px] md:left-[-30px]",
      border: "border-l-2 border-[#D97E59]",
      icon: "/assets/icons/core-features1.svg",
      alt: "Client Management",
      title: "Client Management Dashboard",
    },
    {
      position: "md:top-[30px] max-w-[420px] md:right-[-30px]",
      border: "border-r-2 border-[#D97E59]",
      icon: "/assets/icons/core-features2.svg",
      alt: "Automated Scheduling",
      title: "Automated Scheduling & Reminders",
    },
    {
      position: "md:top-[50%] md:left-[70px]  transform -translate-y-1/2",
      border: "border-l-2 border-[#D97E59]",
      icon: "/assets/icons/core-features3.svg",
      alt: "Community Space",
      title: "Built In Community Space",
    },
    {
      position: "top-1/2 md:right-[70px] max-w-[420px] transform -translate-y-1/2",
      border: "border-r-2 border-[#D97E59]",
      icon: "/assets/icons/core-features4.svg",
      alt: "On Demand Invoicing",
      title: "On Demand Invoicing",
    },
    {
      position: "md:bottom-[30px] md:left-[-30px]",
      border: "border-l-2 border-[#D97E59]",
      icon: "/assets/icons/core-features5.svg",
      alt: "Analytics",
      title: "Analytics & Performing Tracking",
    },
    {
      position: "md:bottom-[30px] max-w-[420px] md:right-[-30px]",
      border: "border-r-2 border-red-600",
      icon: "/assets/icons/core-features6.svg",
      alt: "Custom Coaching",
      title: "Custom Coaching Packages And Digital Products",
    },
  ];

  return (
    <section className="w-full py-16 md:pt-[100px] pb-[116px] overflow-hidden px-5 md:px-8" style={{ backgroundImage: 'url(/assets/coaches-core-section-bg.svg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="mb-12 sm:mb-16 max-w-[919px] mx-auto w-full text-center">
          <h2 className="text-[48px] leading-[66px] font-bold text-[#181E4B] mb-2">
            Core Features
          </h2>
          <p className="text-[#8896AB] text-[20px] leading-[25px] font-normal">
            Become the best version of yourself by accessing to the perspectives
            and life experiences of others who've been there, done that.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto ">
          {/* Dashboard mockup image in center */}
          <div className="relative z-10 overflow-hidden w-full max-w-[700px] mx-auto ">
            <Image
              src="/assets/admin.svg"
              alt="Dashboard Mockup"
              width={700}
              height={527}
              className="h-auto w-full"
            />
          </div>

          {/* Feature cards positioned around the dashboard */}
          <div className=" z-20 hidden md:block max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`absolute z-20 ${feature.position}`}
              >
                <div
                  className={`flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg ${feature.border}`}
                >
                  <div className="flex-shrink-0 mr-3 md:mr-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                      <Image
                        src={feature.icon}
                        alt={feature.alt}
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
