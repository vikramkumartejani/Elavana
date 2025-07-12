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
import MeetOurSpeakers from "./MeetOurSpeakers";

interface ServiceDetailsProps {
  service: Service;
}



const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const [quantity, setQuantity] = useState(1);
  const [reviewOpen, setReviewOpen] = useState(false);
  const minQuantity = 1;
  const maxQuantity = 5;
  const router = useRouter();



  const sessions = [
    { day: "FRI", date: "16 May" },
    { day: "SAT", date: "17 May" },
    { day: "MON", date: "19 May" },
    { day: "TUE", date: "20 May" },
  ];
  const timeSlots = ["4:00 PM", "7:00 PM", "9:00 PM", "11:00 PM"];
  const [activeSession, setActiveSession] = useState(0);
  const [activeTimeSlot, setActiveTimeSlot] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("");
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



  // Calculate total price including base service, packages, and add-ons
  const calculateTotal = () => {
    let total = service.price;

    // Add package prices based on selected package and quantity
    if (
      service.category === "event" ||
      service.category === "workshops" ||
      service.category === "conference"
    ) {
      if (selectedPackage === "student") {
        total += packageQuantity * 200;
      } else if (selectedPackage === "member") {
        // For member package, add both General and VIP package prices
        total += generalPackageQuantity * 50; // General Package
        total += vipPackageQuantity * 60; // VIP Package
      } else if (selectedPackage === "non-member") {
        total += packageQuantity * 300; // Non-member package price
      }
    } else if (service.category === "masterclass") {
      if (selectedPackage === "basic") {
        total += packageQuantity * 100; // Basic Masterclass Package
      } else if (selectedPackage === "premium") {
        total += packageQuantity * 200; // Premium Masterclass Package
      }
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
              <MeetOurSpeakers serviceCategory={service.category} />
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

                {["event", "workshops", "conference", "masterclass"].includes(
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

                {["event", "workshops", "conference", "masterclass"].includes(
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

                {/* Masterclass Package - Only for masterclass */}
                {service.category === "masterclass" && (
                  <>
                    <h3 className="text-[20px] mb-[12px] leading-[20px] font-semibold">
                      What you will get:
                    </h3>
                    <ul className="space-y-[12px] text-[16px] leading-[20px] font-normal">
                      <li className="flex items-center">
                        <span className="text-gray-700">
                          Start Immediately <strong> ✓</strong>
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-700">
                          Self-paced <strong> ✓</strong>
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-700">
                          Lifetime Access <strong> ✓</strong>
                        </span>
                      </li>
                    </ul>
                  </>
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

                  {service.category === "masterclass" && (
                    <>
                      {selectedPackage === "basic" && packageQuantity > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            {packageQuantity} × Basic Masterclass Package
                          </span>
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            $ {(packageQuantity * 100).toFixed(2)}
                          </span>
                        </div>
                      )}
                      {selectedPackage === "premium" && packageQuantity > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            {packageQuantity} × Premium Masterclass Package
                          </span>
                          <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">
                            $ {(packageQuantity * 200).toFixed(2)}
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
                      service.category === "event" ||
                        service.category === "workshops" ||
                        service.category === "conference"
                        ? selectedPackage === "student"
                          ? `studentQuantity=${packageQuantity}`
                          : selectedPackage === "member"
                            ? `generalQuantity=${generalPackageQuantity}&vipQuantity=${vipPackageQuantity}`
                            : `nonMemberQuantity=${packageQuantity}`
                        : service.category === "masterclass"
                          ? selectedPackage === "basic"
                            ? `basicQuantity=${packageQuantity}`
                            : `premiumQuantity=${packageQuantity}`
                          : "";

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
