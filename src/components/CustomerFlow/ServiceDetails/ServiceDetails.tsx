"use client"
import React, { useState } from 'react';
import { Service } from '../CustomerHome/types';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Recommendation from './Recommendation';
import RippleButton from '@/components/ui/Button';
import HalfStar from '@/SvgIcons/HalfStar';
import FullStar from '@/SvgIcons/FullStar';
import WhatIsIncluded from '../WhatIsIncluded';
import ReviewModal from './ReviewModal'

interface ServiceDetailsProps {
    service: Service;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
    const [quantity, setQuantity] = useState(1);
    const [reviewOpen, setReviewOpen] = useState(false)
    const minQuantity = 1;
    const maxQuantity = 5;

    // Add state for active session and time slot
    const sessions = [
        { day: 'FRI', date: '16 May' },
        { day: 'SAT', date: '17 May' },
        { day: 'MON', date: '19 May' },
        { day: 'TUE', date: '20 May' },
    ];
    const timeSlots = ['4:00 PM', '7:00 PM', '9:00 PM', '11:00 PM'];
    const [activeSession, setActiveSession] = useState(0);
    const [activeTimeSlot, setActiveTimeSlot] = useState(0);

    return (
        <>
            <Navbar />
            <div className='px-5 md:px-8 w-full pt-6 sm:pt-8 pb-[150px]'>
                <div className='max-w-[1280px] mx-auto w-full'>
                    <div className='w-full flex items-start justify-between lg:flex-row flex-col gap-6 lg:gap-4'>
                        {/* Left Side */}
                        <div className='lg:max-w-[740px] w-full'>
                            <Image src='/assets/service-details-placeholder.png' alt='image' width={740} height={314} className='h-[314px] rounded w-full object-cover' />
                            <div className='my-4 sm:my-6 flex items-start justify-between sm:flex-row flex-col gap-3'>
                                <div className='flex flex-col gap-2 sm:gap-3 items-start'>
                                    <h3 className='text-[#252525] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] tracking-[0.5px] font-semibold'>{service.title}</h3>
                                    {/* Reviews */}
                                    <button
                                        className='flex items-center gap-3 cursor-pointer'
                                        onClick={() => setReviewOpen(true)}
                                    >
                                        <div className='flex items-center gap-1'>
                                            <FullStar />
                                            <FullStar />
                                            <FullStar />
                                            <FullStar />
                                            <HalfStar />
                                        </div>
                                        <h2 className='text-[#676D75] text-[18px] leading-[20px] font-medium mt-0.5'>288 reviews</h2>
                                    </button>
                                    <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
                                </div>
                                <div>
                                    <h3 className='text-[#333333] text-[12px] leading-[16px] tracking-[1%] font-medium'>Share with Friends</h3>
                                </div>
                            </div>

                            <div className='bg-[#D9D9D9] h-[2px] w-full' />

                            <div className='my-4 sm:my-6'>
                                <h1 className='mb-3 text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold tracking-[0.5px]'>Service Provider</h1>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <Image src='/assets/profile.svg' alt='profile' width={48} height={48} className='rounded-full sm:w-[50px] w-[40px]' />
                                        <div>
                                            <h2 className='text-[#252525] text-[14px] sm:text-[16px] leading-[16px] sm:leading-[20px] font-semibold'>Amy Watson</h2>
                                            <h4 className='text-[#676D75] text-[12px] leading-[16px] font-medium mt-1'>Certified Career Coach</h4>
                                        </div>
                                    </div>
                                    <RippleButton className='border border-[#3A96AF] bg-[#3A96AF] h-[36px] sm:h-[40px] rounded-lg px-4 text-white text-[12px] leading-[16px] tracking-[0.5px] font-medium'>View Profile</RippleButton>
                                </div>
                            </div>

                            <div>
                                <h1 className='text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-semibold mb-3'>Description</h1>
                                <p className='text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-normal'>{service.description}</p>
                            </div>

                            <WhatIsIncluded
                                items={[
                                    '1-on-1 Video Call',
                                    '60 - minute session',
                                    'Personalized Career Plan',
                                    'Post-session follow-up message',
                                ]}
                            />
                        </div>

                        {/* Right Side */}
                        <div className='lg:max-w-[476px] w-full flex flex-col gap-6 items-start'>
                            <div className='w-full border border-[#E8ECF4] rounded-[16px] sm:rounded-[24px] px-4 py-5 sm:p-6'>
                                <h1 className='text-[20px] sm:text-[24px] leading-[20px] sm:leading-[28px] font-semibold tracking-[0.5px]'>{service.title}</h1>
                                <h3 className='mt-4 sm:mt-6 text-[#3A96AF] text-[20px] sm:text-[24px] leading-[20px] sm:leading-[28px] tracking-[0.5px] font-bold'>$ {service.price}</h3>

                                <div className='h-[2px] w-full bg-[#E8ECF4] my-4 sm:my-6' />

                                {/* Available Sessions */}
                                <div className='w-full'>
                                    <h3 className='text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4'>Available Sessions</h3>
                                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4'>
                                        {sessions.map((session, idx) => (
                                            <button
                                                key={session.day}
                                                className={
                                                    (idx === activeSession
                                                        ? 'border border-[#D97E59] rounded-md bg-[#D97E591F]'
                                                        : 'border border-[#E8ECF4] rounded-md bg-transparent') +
                                                    ' py-2 sm:py-3 px-3 cursor-pointer transition duration-200 hover:border hover:border-[#d97d59a6]'
                                                }
                                                onClick={() => setActiveSession(idx)}
                                            >
                                                <h3 className={(idx === activeSession ? 'text-[#D97E59]' : 'text-[#676D75]') + ' text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1 transition-colors duration-200'}>{session.day}</h3>
                                                <h3 className={(idx === activeSession ? 'text-[#D97E59]' : 'text-[#676D75]') + ' text-[14px] leading-[18px] tracking-[0.5px] font-semibold transition-colors duration-200'}>{session.date}</h3>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Available Time Slots */}
                                <div className='w-full mt-4'>
                                    <h3 className='text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-medium mb-3 sm:mb-4'>Available Time Slots</h3>
                                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4'>
                                        {timeSlots.map((slot, idx) => (
                                            <button
                                                key={slot}
                                                className={
                                                    (idx === activeTimeSlot
                                                        ? 'border border-[#D97E59] rounded-md bg-[#D97E591F]'
                                                        : 'border border-[#E8ECF4] rounded-md bg-transparent') +
                                                    ' h-[42px] px-2 cursor-pointer transition-colors duration-200 hover:border hover:border-[#d97d59a6]'
                                                }
                                                onClick={() => setActiveTimeSlot(idx)}
                                            >
                                                <h3 className={(idx === activeTimeSlot ? 'text-[#D97E59]' : 'text-[#676D75]') + ' text-[14px] leading-[16px] sm:leading-[18px] tracking-[0.5px] font-semibold transition-colors duration-200'}>{slot}</h3>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className='h-[2px] w-full bg-[#E8ECF4] my-4 sm:my-6' />

                                <div>
                                    <h1 className='text-[#333333] text-[16px] leading-[20px] font-semibold'>Quantity</h1>
                                    <div className='my-2 max-w-[354px] w-full border border-[#E8ECF4] rounded flex items-center justify-between gap-3 px-3 h-[40px]'>
                                        <button
                                            onClick={() => setQuantity(q => Math.max(minQuantity, q - 1))}
                                            disabled={quantity === minQuantity}
                                            className='cursor-pointer disabled:opacity-40'
                                        >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4" y="9" width="10" height="2" rx="1" fill="#252525" />
                                            </svg>
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            readOnly
                                            className="w-10 text-center border-none text-[#252525] text-[18px] leading-[28px] outline-none bg-transparent font-semibold"
                                        />
                                        <button
                                            onClick={() => setQuantity(q => Math.min(maxQuantity, q + 1))}
                                            disabled={quantity === maxQuantity}
                                            className='cursor-pointer disabled:opacity-40'
                                        >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="9" y="4" width="2" height="12" rx="1" fill="#252525" />
                                                <rect x="4" y="9" width="12" height="2" rx="1" fill="#252525" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className='text-[#676D75] text-[14px] leading-[18px] font-normal'>Maximum purchase 5</h3>
                                </div>
                            </div>

                            <div className='px-4 sm:px-6 py-5 sm:py-[30px] w-full border border-[#E8ECF4] rounded-[24px]'>
                                <h1 className='text-[#252525] text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-semibold tracking-[0.5px] text-center'>Your Order</h1>
                                <div className='my-4 sm:my-5'>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">Quantity</span>
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">{quantity}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">Price</span>
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal">$ {service.price}</span>
                                    </div>
                                    <div className="w-full h-[2px] bg-[#E8ECF4] my-3" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium">Total</span>
                                        <span className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium">$ {(quantity * service.price).toFixed(1)}</span>
                                    </div>
                                </div>
                                <RippleButton className='w-full bg-[#3A96AF] h-[40px] sm:h-[44px] rounded-md text-[#FFFFFF] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]'>Proceed to checkout</RippleButton>
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