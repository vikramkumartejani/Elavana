'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../ui/Logo'

interface NavLink {
    href: string;
    label: string;
}

const navigationLinks: NavLink[] = [
    { href: '/customer-home', label: 'Home' },
    { href: '/service-providers', label: 'Service Providers' },
    { href: '/my-bookings', label: 'My Bookings' },
];


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    const openMobileMenu = (e?: MouseEvent) => {
        if (e) e.stopPropagation();
        setShowMobileMenu(true);
        setTimeout(() => setIsMobileMenuOpen(true), 10);
    }

    const closeMobileMenu = (e?: MouseEvent) => {
        if (e) e.stopPropagation();
        setIsMobileMenuOpen(false);
        setTimeout(() => setShowMobileMenu(false), 500);
    }
    return (
        <div className='w-full px-5 md:px-8 border-b border-[#DEE5ED]'>
            <div className='py-[18px] flex items-center justify-between gap-4 max-w-[1280px] mx-auto'>
                <Logo />

                <div className='hidden md:flex items-center gap-8 mt-1'>
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className='text-[#252525] text-[16px] leading-[24px] font-normal transition duration-200 hover:text-[#3A96AF]'
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className='hidden md:flex items-center gap-3 cursor-pointer'>
                    <Image src='/assets/profile.svg' alt='Profile' width={36} height={36} />
                    <h3 className='text-black text-[16px] leading-[24px] font-normal tracking-[0.5px]'>John Doe</h3>
                </div>

                <button
                    onClick={openMobileMenu}
                    className='md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer'
                    aria-label='Toggle mobile menu'
                    type='button'
                >
                    <span className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <>
                    {/* Overlay */}
                    <div className='fixed inset-0 bg-black/40 z-40 transition-opacity duration-300' onClick={closeMobileMenu} />
                    <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                        <div className='flex items-center justify-between px-5 py-4 border-b border-[#DEE5ED]'>
                            <Logo />
                            <button
                                onClick={closeMobileMenu}
                                className='md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer'
                                aria-label='Close mobile menu'
                                type='button'
                            >
                                <span className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>

                        <div className='flex flex-col space-y-4 px-5 py-8'>
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='text-[#252525] text-[18px] leading-[28px] font-normal transition duration-200 hover:text-[#3A96AF]'
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className='border-t border-gray-300 pt-6 flex items-center gap-3 cursor-pointer'>
                                <Image src='/assets/profile.svg' alt='Profile' width={36} height={36} />
                                <h3 className='text-black text-[16px] leading-[24px] font-normal tracking-[0.5px]'>John Doe</h3>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar