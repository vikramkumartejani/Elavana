"use client";
import React, { useState, useEffect } from "react";
import { Service } from "../types";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import Recommendation from "./Recommendation";
import RippleButton from "@/components/ui/Button";
import HalfStar from "@/SvgIcons/HalfStar";
import FullStar from "@/SvgIcons/FullStar";
import WhatIsIncluded from "../WhatIsIncluded";
import ReviewModal from "./ReviewModal";
import SocialLinks from "../SocialLinks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Mappin from "@/SvgIcons/Mappin";
import Calendar from "@/SvgIcons/Calendar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

interface ServiceDetailsProps {
  service: Service;
}

const getSlidesPerView = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }
  return 3; // Default to 3 slides if window is not available
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const [quantity, setQuantity] = useState(1);
  const [reviewOpen, setReviewOpen] = useState(false);
  const minQuantity = 1;
  const maxQuantity = 5;
  const router = useRouter();

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sessions = [
    { day: "FRI", date: "16 May" },
    { day: "SAT", date: "17 May" },
    { day: "MON", date: "19 May" },
    { day: "TUE", date: "20 May" },
  ];
  const timeSlots = ["4:00 PM", "7:00 PM", "9:00 PM", "11:00 PM"];
  const [activeSession, setActiveSession] = useState(0);
  const [activeTimeSlot, setActiveTimeSlot] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("student");
  const [packageQuantity, setPackageQuantity] = useState(1);
  const [generalPackageQuantity, setGeneralPackageQuantity] = useState(0);
  const [vipPackageQuantity, setVipPackageQuantity] = useState(0);

  // Package options
  const packages = [
    {
      id: "student",
      name: "Student Package",
      price: "200$",
      features: [
        "Entry to all keynote talks (2 days)",
        "Conference welcome kit",
        "Access to networking lounges",
      ],
    },
    {
      id: "member",
      name: "Member Package",
      price: "250$",
      features: [],
    },
    {
      id: "non-member",
      name: "Non- Member Package",
      price: "300$",
      features: [],
    },
  ];

  // Add-on options
  const addOns = [
    { id: "merch-small", name: "Merchandise Pack", price: "2$" },
    { id: "lunch", name: "Lunch", price: "5$" },
    { id: "merch-large", name: "Merchandise Pack", price: "10$" },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const speakers = [
    {
      id: 1,
      image: "/assets/speakers/1.png",
      name: "Daniel Rivera",
      role: "Senior UX Designer – Google",
      description:
        "Known for creating seamless user flows and motion-enhanced UI experiences.",
      verified: true,
    },
    {
      id: 2,
      image: "/assets/speakers/2.png",
      name: "Liam O'Connell",
      role: "Head of Design – Notion",
      description:
        "Expert in qualitative research and user testing in global markets.",
      verified: true,
    },
    {
      id: 3,
      image: "/assets/speakers/3.png",
      name: "Mei Tanaka",
      role: "Lead Product Designer – Spotify",
      description:
        "Focuses on simplicity, systems thinking, and scaling design across teams.",
      verified: true,
    },
  ];

  // Calculate total price including base service, packages, and add-ons
  const calculateTotal = () => {
    let total = service.price;

    // Add package prices based on selected package and quantity
    if (selectedPackage === "student") {
      total += packageQuantity * 200;
    } else if (selectedPackage === "member") {
      // For member package, add both General and VIP package prices
      total += generalPackageQuantity * 50; // General Package
      total += vipPackageQuantity * 60; // VIP Package
    } else if (selectedPackage === "non-member") {
      total += packageQuantity * 300; // Non-member package price
    }

    // Add add-on prices
    selectedAddOns.forEach((addonId) => {
      const addon = addOns.find((a) => a.id === addonId);
      if (addon) {
        // Remove the $ sign and convert to number
        total += parseFloat(addon.price.replace("$", "").trim());
      }
    });

    return total;
  };

  return (
    <>
      <Navbar />
      <div className="px-5 md:px-8 w-full pt-6 sm:pt-8 pb-[150px]">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="w-full flex items-start justify-between lg:flex-row flex-col gap-6 lg:gap-4">
            {/* Left Side */}
            <div className="lg:max-w-[740px] space-y-[24px] w-full">
              <Image
                src="/assets/service-details-placeholder.png"
                alt="image"
                width={740}
                height={314}
                className="h-[314px] rounded w-full object-cover"
              />
              <div className="my-4 sm:my-6 flex items-start justify-between sm:flex-row flex-col gap-3">
                <div className="flex flex-col gap-2 sm:gap-3 items-start">
                  <h3 className="text-[#252525] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] tracking-[0.5px] font-semibold">
                    {service.title}
                  </h3>
                  {/* Reviews */}
                  <button
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setReviewOpen(true)}
                  >
                    <div className="flex items-center gap-1">
                      <FullStar />
                      <FullStar />
                      <FullStar />
                      <FullStar />
                      <HalfStar />
                    </div>
                    <h2 className="text-[#676D75] text-[18px] leading-[20px] font-medium mt-0.5">
                      288 reviews
                    </h2>
                  </button>
                  <ReviewModal
                    open={reviewOpen}
                    onClose={() => setReviewOpen(false)}
                  />
                </div>
                <div>
                  <h3 className="text-[#333333] text-[12px] leading-[16px] tracking-[1%] font-medium mb-3">
                    Share with Friends
                  </h3>
                  <SocialLinks />
                </div>
              </div>

              <div className="bg-[#D9D9D9] h-[2px] w-full" />

              <div className="my-4 sm:my-6">
                <h1 className="mb-3 text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold tracking-[0.5px]">
                  Service Provider
                </h1>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/profile.svg"
                      alt="profile"
                      width={48}
                      height={48}
                      className="rounded-full sm:w-[50px] w-[40px]"
                    />
                    <div>
                      <h2 className="text-[#252525] text-[14px] sm:text-[16px] leading-[16px] sm:leading-[20px] font-semibold">
                        Amy Watson
                      </h2>
                      <h4 className="text-[#676D75] text-[12px] leading-[16px] font-medium mt-1">
                        Certified Career Coach
                      </h4>
                    </div>
                  </div>
                  <Link href="/service-provider-profile">
                    <RippleButton className="border border-[#3A96AF] bg-[#3A96AF] h-[36px] sm:h-[40px] rounded-lg px-4 text-white text-[12px] leading-[16px] tracking-[0.5px] font-medium">
                      View Profile
                    </RippleButton>
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-semibold mb-3">
                  Location
                </h1>
                <div className="flex items-center gap-2">
                  <Mappin />
                  <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-normal">
                    Safaricom Stadium Kasarani, Kasarani, Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-semibold mb-3">
                  Date & Time
                </h1>
                <div className="flex items-center gap-2">
                  <Calendar />
                  <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-normal">
                    Sat 17 May 2025 07:00 AM - Sun 18 May 2025 06:00 PM
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-semibold mb-3">
                  Description
                </h1>
                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-normal">
                  {service.description}
                </p>
              </div>

              <WhatIsIncluded
                items={[
                  "1-on-1 Video Call",
                  "60 - minute session",
                  "Personalized Career Plan",
                  "Post-session follow-up message",
                ]}
              />

              {/* Speakers Section - Only for events */}
              {["event", "workshops", "conference"].includes(
                service.category
              ) && (
                <div className="w-full mt-8 sm:mt-12">
                  <h1 className="text-[#12142A] text-[24px] sm:text-[40px] sm:leading-[52px] font-bold text-center mb-6 sm:mb-8">
                    Meet Our Speakers
                  </h1>

                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    navigation={{
                      nextEl: ".speakers-swiper-next",
                      prevEl: ".speakers-swiper-prev",
                    }}
                    pagination={{
                      el: ".speakers-swiper-pagination",
                      type: "bullets",
                      clickable: true,
                    }}
                    className="speakers-swiper"
                  >
                    {speakers.map((speaker) => (
                      <SwiperSlide key={speaker.id}>
                        <div
                          className="bg-white rounded-2xl flex-shrink-0 flex flex-col items-center text-center p-[20px] sm:p-[30px] max-w-[540px] mx-auto"
                          style={{
                            boxShadow: "0px 4px 24px 0px #3A96AF14",
                          }}
                        >
                          <div className="relative mb-4">
                            <Image
                              src={speaker.image}
                              alt={`${speaker.name} profile`}
                              width={120}
                              height={120}
                              className="rounded-full w-[120px] h-[120px] object-cover"
                            />
                            {speaker.verified && (
                              <svg
                                className="absolute bottom-0 right-0"
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_257_2103)">
                                  <path
                                    d="M6.98819 0.0303602C6.69664 0.108991 6.50664 0.236765 5.90062 0.767522C5.2389 1.34742 5.17666 1.39329 4.87529 1.49813C4.68201 1.56693 4.58374 1.57348 3.77789 1.58987C2.90325 1.60952 2.89015 1.60952 2.70342 1.69798C2.33326 1.87162 2.01223 2.27133 1.93033 2.66776C1.91068 2.76605 1.8943 3.16903 1.8943 3.58512C1.89102 4.64335 1.89757 4.63352 1.06224 5.60658C0.780522 5.9342 0.544664 6.24545 0.485699 6.36012C0.282599 6.7631 0.282599 7.23488 0.485699 7.63459C0.544664 7.75253 0.780522 8.0605 1.06224 8.39141C1.64206 9.06632 1.7174 9.17444 1.81568 9.45292C1.88775 9.65605 1.8943 9.7183 1.8943 10.4129C1.8943 10.8355 1.91068 11.2319 1.93033 11.3302C2.0155 11.7299 2.30705 12.1034 2.67722 12.2836L2.89342 12.3885L3.79427 12.4081C5.03253 12.431 4.91787 12.3852 5.98579 13.3025C6.33302 13.5974 6.62457 13.8202 6.73267 13.8693C7.11594 14.0463 7.58766 14.043 7.96438 13.8628C8.06265 13.8169 8.40661 13.5483 8.78333 13.2239C9.41229 12.6833 9.59573 12.5555 9.8709 12.4704C9.9528 12.4442 10.3328 12.4212 10.8864 12.4081C11.7709 12.3885 11.7709 12.3885 11.9576 12.2967C12.2033 12.1755 12.4719 11.9298 12.5833 11.7201C12.734 11.4482 12.77 11.1893 12.77 10.403C12.77 9.66915 12.7929 9.50206 12.9338 9.22686C12.9665 9.16461 13.245 8.81732 13.5529 8.45693C13.8608 8.09654 14.1524 7.72632 14.1982 7.63131C14.3784 7.26765 14.3784 6.74672 14.1982 6.3765C14.1458 6.26838 13.887 5.9342 13.5562 5.5476C13.0157 4.91856 12.8879 4.73181 12.8028 4.45988C12.7765 4.37797 12.7536 3.9881 12.7405 3.44424L12.7209 2.55964L12.6226 2.36307C12.5014 2.11079 12.2197 1.82903 11.9674 1.70781L11.7709 1.60952L10.8864 1.58987C10.3328 1.57676 9.9528 1.55383 9.8709 1.52762C9.60228 1.44571 9.41229 1.31793 8.86195 0.846152C8.09541 0.187621 8.0561 0.158134 7.85628 0.0827808C7.63352 -0.00240231 7.21094 -0.0253363 6.98819 0.0303602ZM10.0609 4.84976C10.2018 4.90873 10.3393 5.07254 10.3655 5.2167C10.4114 5.47225 10.3983 5.49191 8.52127 7.36593C6.99474 8.8894 6.73922 9.12857 6.62129 9.16461C6.35268 9.24324 6.32647 9.2203 5.29459 8.18828C4.51495 7.40525 4.35116 7.22178 4.32167 7.11366C4.25288 6.85156 4.4134 6.57963 4.68529 6.50427C4.93098 6.43875 5.01615 6.501 5.77613 7.26109C6.15285 7.63786 6.47716 7.94911 6.49681 7.94911C6.51647 7.94911 7.21422 7.26109 8.05282 6.42237C8.89143 5.58364 9.62194 4.87597 9.67435 4.84976C9.80211 4.79406 9.92659 4.79406 10.0609 4.84976Z"
                                    fill="#3A96AF"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_257_2103">
                                    <rect
                                      width="14"
                                      height="14"
                                      fill="white"
                                      transform="translate(0.333374)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </div>
                          <h2 className="text-[#1C1F21] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] flex items-center gap-1 font-medium">
                            {speaker.name}
                          </h2>
                          <h4 className="text-[#4E555A] text-[10px] sm:text-[12px] leading-[14px] sm:leading-[16px] font-medium mb-3">
                            {speaker.role}
                          </h4>
                          <p className="text-[#4E555A] text-[10px] sm:text-[10px] leading-[12px] sm:leading-[14px] font-normal mb-3">
                            {speaker.description}
                          </p>
                          <a
                            href="#"
                            className="text-[#3A96AF] text-[14px] font-medium hover:underline"
                          >
                            See More
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="flex items-center justify-center w-full gap-3 sm:gap-5 mt-4">
                    <button
                      className="speakers-swiper-prev cursor-pointer"
                      aria-label="Previous"
                    >
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
                    </button>
                    <div className="speakers-swiper-pagination flex items-center justify-center"></div>
                    <button
                      className="speakers-swiper-next cursor-pointer"
                      aria-label="Next"
                    >
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
                    </button>
                  </div>

                  <style jsx global>{`
                    .speakers-swiper .swiper-pagination-bullet {
                      display: inline-block;
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #d9e3de;
                      margin: 0 4px;
                      cursor: pointer;
                      transition: all 0.3s ease;
                    }
                    .speakers-swiper .swiper-pagination-bullet-active {
                      width: 14px;
                      height: 8px;
                      border-radius: 4px;
                      background: #3a96af;
                    }
                  `}</style>
                </div>
              )}

         
            </div>

            {/* Right Side */}
            <div className="lg:max-w-[476px] w-full flex flex-col gap-6 items-start">
              <div className="w-full border border-[#E8ECF4] rounded-[16px] sm:rounded-[24px] px-4 py-5 sm:p-6">
                <h1 className="text-[20px] sm:text-[24px] leading-[20px] sm:leading-[28px] font-semibold tracking-[0.5px]">
                  {service.title}
                </h1>
                <h3 className="mt-4 sm:mt-6 text-[#3A96AF] text-[20px] sm:text-[24px] leading-[20px] sm:leading-[28px] tracking-[0.5px] font-bold">
                  $ {service.price}
                </h3>

                <div className="h-[2px] w-full bg-[#E8ECF4] my-4 sm:my-6" />

                {["event", "workshops", "conference"].includes(
                  service.category
                ) ? (
                  ""
                ) : (
                  <div className="w-full">
                    <h3 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4">
                      Available Sessions
                    </h3>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {sessions.map((session, idx) => (
                        <button
                          key={session.day}
                          className={
                            (idx === activeSession
                              ? "border border-[#D97E59] rounded-md bg-[#D97E591F]"
                              : "border border-[#E8ECF4] rounded-md bg-transparent") +
                            " py-2 sm:py-3 px-3 cursor-pointer transition duration-200 hover:border hover:border-[#d97d59a6]"
                          }
                          onClick={() => setActiveSession(idx)}
                        >
                          <h3
                            className={
                              (idx === activeSession
                                ? "text-[#D97E59]"
                                : "text-[#676D75]") +
                              " text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1 transition-colors duration-200"
                            }
                          >
                            {session.day}
                          </h3>
                          <h3
                            className={
                              (idx === activeSession
                                ? "text-[#D97E59]"
                                : "text-[#676D75]") +
                              " text-[14px] leading-[18px] tracking-[0.5px] font-semibold transition-colors duration-200"
                            }
                          >
                            {session.date}
                          </h3>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {["event", "workshops", "conference"].includes(
                  service.category
                ) ? (
                  ""
                ) : (
                  <div className="w-full mt-4">
                    <h3 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4">
                      Available Time Slots
                    </h3>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {timeSlots.map((slot, idx) => (
                        <button
                          key={slot}
                          className={
                            (idx === activeTimeSlot
                              ? "border border-[#D97E59] rounded-md bg-[#D97E591F]"
                              : "border border-[#E8ECF4] rounded-md bg-transparent") +
                            " h-[42px] px-2 cursor-pointer transition-colors duration-200 hover:border hover:border-[#d97d59a6]"
                          }
                          onClick={() => setActiveTimeSlot(idx)}
                        >
                          <h3
                            className={
                              (idx === activeTimeSlot
                                ? "text-[#D97E59]"
                                : "text-[#676D75]") +
                              " text-[14px] leading-[16px] sm:leading-[18px] tracking-[0.5px] font-semibold transition-colors duration-200"
                            }
                          >
                            {slot}
                          </h3>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Choose your Package - Only for events */}
                {["event", "workshops", "conference"].includes(
                  service.category
                ) && (
                  <div className="w-full mt-6">
                    <h3 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4">
                      Choose your Package
                    </h3>

                    <div className="w-full space-y-4">
                      {/* Student Package */}
                      <div className="border border-[#E8ECF4] rounded-lg overflow-hidden">
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 bg-white"
                          onClick={() =>
                            setSelectedPackage(
                              selectedPackage === "student" ? "" : "student"
                            )
                          }
                        >
                          <h3 className="text-[#252525] text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] font-medium">
                            Student Package {packages[0].price}
                          </h3>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              selectedPackage === "student"
                                ? "rotate-180 transform"
                                : ""
                            }
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#252525"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {selectedPackage === "student" && (
                          <div className="px-4 py-3 bg-white">
                            <div className="space-y-2">
                              {packages[0].features.map((feature, idx) => (
                                <p
                                  key={idx}
                                  className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal"
                                >
                                  {feature}
                                </p>
                              ))}
                              <div className="pt-2">
                                <p className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium mb-2">
                                  Quantity
                                </p>
                                <div className=" flex w-full items-center">
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-l border-b border-[#E8ECF4] rounded-l-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setPackageQuantity(
                                        Math.max(1, packageQuantity - 1)
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                  <div className="flex items-center justify-center w-full h-8 border-t border-b border-[#E8ECF4] bg-white text-[#252525] text-base font-medium">
                                    {packageQuantity}
                                  </div>
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-b border-r border-[#E8ECF4] rounded-r-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setPackageQuantity(
                                        Math.min(5, packageQuantity + 1)
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="text-[#676D75] text-[12px] sm:text-[14px] leading-[18px] font-normal mt-1">
                                  Maximum purchase 5
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Member Package */}
                      <div className="border border-[#E8ECF4] rounded-lg overflow-hidden">
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 bg-white"
                          onClick={() =>
                            setSelectedPackage(
                              selectedPackage === "member" ? "" : "member"
                            )
                          }
                        >
                          <h3 className="text-[#252525] text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] font-medium">
                            Member Package
                          </h3>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              selectedPackage === "member"
                                ? "rotate-180 transform"
                                : ""
                            }
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#252525"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {selectedPackage === "member" && (
                          <div className="px-4 py-3 bg-white">
                            {/* General Package */}
                            <div className="border-b border-[#E8ECF4] pb-4 mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium">
                                  General Package
                                </h3>
                                <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium">
                                  50$
                                </span>
                              </div>
                              <div className="space-y-2 mb-3">
                                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                                  Conference welcome kit
                                </p>
                                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                                  Access to networking lounges
                                </p>
                              </div>
                              <div>
                                <p className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium mb-2">
                                  Quantity
                                </p>
                                <div className="flex w-full items-center">
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-l border-b border-[#E8ECF4] rounded-l-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setGeneralPackageQuantity(
                                        Math.max(1, generalPackageQuantity - 1)
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                  <div className="flex items-center justify-center w-full h-8 border-t border-b border-[#E8ECF4] bg-white text-[#252525] text-base font-medium">
                                    {generalPackageQuantity}
                                  </div>
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-b border-r border-[#E8ECF4] rounded-r-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setGeneralPackageQuantity(
                                        Math.min(5, generalPackageQuantity + 1)
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="text-[#676D75] text-[12px] sm:text-[14px] leading-[18px] font-normal mt-1">
                                  Maximum purchase 5
                                </p>
                              </div>
                            </div>

                            {/* VIP Package */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium">
                                  VIP Package
                                </h3>
                                <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium">
                                  60$
                                </span>
                              </div>
                              <div className="space-y-2 mb-3">
                                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                                  Conference welcome kit
                                </p>
                                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                                  Access to networking lounges
                                </p>
                                <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                                  Priority dinner reservation
                                </p>
                              </div>
                              <div>
                                <p className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium mb-2">
                                  Quantity
                                </p>
                                <div className="flex w-full items-center">
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-l border-b border-[#E8ECF4] rounded-l-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setVipPackageQuantity(
                                        Math.max(0, vipPackageQuantity - 1)
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                  <div className="flex items-center justify-center w-full h-8 border-t border-b border-[#E8ECF4] bg-white text-[#252525] text-base font-medium">
                                    {vipPackageQuantity}
                                  </div>
                                  <button
                                    className="flex items-center justify-center w-8 h-8 border-t border-b border-r border-[#E8ECF4] rounded-r-md bg-white text-[#252525] text-xl font-medium"
                                    onClick={() =>
                                      setVipPackageQuantity(
                                        Math.min(5, vipPackageQuantity + 1)
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>

                                <p className="text-[#676D75] text-[12px] sm:text-[14px] leading-[18px] font-normal mt-1">
                                  Maximum purchase 5
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Non-Member Package */}
                      <div className="border border-[#E8ECF4] rounded-lg overflow-hidden">
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 bg-white"
                          onClick={() =>
                            setSelectedPackage(
                              selectedPackage === "non-member"
                                ? ""
                                : "non-member"
                            )
                          }
                        >
                          <h3 className="text-[#252525] text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] font-medium">
                            Non- Member Package {packages[2].price}
                          </h3>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              selectedPackage === "non-member"
                                ? "rotate-180 transform"
                                : ""
                            }
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#252525"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Adds On Event - Only for events */}
                {["event", "workshops", "conference"].includes(
                  service.category
                ) && (
                  <div className="w-full mt-6">
                    <h3 className="text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4">
                      Adds On Event
                    </h3>

                    <div className="space-y-3">
                      {addOns.map((addon) => (
                        <div
                          key={addon.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={addon.id}
                              checked={selectedAddOns.includes(addon.id)}
                              onChange={() => toggleAddOn(addon.id)}
                              className="w-4 h-4 border border-[#E8ECF4] rounded"
                            />
                            <label
                              htmlFor={addon.id}
                              className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal cursor-pointer"
                            >
                              {addon.name}
                            </label>
                          </div>
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal">
                            {addon.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="h-[2px] w-full bg-[#E8ECF4] my-4 sm:my-6" />

                <div>
                  <h1 className="text-[#333333] text-[16px] leading-[20px] font-semibold">
                    Quantity
                  </h1>
                  <div className="my-2  w-full border border-[#E8ECF4] rounded flex items-center justify-between gap-3 px-3 h-[40px]">
                    <button
                      onClick={() =>
                        setQuantity((q) => Math.max(minQuantity, q - 1))
                      }
                      disabled={quantity === minQuantity}
                      className="cursor-pointer disabled:opacity-40"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="4"
                          y="9"
                          width="10"
                          height="2"
                          rx="1"
                          fill="#252525"
                        />
                      </svg>
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      className="w-10 text-center border-none text-[#252525] text-[18px] leading-[28px] outline-none bg-transparent font-semibold"
                    />
                    <button
                      onClick={() =>
                        setQuantity((q) => Math.min(maxQuantity, q + 1))
                      }
                      disabled={quantity === maxQuantity}
                      className="cursor-pointer disabled:opacity-40"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="9"
                          y="4"
                          width="2"
                          height="12"
                          rx="1"
                          fill="#252525"
                        />
                        <rect
                          x="4"
                          y="9"
                          width="12"
                          height="2"
                          rx="1"
                          fill="#252525"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-[#676D75] text-[14px] leading-[18px] font-normal">
                    Maximum purchase 5
                  </h3>
                </div>
              </div>

              {/* Your Order */}
              <div className="px-4 sm:px-6 py-5 sm:py-[30px] w-full border border-[#E8ECF4] rounded-[24px]">
                <h1 className="text-[#252525] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-semibold tracking-[0.5px] text-center">
                  Your Order
                </h1>
                <div className="my-4 sm:my-5">
                  {/* Package Order Details */}
                  {["event", "workshops", "conference"].includes(
                    service.category
                  ) && (
                    <>
                      {selectedPackage === "student" && packageQuantity > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            {packageQuantity} × Student Package
                          </span>
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            $ {(packageQuantity * 200).toFixed(2)}
                          </span>
                        </div>
                      )}
                      {selectedPackage === "member" && (
                        <>
                          {generalPackageQuantity > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                                {generalPackageQuantity} × General Package
                              </span>
                              <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                                $ {(generalPackageQuantity * 50).toFixed(2)}
                              </span>
                            </div>
                          )}
                          {vipPackageQuantity > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                                {vipPackageQuantity} × VIP Package
                              </span>
                              <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                                $ {(vipPackageQuantity * 60).toFixed(2)}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                      {selectedPackage === "non-member" &&
                        packageQuantity > 0 && (
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                              {packageQuantity} × Non-Member Package
                            </span>
                            <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                              $ {(packageQuantity * 300).toFixed(2)}
                            </span>
                          </div>
                        )}
                    </>
                  )}

                  {/* Add-ons Details */}
                  {selectedAddOns.map((addonId) => {
                    const addon = addOns.find((a) => a.id === addonId);
                    return addon ? (
                      <div
                        key={addonId}
                        className="flex justify-between items-center mb-2"
                      >
                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                          {addon.name}
                        </span>
                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                          {addon.price}
                        </span>
                      </div>
                    ) : null;
                  })}

                  {/* Base Service Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                      Base Service Price
                    </span>
                    <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                      $ {service.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="w-full h-[2px] bg-[#E8ECF4] my-3" />

                  {/* Total Calculation */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium">
                      Total
                    </span>
                    <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium">
                      $ {calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
                <RippleButton
                  className="w-full bg-[#3A96AF] h-[40px] sm:h-[44px] rounded-md text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]"
                  onClick={() => {
                    // Prepare package details
                    const packageDetails =
                      selectedPackage === "student"
                        ? `studentQuantity=${packageQuantity}`
                        : selectedPackage === "member"
                        ? `generalQuantity=${generalPackageQuantity}&vipQuantity=${vipPackageQuantity}`
                        : `nonMemberQuantity=${packageQuantity}`;

                    router.push(
                      `/payment-page?price=${calculateTotal().toFixed(
                        2
                      )}&${packageDetails}&title=${encodeURIComponent(
                        service.title
                      )}`
                    );
                  }}
                >
                  Proceed to checkout
                </RippleButton>
              </div>
            </div>
          </div>

          <Recommendation />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetails;
