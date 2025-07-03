import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Facebook from '@/SvgIcons/Facebook'
import Instagram from '@/SvgIcons/Instagram'
import Linkedin from '../SvgIcons/Linkedin'
import Fiverr from '@/SvgIcons/Fiverr'
import Upwork from '@/SvgIcons/Upwork'

interface FooterLink {
    href: string;
    label: string;
}

const usefulLinks: readonly FooterLink[] = [
    { href: '/for-coach', label: 'For Coach' },
    { href: '/for-customer', label: 'For Customer' },
    { href: '/services', label: 'Services' },
];

const aboutLinks: readonly FooterLink[] = [
    { href: '/about-us', label: 'About Us' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/why-us', label: 'Why Us' },
];

const contactLinks: readonly FooterLink[] = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faqs', label: "FAQ's" },
];

const Footer: React.FC = () => {
   
    return (
        <div className='bg-[#F7F8F9] w-full mt-10 pt-8 sm:pt-14 md:pt-20 lg:pt-[118px] rounded-t-[20px] md:rounded-t-[40px]'>
            <div className='w-full md:px-8 px-5'>
                <div className='max-w-[1280px] mx-auto flex items-start justify-between md:flex-row flex-col gap-8'>
                    <div className='md:max-w-[280px] lg:max-w-[311px] flex flex-col gap-6 md:gap-[33px]'>
                        <Image src='/assets/logo.svg' alt='logo' width={200} height={52.52} className='md:w-[200px] w-[150px]' />
                        <p className='text-[#747474] text-[14px] font-normal leading-[18px]'>Elevana is a Kenyan-born platform connecting experts in coaching, mentoring, and personal growth with individuals seeking clarity and purpose.</p>
                    </div>
                    <div className='w-full md:w-fit grid grid-cols-2 md:flex items-start gap-6 sm:gap-8 md:gap-[49px] md:mt-1.5'>
                        <div className='lg:w-[176px]'>
                            <h2 className='text-[#12142A] text-[20px] leading-[26px] font-bold'>Useful Links</h2>
                            <div className='mt-4 sm:mt-6 flex flex-col gap-3.5'>
                                {usefulLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className='text-[#747474] text-[14px] leading-[21px] font-normal transition duration-200 hover:text-[#3A96AF]'>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-[176px]'>
                            <h2 className='text-[#12142A] text-[20px] leading-[26px] font-bold'>About</h2>
                            <div className='mt-4 sm:mt-6 flex flex-col gap-3.5'>
                                {aboutLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className='text-[#747474] text-[14px] leading-[21px] font-normal transition duration-200 hover:text-[#3A96AF]'>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-[176px]'>
                            <h2 className='text-[#12142A] text-[20px] leading-[26px] font-bold'>Contact</h2>
                            <div className='mt-4 sm:mt-6 flex flex-col gap-3.5'>
                                {contactLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className='text-[#747474] text-[14px] leading-[21px] font-normal transition duration-200 hover:text-[#3A96AF]'>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12 md:mt-20 text-center pt-7 pb-5 border-t border-dashed border-[#A7A7A7] md:px-8 px-5'>
                <div className='max-w-[1280px] mx-auto w-full'>
                    <div className='mb-4 sm:mb-6 flex items-center justify-center gap-[15px]'>
                        <Link href='/' className='cursor-pointer'><Instagram /></Link>
                        <Link href='/' className='cursor-pointer'><Facebook /></Link>
                        <Link href='/' className='cursor-pointer'><Linkedin /></Link>
                        <Link href='/' className='cursor-pointer'><Fiverr /></Link>
                        <Link href='/' className='cursor-pointer'><Upwork /></Link>
                    </div>
                    <p className='text-[#747474] text-[14px] leading-[21px] font-normal'>© Copyright 2025 Elevena | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer