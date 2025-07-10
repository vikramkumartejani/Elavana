"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import ReviewModal from "../ServiceDetails/ReviewModal";
import RatingBarChart from "./RatingBarChart";
import Gmail from "@/SvgIcons/Gmail";
import Link from "next/link";
import Briefcase from "@/SvgIcons/Briefcase";
import MedalStar from "@/SvgIcons/MedalStar";
import Location from "@/SvgIcons/Location";
import Call from "@/SvgIcons/Call";
import Verifed from "@/SvgIcons/Verifed";
import SocialLinks from "../SocialLinks";
import ServicesOffered from "./ServicesOffered";
import { useRouter } from "next/navigation";

// Type definition for the service provider data
interface Certificate {
  id: number;
  name: string;
}

interface ExpertiseArea {
  id: number;
  name: string;
}

interface Review {
  id: number;
  userName: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  userImage: string;
}

interface ServiceProvider {
  id: number;
  name: string;
  isVerified: boolean;
  position: string;
  profileImage: string;
  coverImage: string;
  email: string;
  location: string;
  phone: string;
  about: string;
  experience: string;
  expertiseAreas: ExpertiseArea[];
  certificates: Certificate[];
  reviews: Review[];
  rating: number;
  totalReviews: number;
}

const ServiceProviderProfile = () => {
  const [reviewOpen, setReviewOpen] = useState(false);
  const router = useRouter();

  // This would be fetched from an API in a real application
  const [serviceProvider, setServiceProvider] = useState<ServiceProvider>({
    id: 1,
    name: "Alice Mwende",
    isVerified: true,
    position:
      "Art Director and UI/UX & Visual Design Specialist at Omaha Victoria Design Studio",
    profileImage: "/assets/service-provider-profile.png",
    coverImage: "/assets/service-provider-profile-bg.png",
    email: "Alice Mwnde@gmail.com",
    location: "New York, USA",
    phone: "+11 45678 900",
    about:
      "Alice Mwende is a passionate and certified life coach who specializes in helping women navigate significant personal and professional life changes. With over 5 years of coaching experience, Alice combines empathetic listening with practical strategies to help her clients overcome limiting beliefs and take bold, intentional steps forward.",
    experience: "3 year of experience in Design industry",
    expertiseAreas: [
      { id: 1, name: "Design" },
      { id: 2, name: "Product" },
      { id: 3, name: "UX Research" },
      { id: 4, name: "Marketings" },
    ],
    certificates: [
      { id: 1, name: "ICF Certified Coach" },
      { id: 2, name: "Certified Professional Life Coach" },
      { id: 3, name: "Emotional Intelligence & Leadership Training" },
    ],
    reviews: [
      {
        id: 1,
        userName: "Samarth Asthana",
        date: "26 Sep 2025",
        rating: 5,
        title: "Amazing Problem Solver",
        content:
          "I conferenced with Annette twice with the goal of improving my portfolio. Annette had an abundance of feedback that was helpful and practical. She knew how to provide tips and tangible objectives for the second meeting.",
        userImage: "/assets/profile.svg",
      },
    ],
    rating: 4.5,
    totalReviews: 288,
  });

  // Function to handle button click and redirect
  const handleExpertiseClick = (expertise: string) => {
    router.push(`/customer-home?search=${expertise}`);
  };

  // In a real application, you would fetch the data from an API
  // useEffect(() => {
  //   const fetchServiceProvider = async () => {
  //     try {
  //       const response = await fetch('/api/service-provider/1');
  //       const data = await response.json();
  //       setServiceProvider(data);
  //     } catch (error) {
  //       console.error('Error fetching service provider:', error);
  //     }
  //   };
  //   fetchServiceProvider();
  // }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Image
          src={serviceProvider.coverImage}
          alt="service-provider-profile-bg"
          width={2000}
          height={275}
          className="w-full object-cover h-[150px] sm:h-[275px]"
        />
        <div className="w-full px-5 md:px-8">
          <div className="pb-20 md:pb-[150px] w-full max-w-[1280px] mx-auto -mt-[50px] sm:-mt-[75px]">
            <div className="flex items-start sm:flex-row flex-col gap-4 sm:gap-6">
              <Image
                src={serviceProvider.profileImage}
                alt="card-image"
                width={180}
                height={180}
                className="rounded-full sm:h-[180px] sm:w-[180px] h-[120px] w-[120px] object-cover"
              />
              <div className="sm:mt-[90px] lg:mt-[97px] flex items-start justify-between md:flex-row flex-col gap-4 w-full">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-[#252525] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-semibold tracking-[0.5px]">
                      {serviceProvider.name}
                    </h1>
                    {serviceProvider.isVerified && <Verifed />}
                  </div>
                  <p className="mt-2 text-[#676D75] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal max-w-[536px]">
                    {serviceProvider.position}
                  </p>
                </div>
                <SocialLinks />
              </div>
            </div>

            <div className="mb-8 sm:mb-10 mt-6 sm:mt-8 flex items-start lg:flex-row flex-col justify-between gap-8">
              <div className="lg:max-w-[588px] w-full">
                <div className="flex items-center flex-wrap gap-4 lg:gap-2 lg:justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Gmail />
                    <Link
                      href={`mailto:${serviceProvider.email}`}
                      className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium poppins underline"
                    >
                      {serviceProvider.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Location />
                    <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium poppins">
                      {serviceProvider.location}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Call />
                    <Link
                      href={`tel:${serviceProvider.phone}`}
                      className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium poppins underline"
                    >
                      {serviceProvider.phone}
                    </Link>
                  </div>
                </div>

                <div className="my-6 sm:my-8">
                  <h2 className="text-[#252525] text-[18px] sm:text-[20px] leading-[22px] sm:leading-[28px] font-semibold tracking-[0.5px] mb-3">
                    About Me
                  </h2>
                  <p className="text-[#676D75] text-[16px] sm:text-[18px] leading-[22px] sm:leading-[28px] font-normal tracking-[0.5px]">
                    {serviceProvider.about}
                  </p>
                </div>

                <div className="my-6 sm:my-8">
                  <h2 className="text-[#252525] text-[18px] sm:text-[20px] leading-[22px] sm:leading-[28px] font-semibold tracking-[0.5px] mb-3">
                    Areas of Experties
                  </h2>
                  <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                    {serviceProvider.expertiseAreas.map((expertise) => (
                      <button
                        key={expertise.id}
                        onClick={() => handleExpertiseClick(expertise.name)}
                        className="border cursor-pointer border-[#D97E59] bg-[#D97E591F] rounded-lg h-8 sm:h-[36px] text-[#D97E59] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal px-3 sm:px-4"
                      >
                        {expertise.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-6 sm:my-8">
                  <h2 className="text-[#252525] text-[18px] sm:text-[20px] leading-[22px] sm:leading-[28px] font-semibold tracking-[0.5px] mb-3">
                    Experience
                  </h2>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Briefcase />
                    <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal poppins">
                      {serviceProvider.experience}
                    </h3>
                  </div>
                </div>

                <div>
                  <h2 className="text-[#252525] text-[18px] sm:text-[20px] leading-[22px] sm:leading-[28px] font-semibold tracking-[0.5px] mb-3">
                    Certificates & Skills
                  </h2>
                  <div className="space-y-3">
                    {serviceProvider.certificates.map((certificate) => (
                      <div
                        key={certificate.id}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <MedalStar />
                        <h2 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal poppins">
                          {certificate.name}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Card */}
              <div className="lg:max-w-[512px] w-full">
                <h1 className="text-[#252525] text-[24px] sm:text-[28px] leading-[26px] sm:leading-[32px] tracking-[0.5px] font-semibold">
                  Review
                </h1>
                <div className="flex items-center gap-1 sm:gap-2 my-4 sm:my-6">
                  <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] font-semibold text-[#252525] poppins">
                    {serviceProvider.rating}
                  </span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/icons/star-icons.svg"
                      alt="star"
                      width={32}
                      height={32}
                      className="sm:w-8 w-5"
                    />
                    <Image
                      src="/assets/icons/star-icons.svg"
                      alt="star"
                      width={32}
                      height={32}
                      className="sm:w-8 w-5"
                    />
                    <Image
                      src="/assets/icons/star-icons.svg"
                      alt="star"
                      width={32}
                      height={32}
                      className="sm:w-8 w-5"
                    />
                    <Image
                      src="/assets/icons/star-icons.svg"
                      alt="star"
                      width={32}
                      height={32}
                      className="sm:w-8 w-5"
                    />
                    <Image
                      src="/assets/icons/star-icons.svg"
                      alt="star"
                      width={32}
                      height={32}
                      className="sm:w-8 w-5"
                    />
                  </div>
                  <span className="text-[#676D75] leading-[24px] text-[16px] font-normal poppins">
                    ({serviceProvider.totalReviews})
                  </span>
                </div>

                <RatingBarChart />

                <div className="bg-[#E8ECF4] h-[3px] w-full my-4 sm:my-6" />

                {serviceProvider.reviews.length > 0 && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <Image
                        src={serviceProvider.reviews[0].userImage}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full sm:w-[50px] w-[40px]"
                      />
                      <div>
                        <h1 className="text-[#252525] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-medium poppins">
                          {serviceProvider.reviews[0].userName}
                        </h1>
                        <h3 className="text-[#676D75] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] font-medium poppins">
                          {serviceProvider.reviews[0].date}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(serviceProvider.reviews[0].rating)].map(
                        (_, index) => (
                          <Image
                            key={index}
                            src="/assets/icons/star-icons.svg"
                            alt="star"
                            width={16}
                            height={16}
                          />
                        )
                      )}
                    </div>

                    <h1 className="my-2 text-[#3A96AF] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-medium poppins">
                      {serviceProvider.reviews[0].title}
                    </h1>
                    <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[28px] font-normal poppins">
                      {serviceProvider.reviews[0].content}
                    </p>
                  </>
                )}

                <div className="flex items-end justify-end mt-4 sm:mt-6">
                  <button
                    onClick={() => setReviewOpen(true)}
                    className="poppins text-[#3A96AF] font-semibold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] cursor-pointer hover:underline underline-offset-2 transition duration-200"
                  >
                    See More
                  </button>
                  <ReviewModal
                    open={reviewOpen}
                    onClose={() => setReviewOpen(false)}
                  />
                </div>
              </div>
            </div>
            <ServicesOffered />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceProviderProfile;
