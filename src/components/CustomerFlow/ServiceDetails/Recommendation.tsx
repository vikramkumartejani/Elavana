import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recommendations = [
  {
    id: 1,
    image: "/assets/card-image.png",
    title: "KESSRA Training",
    category: "Coaching",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.5,
    tags: ["Personal Development", "Coaching"],
  },
  {
    id: 2,
    image: "/assets/card-image.png",
    title: "UI/UX MasterClass",
    category: "Course",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.8,
    tags: ["Design", "Technology"],
  },
  {
    id: 3,
    image: "/assets/card-image.png",
    title: "Career Strategy Session",
    category: "Event",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.7,
    tags: ["Career", "Mentorship"],
  },
  {
    id: 4,
    image: "/assets/card-image.png",
    title: "Web Development",
    category: "Courses",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.6,
    tags: ["Programming", "Tech Skills"],
  },
  {
    id: 5,
    image: "/assets/card-image.png",
    title: "Web Development",
    category: "Courses",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.6,
    tags: ["Programming", "Tech Skills"],
  },
  {
    id: 6,
    image: "/assets/card-image.png",
    title: "Web Development",
    category: "Courses",
    instructor: "Andre Muniz",
    description:
      "KESSRA Training connects you with expert coaches to support your personal and professional...",
    price: 30000,
    rating: 4.6,
    tags: ["Programming", "Tech Skills"],
  },
];

const Recommendation: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(4);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#252525] text-[20px] leading-[28px] font-bold tracking-[0.5px]">
          Recommendation
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<button class='${className} rounded-full w-3.5 h-3.5 mx-1 transition-all duration-200'></button>`;
          },
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="my-4"
      >
        {recommendations.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <Link
              href={`/service-details?id=${item.id}`}
              className="bg-white rounded-xl w-full border border-[#E8ECF4] flex flex-col p-3 h-full"
            >
              <div className="w-full h-[210px] aspect-[16/9] rounded-xl overflow-hidden bg-[#F6F6F6] flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={340}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col pt-4 flex-1 min-h-0">
                <div className="flex items-start gap-3 justify-between w-full mb-2">
                  <h2 className="text-[#252525] text-[18px] leading-[28px] tracking-[0.5px] font-semibold text-left flex-1 min-w-0">
                    {item.title}
                  </h2>
                  <span className="bg-[#D97E591F] px-3 py-1 rounded-md text-[12px] leading-[16px] tracking-[0.5px] font-semibold text-[#D97E59]">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/assets/profile.svg"
                    alt="profile"
                    width={24}
                    height={24}
                  />
                  <span className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                    {item.instructor}
                  </span>
                </div>

                <p className="text-[#676D75] text-[12px] leading-[20px] tracking-[0.5px] font-normal text-left mb-3 flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto mb-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#D97E591F] text-[#D97E59] rounded-lg px-3 py-1 text-[12px] leading-[16px] font-semibold whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/icons/star.svg"
                      alt="star"
                      width={14}
                      height={14}
                    />
                    <span className="text-[#F99D26] text-[14px] leading-[18px] font-medium">
                      ({item.rating})
                    </span>
                  </div>
                  <span className="text-[20px] leading-[24px] tracking-[0.5px] font-bold text-[#D97E59]">
                    $ {item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-5 mt-6">
        <div className="flex items-center justify-center gap-3 sm:gap-x-5 gap-y-0">
          <button
            className="custom-swiper-prev cursor-pointer"
            aria-label="Previous"
            onClick={handlePrevClick}
            disabled={isBeginning}
          >
            <span className={`arrow-enabled ${isBeginning ? "hidden" : ""}`}>
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
            <span className={`arrow-disabled ${!isBeginning ? "hidden" : ""}`}>
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

          <div className="custom-swiper-pagination flex items-center gap-3 sm:!gap-5"></div>

          <button
            className="custom-swiper-next cursor-pointer"
            aria-label="Next"
            onClick={handleNextClick}
            disabled={isEnd}
          >
            <span className={`arrow-enabled ${isEnd ? "hidden" : ""}`}>
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
            <span className={`arrow-disabled ${!isEnd ? "hidden" : ""}`}>
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
  );
};

export default Recommendation;
