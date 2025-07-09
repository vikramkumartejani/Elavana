"use client";
import type React from "react";
import Image from "next/image";
import Link from "next/link";

// Define image arrays
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
            Where Experts Elevate
            <br />
            and Ambitions Grow.
          </h1>
          <p className="text-[4vw] leading-[1.5] md:text-[1.5vw] md:leading-[1.5] lg:text-[1.25vw] lg:leading-[1.5] text-gray-600 mb-6 md:mb-10 max-w-[90%] md:max-w-xl">
            Discover top Services for your career and personal growth, or build
            your practice and income as a trusted expert.
          </p>
          <div className="space-y-4">
            <h2 className="text-[6vw] leading-[1.3] md:text-[2.5vw] md:leading-[1.3] lg:text-[2vw] lg:leading-[1.3] font-medium text-[#252525] mb-4">
              I want to..
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <Link
                href="/service-providers"
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#3A96AF] text-white px-4 py-3 md:px-6 md:py-4 rounded-full hover:bg-[#2d7a8c] transition-colors"
              >
                <span>Discover coaches/experts</span>
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </Link>
              <Link
                href="/for-coaches-mentor"
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#3A96AF] text-white px-4 py-3 md:px-6 md:py-4 rounded-full hover:bg-[#2d7a8c] transition-colors"
              >
                <span>Join as a coach/expert</span>
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </Link>
              <Link
                href="/customer-home"
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#3A96AF] text-white px-4 py-3 md:px-6 md:py-4 rounded-full hover:bg-[#2d7a8c] transition-colors"
              >
                <span>Grow my business</span>
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </Link>
              <Link
                href="/service-providers"
                className="flex items-center justify-between text-[3.5vw] leading-[1.3] md:text-[1.25vw] md:leading-[1.3] lg:text-[1.125vw] lg:leading-[1.3] bg-[#3A96AF] text-white px-4 py-3 md:px-6 md:py-4 rounded-full hover:bg-[#2d7a8c] transition-colors"
              >
                <span>Improve my professional skills</span>
                <Image
                  src="/assets/icons/right-arrow.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side animated image columns */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh] lg:h-screen overflow-hidden">
          {/* First column - moving up */}
          <div className="absolute left-0 ml-[2%] w-[55%] md:w-[60%] h-full">
            <div className="animate-scroll-up-infinite flex flex-col gap-4 md:gap-6">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-col gap-4 md:gap-6">
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
          <div className="absolute right-0 w-[40%] md:w-[35%] h-full">
            <div className="animate-scroll-down-infinite flex flex-col gap-4 md:gap-6">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-col gap-4 md:gap-6">
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
            transform: translateY(-75%);
          }
        }

        @keyframes scroll-down-infinite {
          0% {
            transform: translateY(-75%);
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
