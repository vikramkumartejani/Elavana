import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  },
];

const Recommendation: React.FC = () => {
  return (
    <div className="mt-10">
      <h1 className="text-[#252525] text-[20px] leading-[28px] font-bold tracking-[0.5px] mb-4">
        Recommendation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {recommendations.map((item) => (
          <Link
            href={`/service-details?id=${item.id}`}
            key={item.id}
            className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={281}
              height={210}
              className="rounded-xl mb-4 w-full h-[210px] object-cover"
            />

            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-[18px] leading-[28px] tracking-[0.5px] mb-2 text-[#252525] line-clamp-1">
                {item.title}
              </h3>
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

            <p className="text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] mb-4 line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-end justify-end w-full">
              <span className="text-[20px] leading-[24px] tracking-[0.5px] font-bold text-[#D97E59]">
                $ {item.price.toLocaleString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
