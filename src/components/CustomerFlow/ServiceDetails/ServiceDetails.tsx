"use client"
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Recommendation from './Recommendation';
import RippleButton from '@/components/ui/Button';

const ServiceDetails: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const minQuantity = 1;
    const maxQuantity = 5;

    return (
        <>
            <Navbar />
            <div className='px-5 md:px-8 w-full pt-8 pb-[150px]'>
                <div className='max-w-[1280px] mx-auto w-full'>
                    <div className='w-full flex items-start justify-between gap-4'>
                        <div className='max-w-[740px] w-full bg-red-500'>
                            <Image src='/assets/service-details-placeholder.png' alt='image' width={740} height={314} className='h-[314px] rounded w-full object-cover' />
                        </div>

                        <div className='max-w-[476px] w-full flex flex-col gap-6 items-start'>
                            <div className='w-full border border-[#E8ECF4] rounded-[24px] p-6'>
                                <h1 className='text-[24px] leading-[28px] font-semibold tracking-[0.5px]'>Career Strategy Session</h1>
                                <h3 className='mt-6 text-[#3A96AF] text-[24px] leading-[28px] tracking-[0.5px] font-bold'>$ 299.00</h3>

                                <div className='h-[2px] w-full bg-[#E8ECF4] my-6' />

                                <div className='w-full'>
                                    <h3 className='text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-medium mb-4'>Available Sessions</h3>
                                    <div className='w-full grid grid-cols-4 gap-4'>
                                        <button className='border border-[#D97E59] rounded-md bg-[#D97E591F] py-3 px-4 cursor-pointer'>
                                            <h3 className='text-[#D97E59] text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1'>FRI</h3>
                                            <h3 className='text-[#D97E59] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>16 May</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent py-3 px-4 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1'>SAT</h3>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>17 May</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent py-3 px-4 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1'>MON</h3>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>19 May</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent py-3 px-4 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] font-medium mb-1'>TUE</h3>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>20 May</h3>
                                        </button>
                                    </div>
                                </div>

                                <div className='w-full mt-4'>
                                    <h3 className='text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-medium mb-4'>Available Time Slots</h3>
                                    <div className='w-full grid grid-cols-4 gap-4'>
                                        <button className='border border-[#D97E59] rounded-md bg-[#D97E591F] h-[42px] px-3 cursor-pointer'>
                                            <h3 className='text-[#D97E59] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>4:00 PM</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent h-[42px] px-3 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>7:00 PM</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent h-[42px] px-3 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>9:00 PM</h3>
                                        </button>
                                        <button className='border border-[#E8ECF4] rounded-md bg-transparent h-[42px] px-3 cursor-pointer'>
                                            <h3 className='text-[#676D75] text-[14px] leading-[18px] tracking-[0.5px] font-semibold'>11:00 PM</h3>
                                        </button>
                                    </div>
                                </div>

                                <div className='h-[2px] w-full bg-[#E8ECF4] my-6' />

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

                            <div className='px-6 py-[30px] w-full border border-[#E8ECF4] rounded-[24px]'>
                                <h1 className='text-[#252525] text-[24px] leading-[28px] font-semibold tracking-[0.5px] text-center'>Your Order</h1>
                                <div className='my-5'>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-normal">Quantity</span>
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-normal">{quantity}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-normal">Price</span>
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-normal">$ 299.0</span>
                                    </div>
                                    <div className="w-full h-[2px] bg-[#E8ECF4] my-3" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-medium">Total</span>
                                        <span className="text-[#252525] text-[16px] leading-[20px] font-medium">$ {(quantity * 299).toFixed(1)}</span>
                                    </div>
                                </div>
                                <RippleButton className='w-full bg-[#3A96AF] h-[44px] rounded-md text-[#FFFFFF] text-[16px] leading-[20px] font-medium tracking-[0.5px]'>Proceed to checkout</RippleButton>
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