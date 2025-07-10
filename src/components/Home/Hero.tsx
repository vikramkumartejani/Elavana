"use client";
import type React from "react";
import Image from "next/image";
import Link from "next/link";

const firstColumnImages = [
  {
    src: "/assets/hero/1.jpg",
    alt: "People in a meeting",
    width: 200,
    height: 150,
  },
  {
    src: "/assets/hero/2.jpg",
    alt: "Team discussion",
    width: 200,
    height: 150,
  },
  {
    src: "/assets/hero/3.jpg",
    alt: "Group collaboration",
    width: 200,
    height: 150,
  },
];

const secondColumnImages = [
  {
    src: "/assets/hero/4.jpg",
    alt: "Corporate meeting",
    width: 200,
    height: 150,
  },
  {
    src: "/assets/hero/5.jpg",
    alt: "Business meeting",
    width: 210,
    height: 155,
  },
  {
    src: "/assets/hero/6.jpg",
    alt: "Professional consultation",
    width: 185,
    height: 135,
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden max-h-[715px] h-full min-h-[715px] px-5 md:px-8">
      {/* Background shapes */}
      {/* <Image
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
      /> */}

      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row justify-between gap-6 items-center max-h-[715px] min-h-[715px] h-[715px]">
        {/* Left content */}
        <div className="w-full lg:max-w-[625px] z-10 pt-6 lg:pt-0">
          <h1 className="text-[#252525] text-[26px] sm:text-[40px] xl:text-[56px] leading-[32px] sm:leading-[50px] xl:leading-[78px] font-bold mb-2 sm:mb-4 xl:mb-6">
            Where Experts Elevate, <br /> and Ambitions Grow.
          </h1>
          <p className="text-[#252525] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[28px] font-normal max-w-[554px]">
            Discover top Services for your career and personal growth, or build
            your practice and income as a trusted expert.
          </p>
          <div className="mt-6 sm:mt-8 xl:mt-[56px]">
            <h2 className="text-[24px] sm:text-[34px] leading-[30px] sm:leading-[40px] font-semibold text-[#252525]">I want to..</h2>
            <div className="mt-3 sm:mt-4 xl:mt-6 flex items-center gap-x-3 gap-y-2 flex-wrap">
              <Link href="/service-providers" className="flex items-center justify-center px-4 py-2.5 sm:p-4 gap-2 bg-[#3A96AF] transition duration-200 hover:bg-[#2d7a8f] text-white rounded-[99px]">
                <span className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[22px] font-semibold tracking-[0.5px]">Discover coaches/experts</span>
                <Image src="/assets/icons/right-arrow.svg" alt="arrow-right" width={24} height={24} />
              </Link>
              <Link href="/for-coaches-mentor" className="flex items-center justify-center px-4 py-2.5 sm:p-4 gap-2 bg-[#3A96AF] transition duration-200 hover:bg-[#2d7a8f] text-white rounded-[99px]">
                <span className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[22px] font-semibold tracking-[0.5px]">Join as a coach/expert</span>
                <Image src="/assets/icons/right-arrow.svg" alt="arrow-right" width={24} height={24} />
              </Link>
              <Link href="/customer-home" className="flex items-center justify-center px-4 py-2.5 sm:p-4 gap-2 bg-[#3A96AF] transition duration-200 hover:bg-[#2d7a8f] text-white rounded-[99px]">
                <span className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[22px] font-semibold tracking-[0.5px]">Grow my business</span>
                <Image src="/assets/icons/right-arrow.svg" alt="arrow-right" width={24} height={24} />
              </Link>
              <Link href="/service-providers" className="flex items-center justify-center px-4 py-2.5 sm:p-4 gap-2 bg-[#3A96AF] transition duration-200 hover:bg-[#2d7a8f] text-white rounded-[99px]">
                <span className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[22px] font-semibold tracking-[0.5px]">Improve my professional skills</span>
                <Image src="/assets/icons/right-arrow.svg" alt="arrow-right" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side animated image columns */}
        <div className="w-full lg:min-w-[598px] lg:max-w-[598px] relative min-h-screen overflow-hidden">
          {/* Background overlay */}
          <div
            className="absolute top-0 left-0 w-full z-20 pointer-events-none"
            style={{
              height: "100px",
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 23.08%, rgba(255, 255, 255, 0.1) 62.02%)",
            }}
          />
          {/* First column - moving up */}
          <div className="absolute left-0 h-full w-1/2 lg:w-full pr-2 lg:pr-0 lg:max-w-[350px]">
            <div className="animate-scroll-up-infinite flex flex-col gap-2">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-col gap-2">
                  {firstColumnImages.map((image, imgIndex) => (
                    <div
                      key={`${setIndex}-${imgIndex}`}
                      className="w-full h-[30vw] md:h-[25vw] lg:h-[355px] rounded-lg overflow-hidden shadow-lg mx-auto"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Second column - moving down */}
          <div className="absolute right-0 w-1/2 lg:w-full lg:max-w-[239px] h-full">
            <div className="animate-scroll-down-infinite flex flex-col gap-2">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-col gap-2">
                  {secondColumnImages.map((image, imgIndex) => (
                    <div
                      key={`${setIndex}-${imgIndex}`}
                      className="w-full h-[35vw] md:h-[30vw] lg:h-[430px] rounded-lg overflow-hidden shadow-lg mx-auto"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up-infinite {
          0% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down-infinite {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(-25%);
          }
        }

        .animate-scroll-up-infinite {
          animation: scroll-up-infinite 100s linear infinite;
        }

        .animate-scroll-down-infinite {
          animation: scroll-down-infinite 150s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-up-infinite,
          .animate-scroll-down-infinite {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
