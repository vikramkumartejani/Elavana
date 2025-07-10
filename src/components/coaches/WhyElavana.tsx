import { Card } from "@/components/ui/card";
import Image from "next/image";

const WhyElevana = () => {
  return (
    <section
      className="w-full py-16 px-4 bg-white"
      style={{
        backgroundImage: "url('/assets/connector-lines/dashed-circles.svg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-center text-[40px] font-bold text-[#252525] mb-16">
          Why Elevana?
        </h2>

        <div className="flex gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[24px]">
            <div className="mb-6">
              <Image
                src="/assets/icons/1.png"
                alt="Losing Client Icon"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-4">
              Losing Client due to messy onboarding
            </h3>
            <p className="text-[#486284] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]">
              A clunky first impression can cost you trust—and business.
            </p>
          </div>

          {/* Second Card (Lowered with transform) */}
          <div
            className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[24px]"
            style={{ transform: "translateY(32px)" }}
          >
            <div className="mb-6">
              <Image
                src="/assets/icons/2.png"
                alt="Admin Burnout Icon"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-4">
              Admin burnout and inconsistent income
            </h3>
            <p className="text-[#486284] text-[14px] leading-[18px] md:text-[16px] md:leading-[20px]">
              Manual tasks and unpredictable payments drain your energy and
              revenue.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col items-center text-center rounded-[15px] border border-[#D4D2E3] p-[24px]">
            <div className="mb-6">
              <Image
                src="/assets/icons/3.png"
                alt="Juggling Tools Icon"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-[#486284] text-[18px] md:text-[24px] md:leading-[32px] font-semibold mb-4">
              Juggling with to many tools
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
