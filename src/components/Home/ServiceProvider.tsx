"use client"
import React, { useState, useRef, useEffect } from 'react'
import RippleButton from '../ui/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

interface ServiceProviderSliderCard {
    id: number;
    name: string;
    title: string;
    rating: number;
    description: string;
    tags: string[];
    image: string;
}

const serviceProviderCards: ServiceProviderSliderCard[] = [
    {
        id: 1,
        name: 'Alice Mwende',
        title: 'Certified UI/UX Designer',
        rating: 4.5,
        description: 'Helping people gain clarity and confidence in life transitions.',
        tags: ['Product Designer', 'User Experience'],
        image: '/assets/card-image.png',
    },
    {
        id: 2,
        name: 'Daniel Otieno',
        title: 'Digital Marketing Strategist',
        rating: 4.5,
        description: 'Helping small business grow online without any experience.',
        tags: ['Coaching', 'Personal Growth'],
        image: '/assets/card-image.png',
    },
    {
        id: 3,
        name: 'Fatima Yousuf',
        title: 'Career Development Coach',
        rating: 4.5,
        description: 'Guiding young professionals to build resumes and interview skills.',
        tags: ['Coaching', 'Personal Growth'],
        image: '/assets/card-image.png',
    },
    {
        id: 4,
        name: 'George Njoroge',
        title: 'Fitness & Nutrition Coach',
        rating: 4.5,
        description: 'I create custom workout and diet plans for busy professionals.',
        tags: ['Coaching', 'Personal Growth'],
        image: '/assets/card-image.png',
    },
    {
        id: 5,
        name: 'Alice Mwende',
        title: 'Certified UI/UX Designer',
        rating: 4.5,
        description: 'Helping people gain clarity and confidence in life transitions.',
        tags: ['Product Designer', 'User Experience'],
        image: '/assets/card-image.png',
    },
    {
        id: 6,
        name: 'Daniel Otieno',
        title: 'Digital Marketing Strategist',
        rating: 4.5,
        description: 'Helping small business grow online without any experience.',
        tags: ['Coaching', 'Personal Growth'],
        image: '/assets/card-image.png',
    },
];

const ServiceProviderSlider: React.FC = () => {
    const getSlidesPerView = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 640) return 1;
            if (width < 768) return 2;
            if (width < 1024) return 3;
            if (width < 1284) return 4;
            return 4;
        }
        return 4;
    };
    
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className='w-full px-5 md:px-8'>
            <div className='w-full mx-auto py-[40px] sm:py-[50px] max-w-[1280px]'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between mb-6'>
                    <h1 className='text-[#12142A] text-[24px] sm:text-[40px] font-bold leading-tight sm:leading-[60px] tracking-[-2px] text-left'>
                        Discover the best service Provider
                    </h1>
                    <Link href="/service-providers">
                        <RippleButton className='border border-[#D97E59] rounded-xl h-[56px] px-6 text-[#D97E59] text-[20px] leading-[24px] tracking-[0.5px] font-semibold hover:bg-[#D97E59] hover:text-white transition duration-200 flex-shrink-0'>
                            Explore All
                        </RippleButton>
                    </Link>
                </div>
                
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={slidesPerView}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.custom-swiper-next',
                        prevEl: '.custom-swiper-prev',
                        disabledClass: 'swiper-button-disabled',
                    }}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<button class='${className} rounded-full w-3.5 h-3.5 mx-1 transition-all duration-200'></button>`;
                        },
                    }}
                    className='my-4'
                >
                    {serviceProviderCards.map((provider) => (
                        <SwiperSlide key={provider.id} className="h-auto">
                            <div className="bg-white rounded-xl w-full border border-[#E8ECF4] flex flex-col p-3 h-full">
                                <div className="w-full h-[210px] aspect-[16/9] rounded-xl overflow-hidden bg-[#F6F6F6] flex-shrink-0">
                                    <Image
                                        src={provider.image}
                                        alt={provider.name}
                                        width={340}
                                        height={180}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                
                                <div className="flex flex-col pt-4 flex-1 min-h-0">
                                    <div className='flex items-start gap-3 justify-between w-full mb-2'>
                                        <h2 className="text-[#252525] text-[18px] leading-[28px] tracking-[0.5px] font-semibold text-left flex-1 min-w-0">
                                            {provider.name}
                                        </h2>
                                        <div className="flex items-center gap-1 flex-shrink-0">
                                            <Image src='/assets/icons/star.svg' alt='star' width={14} height={14} />
                                            <span className="text-[#F99D26] text-[14px] leading-[18px] font-medium">
                                                ({provider.rating})
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <Link
                                        href="#"
                                        className="text-[#3A96AF] text-[14px] leading-[18px] font-semibold text-left block mb-2 hover:underline"
                                        tabIndex={-1}
                                    >
                                        {provider.title}
                                    </Link>
                                    
                                    <p className="text-[#252525] text-[12px] leading-[20px] tracking-[0.5px] font-normal text-left mb-3 flex-1">
                                        {provider.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {provider.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#D97E591F] text-[#D97E59] rounded-lg px-3 py-2 text-[12px] leading-[16px] font-semibold whitespace-nowrap"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex flex-col items-center justify-center w-full gap-3 sm:gap-5 mt-6'>
                    <div className='flex items-center justify-center gap-3 sm:gap-x-5 gap-y-0'>
                        <button className='custom-swiper-prev cursor-pointer' aria-label='Previous'>
                            <span className='arrow-enabled'>
                                <svg className='rotate-180' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18' stroke='#3A96AF' strokeWidth='2' strokeLinecap='round' />
                                </svg>
                            </span>
                            <span className='arrow-disabled'>
                                <svg className='rotate-180' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18' stroke='#B8C9C4' strokeWidth='2' strokeLinecap='round' />
                                </svg>
                            </span>
                        </button>
                        <div className='custom-swiper-pagination flex items-center gap-3 sm:!gap-5'></div>
                        <button className='custom-swiper-next cursor-pointer' aria-label='Next'>
                            <span className='arrow-enabled'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18' stroke='#3A96AF' strokeWidth='2' strokeLinecap='round' />
                                </svg>
                            </span>
                            <span className='arrow-disabled'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M5.00015 12H18.0002M13.0002 6L18.293 11.2929C18.6836 11.6834 18.6836 12.3166 18.293 12.7071L13.0002 18' stroke='#B8C9C4' strokeWidth='2' strokeLinecap='round' />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: #D9E3DE;
                    width: 14px !important;
                    height: 14px !important;
                    opacity: 1;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    background: #3A96AF;
                    width: 14px !important;
                    height: 14px !important;
                }
                .swiper-button-disabled {
                    border: 1px solid #D9E3DE/30 !important;
                    pointer-events: none;
                }
                .custom-swiper-prev,
                .custom-swiper-next {
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
                    border: 1px solid #D9E3DE !important;
                    transition: all 0.2s;
                }
                .custom-swiper-prev .arrow-disabled,
                .custom-swiper-next .arrow-disabled {
                    display: none;
                }
                .swiper-button-disabled .arrow-enabled {
                    display: none;
                }
                .swiper-button-disabled .arrow-disabled {
                    display: inline;
                }
                
                /* Ensure all swiper slides have equal height */
                .swiper-slide {
                    height: auto;
                    display: flex;
                }
                
                .swiper-slide > div {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}

export default ServiceProviderSlider