import React from "react";
import Image from "next/image";

const WhyElevana = () => {
  return (
    <section
      className="w-full py-12 md:py-16 px-4 bg-white relative"
      style={{
        backgroundImage: "url('/assets/connector-lines/dashed-circles.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-center text-[28px] md:text-[40px] font-bold text-[#252525] mb-8 md:mb-16">
          Why Elevana?
        </h2>

        <div className="hidden grid-cols-1 gap-4 md:gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[20px] md:p-[24px] w-full">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/icons/1.png"
                alt="Losing Client Icon"
                width={64}
                height={64}
                className="md:w-[80px] md:h-[80px]"
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-3 md:mb-4">
              Losing Client due to messy onboarding
            </h3>
            <p className="text-[#486284] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]">
              A clunky first impression can cost you trust—and business.
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[20px] md:p-[24px] w-full md:translate-y-8">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/icons/2.png"
                alt="Admin Burnout Icon"
                width={64}
                height={64}
                className="md:w-[80px] md:h-[80px]"
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-3 md:mb-4">
              Admin burnout and inconsistent income
            </h3>
            <p className="text-[#486284] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]">
              Manual tasks and unpredictable payments drain your energy and
              revenue.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[20px] md:p-[24px] w-full">
            <div className="mb-4 md:mb-6">
              <Image
                src="/assets/icons/3.png"
                alt="Juggling Tools Icon"
                width={64}
                height={64}
                className="md:w-[80px] md:h-[80px]"
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-3 md:mb-4">
              Juggling with too many tools
            </h3>
            <p className="text-[#486284] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]">
              Switching between scattered apps wastes time and breaks your flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyElevana;
