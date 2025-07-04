import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialLinks = [
    { href: '/', src: '/assets/icons/facebook.svg', alt: 'facebook' },
    { href: '/', src: '/assets/icons/twitter.svg', alt: 'twitter' },
    { href: '/', src: '/assets/icons/instagram.svg', alt: 'instagram' },
    { href: '/', src: '/assets/icons/linkedIn.svg', alt: 'linkedIn' },
    { href: '/', src: '/assets/icons/youtube.svg', alt: 'youtube' },
];

const menuLinks = [
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/term-of-use', label: 'Term of use' },
];

const Footer = () => {
    return (
        <div className='bg-[#3A96AF] px-5 md:px-8 w-full'>
            <div className='max-w-[1280px] mx-auto w-full py-8 sm:py-[50px] text-white'>
                <div className='flex items-center gap-7 justify-between sm:flex-row flex-col'>
                    <Link href='/'>
                        <Image src='/assets/white-logo.svg' alt='white-logo' width={137} height={36} />
                    </Link>
                    <div className='flex items-center gap-4'>
                        {socialLinks.map((item, idx) => (
                            <Link href={item.href} key={item.alt}>
                                <Image src={item.src} alt={item.alt} width={36} height={36} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#D4D2E3] my-4 sm:my-6' />
                <div className='flex items-center gap-4 justify-between sm:flex-row flex-col-reverse'>
                    <p className='text-[16px] leading-[28px] font-semibold'>Copyright 2025 - Elevana</p>
                    <ul className='flex items-center gap-3 '>
                        {menuLinks.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className='text-[16px] leading-[28px] font-semibold underline underline-offset-2'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer