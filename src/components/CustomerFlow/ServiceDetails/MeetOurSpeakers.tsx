import React, { useState, useEffect } from 'react';
import Image from "next/image";
import RippleButton from "@/components/ui/Button";

interface MeetOurSpeakersProps {
    serviceCategory: string;
}

const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 550) return 1;
        if (width < 768) return 2;
        return 3;
    }
    return 3;
};

const MeetOurSpeakers: React.FC<MeetOurSpeakersProps> = ({ serviceCategory }) => {
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                "Known for creating seamless user flows and motion-enhanced UI experiences.",
            verified: true,
        },
        {
            id: 3,
            image: "/assets/speakers/3.png",
            name: "Mei Tanaka",
            role: "Lead Product Designer – Spotify",
            description:
                "Known for creating seamless user flows and motion-enhanced UI experiences.",
            verified: true,
        },
        {
            id: 4,
            image: "/assets/speakers/3.png",
            name: "Mei Tanaka",
            role: "Lead Product Designer – Spotify",
            description:
                "Known for creating seamless user flows and motion-enhanced UI experiences.",
            verified: true,
        },
    ];

    // Ensure currentIndex is always valid when slidesPerView changes
    useEffect(() => {
        const maxIndex = Math.max(0, speakers.length - slidesPerView);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [slidesPerView, speakers.length]);

    if (!["event", "workshops", "conference"].includes(serviceCategory)) {
        return null;
    }

    // Calculate visible speakers
    const visibleSpeakers = speakers.slice(currentIndex, currentIndex + slidesPerView);
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < speakers.length - slidesPerView;

    // Fixed pagination dots logic - should represent pages, not individual speakers
    const totalPages = Math.ceil(speakers.length / slidesPerView);
    const activePage = currentIndex >= speakers.length - slidesPerView ? totalPages - 1 : Math.floor(currentIndex / slidesPerView);

    const handleDotClick = (pageIdx: number) => {
        const newIndex = pageIdx * slidesPerView;
        // Ensure we don't exceed the maximum valid index
        const maxIndex = speakers.length - slidesPerView;
        setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(Math.min(currentIndex + 1, speakers.length - slidesPerView));
    };

    return (
        <div className="w-full">
            <h1 className="text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-semibold mb-4">
                Meet Our Speakers
            </h1>
            <div className="relative flex items-center justify-center max-w-[700px] mx-auto flex-col">
                <div className="w-full flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        className="speakers-swiper-prev cursor-pointer absolute left-0 z-10 top-1/2 -translate-y-1/2 disabled:opacity-30"
                        aria-label="Previous"
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="33" height="33" rx="16.5" transform="matrix(-1 0 0 1 33 0)" stroke="#E8ECF4" />
                            <path d="M19.5416 10.4001L14.1083 15.8334C13.4666 16.4751 13.4666 17.5251 14.1083 18.1668L19.5416 23.6001" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Custom Carousel */}
                    <div className="flex gap-[12px] w-full justify-center">
                        {visibleSpeakers.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="bg-white border border-[#E8ECF4] rounded-[12px] p-3 flex items-center flex-col text-center w-[198px]"
                            >
                                <Image
                                    src={speaker.image}
                                    alt={`${speaker.name} profile`}
                                    width={120}
                                    height={120}
                                    className="rounded-full w-[120px] h-[120px] object-cover"
                                />
                                <h2 className="mt-3 mb-1 text-[#252525] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] flex items-center gap-1 font-semibold">
                                    {speaker.name}
                                    {speaker.verified && (
                                        <svg
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
                                </h2>
                                <h4 className="mb-2 text-[#4E555A] text-[10px] sm:text-[12px] leading-[14px] sm:leading-[16px] font-medium line-clamp-1">
                                    {speaker.role}
                                </h4>
                                <div className="text-[#4E555A] text-[10px] leading-[12px] sm:leading-[14px] font-medium line-clamp-3">
                                    {speaker.description}
                                    <RippleButton className="ml-0.5 text-[#3A96AF] text-[10px] leading-[14px] font-medium hover:underline">
                                        See More
                                    </RippleButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="speakers-swiper-next cursor-pointer absolute right-0 z-10 top-1/2 -translate-y-1/2 disabled:opacity-30"
                        aria-label="Next"
                        onClick={handleNext}
                        disabled={!canGoNext}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#E8ECF4" />
                            <path d="M14.4583 10.4001L19.8916 15.8334C20.5333 16.4751 20.5333 17.5251 19.8916 18.1668L14.4583 23.6001" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Fixed Custom Pagination Dots */}
                <div className="flex items-center justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={`transition-all duration-200 h-2.5 rounded-full ${activePage === idx ? 'w-2.5 bg-[#3a96af]' : 'w-2.5 bg-[#d9e3de]'}`}
                            style={{ outline: 'none', border: 'none' }}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurSpeakers;