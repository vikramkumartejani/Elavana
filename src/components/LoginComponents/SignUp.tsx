"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const getInputClassName = () =>
    'w-full rounded-[12px] bg-[#F8FAFC] outline-none px-4 py-[14px] placeholder:text-[#9A9EA6] text-[16px] leading-[20px] tracking-[0.5px] border border-transparent focus:border-[#3A96AF] transition-colors';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <div className="w-full max-w-[597px] mx-auto h-auto bg-white p-10 flex flex-col items-center justify-center" style={{ boxShadow: '0px 4px 24px 0px #25252514' }}>
            <h2 className="text-[28px] leading-[38px] tracking-[0.5px] font-bold text-center mb-4 text-[#252525]">Create your Account</h2>
            <p className="text-[#676D75] text-[18px] leading-[22px] tracking-[0.5px] font-light text-center mb-8">Start your journey by signing up below.</p>
            <form className="w-full flex flex-col gap-4">

                <div className="flex gap-6">
                    <div className="flex flex-col w-1/2 gap-3">
                        <label className="text-[16px] leading-[20px] font-medium text-black tracking-[0.5px]">First Name</label>
                        <input type="text" placeholder="Jhon" className={getInputClassName()} />
                    </div>

                    <div className="flex flex-col w-1/2 gap-3">
                        <label className="text-[16px] leading-[20px] font-medium text-black tracking-[0.5px]">Last Name</label>
                        <input type="text" placeholder="Doe" className={getInputClassName()} />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-[16px] leading-[20px] font-medium text-black tracking-[0.5px]">Email</label>
                    <input type="email" placeholder="Enter your Email" className={getInputClassName()} />
                </div>

                <div className="flex flex-col gap-3 relative">
                    <label className="text-[16px] leading-[20px] font-medium text-black tracking-[0.5px]">Password</label>
                    <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" className={getInputClassName() + ' pr-12'} />
                    <button type="button" className="absolute right-5 top-12 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600" tabIndex={-1} onClick={() => setShowPassword((prev) => !prev)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[16px] leading-[20px] font-medium text-black tracking-[0.5px]">Phone Number</label>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center px-2 py-1 bg-[#F8FAFC] border border-gray-200 rounded-md">
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" rx="2" fill="#F5F5F5" /><path d="M0 0H24V16H0V0Z" fill="#012169" /><path d="M2.66667 0L12 6.66667L21.3333 0V2.66667L14.6667 8L21.3333 13.3333V16L12 9.33333L2.66667 16V13.3333L9.33333 8L2.66667 2.66667V0Z" fill="#C8102E" /><path d="M0 0L8 6.66667V0H16V6.66667L24 0V2.66667L16 9.33333V16H8V9.33333L0 2.66667V0Z" fill="#FFF" /></svg>
                        </span>
                        <input type="tel" placeholder="Phone Number" className={getInputClassName()} />
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="terms" className="w-4 h-4 rounded border border-gray-300" />
                    <label htmlFor="terms" className="text-[14px] text-[#676D75]">I accept the terms & condition</label>
                </div>
                <button type="submit" className="w-full bg-[#3996B5] text-white font-semibold py-3 rounded-[12px] mt-2 hover:bg-[#3186a3] transition-colors text-[20px] leading-[24px] tracking-[0.5px]">Sign Up</button>
            </form>

            <div className="mt-8 text-center text-[20px] leading-[24px] font-light tracking-[0.5px] text-black">
                Have an account?{' '}
                <button type="button" onClick={() => router.push('/login')} className="text-[#3996B5] hover:underline font-semibold">Log In</button>
            </div>
        </div>
    );
};

export default SignUp;