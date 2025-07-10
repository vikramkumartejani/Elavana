"use client";
import React, { useState, useRef, useEffect } from "react";
import RippleButton from "../ui/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jenna May",
    role: "Business Analyst",
    content:
      "Ive had the pleasure of being mentored by Kiril who is not only deeply knowledgeable in data analytics but also possesses a keen ability to listen and comprehend intricate business challenges. His approach is thoughtful and considerate. I genuinely appreciate his guidance and am thankful for the insights he has shared.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Ive had the pleasure of being mentored by Kiril who is not only deeply knowledgeable in data analytics but also possesses a keen ability to listen and comprehend intricate business challenges. His approach is thoughtful and considerate. I genuinely appreciate his guidance and am thankful for the insights he has shared.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Data Scientist",
    content:
      "Ive had the pleasure of being mentored by Kiril who is not only deeply knowledgeable in data analytics but also possesses a keen ability to listen and comprehend intricate business challenges. His approach is thoughtful and considerate. I genuinely appreciate his guidance and am thankful for the insights he has shared.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Marketing Director",
    content:
      "Ive had the pleasure of being mentored by Kiril who is not only deeply knowledgeable in data analytics but also possesses a keen ability to listen and comprehend intricate business challenges. His approach is thoughtful and considerate. I genuinely appreciate his guidance and am thankful for the insights he has shared.",
  },
  {
    id: 5,
    name: "Jenna May",
    role: "Business Analyst",
    content:
      "Ive had the pleasure of being mentored by Kiril who is not only deeply knowledgeable in data analytics but also possesses a keen ability to listen and comprehend intricate business challenges. His approach is thoughtful and considerate. I genuinely appreciate his guidance and am thankful for the insights he has shared.",
  },
];
const SLIDER_SIDE_PADDING = 24;
interface ArrowButtonProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}
const WhatClientSays: React.FC = () => {
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    }
    return 3;
  };
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-[#F6FCFD] w-full">
      <div className="w-full mx-auto py-[40px] sm:py-[50px]">
        <h1 className="text-[#12142A] text-[24px] sm:text-[40px] sm:leading-[52px] font-bold text-center">
          What Cilents Says
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={24}
          navigation={{
            nextEl: ".trusted-swiper-next",
            prevEl: ".trusted-swiper-prev",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            el: ".trusted-swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<button class='${className} rounded-full w-3.5 h-3.5 mx-1 transition-all duration-200'></button>`;
            },
          }}
          className="my-[28px] !px-[12px] sm:!px-[24px] hide-scrollbar"
          style={{
            paddingLeft: SLIDER_SIDE_PADDING,
            paddingRight: SLIDER_SIDE_PADDING,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-white rounded-2xl gap-[12px] flex-shrink-0 flex flex-col items-start text-center min-h-[421px] p-[20px] sm:p-[30px] max-w-[540px] mx-auto"
                style={{
                  boxShadow: "0px 4px 24px 0px #3A96AF14",
                }}
              >
                <div className="flex gap-3 items-center justify-start">
                  <Image
                    src="/assets/profile.svg"
                    alt="profile"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="mt-4 mb-1 text-[#1C1F21] text-[18px] sm:text-[24px] sm:leading-[34px] font-medium">
                      {testimonial.name}
                    </h2>
                    <h4 className="mb-3 text-[#4E555A] text-[14px] sm:text-[18px] font-medium sm:leading-[25px]">
                      {testimonial.role}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-start">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Image
                        key={index}
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                </div>
                <p className="text-[#4E555A] text-[16px] sm:text-[20px] sm:leading-[26px] text-start font-normal">
                  {testimonial.content}
                </p>
                <div className="flex gap-3 items-center justify-start">
                  <Image
                    src="/assets/profile.svg"
                    alt="profile"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="mt-4 mb-1 text-[#1C1F21] text-[16px] sm:text-[20px] sm:leading-[30px] font-medium">
                      {testimonial.name}
                    </h2>
                    <h4 className="mb-3 text-[#4E555A] text-[12px] sm:text-[16px] font-medium sm:leading-[20px]">
                      {testimonial.role}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-5 mt-4">
          <div className="flex items-center justify-center gap-3 sm:gap-x-5 gap-y-0">
            <button
              className="trusted-swiper-prev cursor-pointer"
              aria-label="Previous"
            >
              <span className="arrow-enabled">
                <svg
                  className="rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18"
                    stroke="#3A96AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="arrow-disabled">
                <svg
                  className="rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18"
                    stroke="#B8C9C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div className="trusted-swiper-pagination flex items-center gap-3 sm:!gap-5"></div>
            <button
              className="trusted-swiper-next cursor-pointer"
              aria-label="Next"
            >
              <span className="arrow-enabled">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18"
                    stroke="#3A96AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="arrow-disabled">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18"
                    stroke="#B8C9C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .trusted-swiper-pagination .swiper-pagination-bullet {
          background: #d9e3de;
          width: 14px !important;
          height: 14px !important;
          opacity: 1;
        }
        .trusted-swiper-pagination .swiper-pagination-bullet-active {
          background: #3a96af;
          width: 14px !important;
          height: 14px !important;
        }
        .swiper-button-disabled {
          border: 1px solid #D9E3DE/30 !important;
          pointer-events: none;
        }
        .trusted-swiper-prev,
        .trusted-swiper-next {
          width: 44px !important;
          height: 44px !important;
          min-width: 44px !important;
          min-height: 44px !important;
          max-width: 44px !important;
          max-height: 44px !important;
          border-radius: 9999px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #fff !important;
          border: 1px solid #d9e3de !important;
          transition: all 0.2s;
        }
        .trusted-swiper-prev .arrow-disabled,
        .trusted-swiper-next .arrow-disabled {
          display: none;
        }
        .swiper-button-disabled .arrow-enabled {
          display: none;
        }
        .swiper-button-disabled .arrow-disabled {
          display: inline;
        }
      `}</style>
    </div>
  );
};
export default WhatClientSays;
