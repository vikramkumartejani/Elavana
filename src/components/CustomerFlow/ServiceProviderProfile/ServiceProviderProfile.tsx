'use client'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from 'next/image'
import ReviewModal from '../ServiceDetails/ReviewModal'
import RatingBarChart from './RatingBarChart'
import Gmail from '@/SvgIcons/Gmail'
import Link from 'next/link'
import Briefcase from '@/SvgIcons/Briefcase'
import MedalStar from '@/SvgIcons/MedalStar'
import Location from '@/SvgIcons/Location'
import Call from '@/SvgIcons/Call'
import Verifed from '@/SvgIcons/Verifed'
import SocialLinks from '../SocialLinks'
import ServicesOffered from './ServicesOffered'

const ServiceProviderProfile = () => {
    const [reviewOpen, setReviewOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <div>
                <Image src='/assets/service-provider-profile-bg.png' alt='service-provider-profile-bg' width={2000} height={275} className='w-full object-cover h-[275px]' />
                <div className='w-full px-5 md:px-8'>
                    <div className='pb-20 md:pb-[150px] w-full max-w-[1280px] mx-auto -mt-[75px]'>
                        <div className='flex items-start gap-6'>
                            <Image src='/assets/service-provider-profile.png' alt='card-image' width={180} height={180} className='rounded-full h-[180x] w-[180px] object-cover' />
                            <div className='mt-[97px] flex items-center justify-between gap-4 w-full'>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <h1 className='text-[#252525] text-[24px] leading-[28px] font-semibold tracking-[0.5px]'>Alice Mwende</h1>
                                        <Verifed />
                                    </div>
                                    <p className='mt-2 text-[#676D75] text-[16px] leading-[20px] font-normal max-w-[536px]'>Art Director and UI/UX & Visual Design Specialist at Omaha Victoria Design Studio</p>
                                </div>
                                <SocialLinks />
                            </div>
                        </div>

                        <div className='mb-10 mt-8 flex items-start flex-row justify-between gap-4'>
                            <div className='max-w-[588px] w-full'>
                                <div className='flex items-center gap-2 justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <Gmail />
                                        <Link href='mailto:alicemwnde@gmail.com' className='text-[#252525] text-[16px] leading-[20px] font-medium poppins underline'>Alice Mwnde@gmail.com</Link>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Location />
                                        <h3 className='text-[#252525] text-[16px] leading-[20px] font-medium poppins'>New York, USA</h3>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Call />
                                        <Link href='tel:+1145678900' className='text-[#252525] text-[16px] leading-[20px] font-medium poppins underline'>+11 45678 900</Link>
                                    </div>
                                </div>

                                <div className='my-8'>
                                    <h2 className='text-[#252525] text-[20px] leading-[28px] font-semibold tracking-[0.5px] mb-3'>About Me</h2>
                                    <p className='text-[#676D75] text-[18px] leading-[28px] font-normal tracking-[0.5px]'>Alice Mwende is a passionate and certified life coach who specializes in helping women navigate significant personal and professional life changes. With over 5 years of coaching experience, Alice combines empathetic listening with practical strategies to help her clients overcome limiting beliefs and take bold, intentional steps forward.</p>
                                </div>

                                <div className='my-8'>
                                    <h2 className='text-[#252525] text-[20px] leading-[28px] font-semibold tracking-[0.5px] mb-3'>Areas of Experties</h2>
                                    <div className='flex items-center gap-3'>
                                        <button className='border border-[#D97E59] bg-[#D97E591F] rounded-lg h-[36px] text-[#D97E59] text-[16px] leading-[20px] font-normal px-4'>Design</button>
                                        <button className='border border-[#D97E59] bg-[#D97E591F] rounded-lg h-[36px] text-[#D97E59] text-[16px] leading-[20px] font-normal px-4'>Product</button>
                                        <button className='border border-[#D97E59] bg-[#D97E591F] rounded-lg h-[36px] text-[#D97E59] text-[16px] leading-[20px] font-normal px-4'>UX Research</button>
                                        <button className='border border-[#D97E59] bg-[#D97E591F] rounded-lg h-[36px] text-[#D97E59] text-[16px] leading-[20px] font-normal px-4'>Marketings</button>
                                    </div>
                                </div>

                                <div className='my-8'>
                                    <h2 className='text-[#252525] text-[20px] leading-[28px] font-semibold tracking-[0.5px] mb-3'>Experience</h2>
                                    <div className='flex items-center gap-3'>
                                        <Briefcase />
                                        <h3 className='text-[#252525] text-[16px] leading-[20px] font-normal poppinss'>3 year of experience in Design industry</h3>
                                    </div>
                                </div>

                                <div>
                                    <h2 className='text-[#252525] text-[20px] leading-[28px] font-semibold tracking-[0.5px] mb-3'>Certificates & Skills</h2>
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3'>
                                            <MedalStar />
                                            <h2 className='text-[#252525] text-[16px] leading-[20px] font-normal poppins'>ICF Certified Coach</h2>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <MedalStar />
                                            <h2 className='text-[#252525] text-[16px] leading-[20px] font-normal poppins'>Certified Professional Life Coach</h2>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <MedalStar />
                                            <h2 className='text-[#252525] text-[16px] leading-[20px] font-normal poppins'>Emotional Intelligence & Leadership Training</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Review Card */}
                            <div className='max-w-[512px] w-full'>
                                <h1 className='text-[#252525] text-[28px] leading-[32px] tracking-[0.5px] font-semibold'>Review</h1>
                                <div className="flex items-center gap-1 sm:gap-2 my-4 sm:my-6">
                                    <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] font-semibold text-[#252525] poppins">4.5</span>
                                    <div className="flex items-center gap-1">
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                                    </div>
                                    <span className="text-[#676D75] leading-[24px] text-[16px] font-normal poppins">(288)</span>
                                </div>

                                <RatingBarChart />

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
                        <ServicesOffered />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServiceProviderProfile