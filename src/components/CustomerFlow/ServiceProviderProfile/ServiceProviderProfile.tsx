'use client'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from 'next/image'
import ReviewModal from '../ServiceDetails/ReviewModal'
import RatingBarChart from './RatingBarChart'

const ServiceProviderProfile = () => {
    const [reviewOpen, setReviewOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div>
                <Image src='/assets/service-provider-profile-bg.png' alt='service-provider-profile-bg' width={2000} height={275} className='w-full object-cover h-[275px]' />
                <div className='w-full px-5 md:px-8'>
                    <div className='w-full max-w-[1280px] mx-auto -mt-[75px]'>
                        <div>
                            <Image src='/assets/service-provider-profile.png' alt='card-image' width={180} height={180} className='rounded-full h-[180x] w-[180px] object-cover' />
                        </div>

                        <div className='mb-10 flex items-start flex-row justify-between gap-4'>
                            <div>
                                <h1>vkmd</h1>
                            </div>
                            {/* Review Card */}
                            <div className='max-w-[512px] w-full'>
                                <h1 className='text-[#252525] text-[28px] leading-[32px] tracking-[0.5px] font-semibold poppinss'>Review</h1>
                                <div className="flex items-center gap-1 sm:gap-2 my-4 sm:my-6">
                                    <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] font-semibold text-[#252525] poppins">4.5</span>
                                    <div className="flex items-center gap-1 -mt-0.5 sm:-mt-2">
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                    </div>
                                    <span className="text-[#676D75] leading-[24px] text-[16px] font-normal poppins">(288)</span>
                                </div>

                                <RatingBarChart/>

                                <div className='bg-[#E8ECF4] h-[3px] w-full my-6' />

                                <div className="flex items-center gap-2 mb-4">
                                    <Image src="/assets/profile.svg" alt="profile" width={50} height={50} className="rounded-full sm:w-[50px] w-[40px]" />
                                    <div>
                                        <h1 className="text-[#252525] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-medium poppins">Samarth Asthana</h1>
                                        <h3 className='text-[#676D75] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] font-medium poppins'>26 Sep 2025</h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <Image src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                    <Image src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                    <Image src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                    <Image src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                    <Image src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                </div>

                                <h1 className='my-2 text-[#3A96AF] text-[20px] leading-[24px] font-medium poppins'>Amazing Problem Solver</h1>
                                <p className='text-[#676D75] text-[16px] leading-[28px] font-normal poppins'>I conferenced with Annette twice with the goal of improving my portfolio. Annette had an abundance of feedback that was helpful and practical. She knew how to provide tips and tangible objectives for the second meeting.</p>
                                <div className='flex items-end justify-end mt-6'>
                                    <button onClick={() => setReviewOpen(true)} className='poppins text-[#3A96AF] font-semibold text-[16px] leading-[20px] tracking-[0.5px] cursor-pointer hover:underline underline-offset-2 transition duration-200'>See More</button>
                                    <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServiceProviderProfile