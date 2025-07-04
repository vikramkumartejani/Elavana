"use client";
import React, { useState } from "react";
import RippleButton from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!email.trim()) {
            setError("Email is required");
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
            setTimeout(() => router.push("/verify-otp?email=" + encodeURIComponent(email)), 1000);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen md:px-8 px-5">
            <div className="w-full max-w-[420px] mx-auto h-auto  bg-white px-5 py-8 sm:p-10 flex flex-col items-center justify-center" style={{ boxShadow: "0px 4px 24px 0px #25252514" }}>
                <h2 className="text-[#252525] text-[24px] sm:text-[32px] font-semibold text-center mb-2 sm:mb-4">Forgot Password?</h2>
                <p className="text-[#676D75] text-[16px] sm:text-[18px] text-center mb-8">Enter your email to receive a verification code.</p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[14px] sm:text-[16px] font-medium text-black">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full rounded-lg bg-[#F8FAFC] outline-none px-4 py-3.5 placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] border border-transparent focus:border-[#3A96AF]"
                            autoComplete="email"
                            aria-invalid={!!error}
                        />
                        {error && <span className="text-red-500 text-[14px]" role="alert">{error}</span>}
                    </div>
                    <RippleButton type="submit" disabled={isSubmitting} className="mt-2 border border-[#9CB0C9] rounded-lg h-[44px] text-[#FFFFFF] text-[16px] font-semibold tracking-[0.5px] transition duration-200 bg-[#3A96AF] hover:bg-[#2a7a8f]">
                        {isSubmitting ? "Sending..." : "Send Code"}
                    </RippleButton>
                    {success && <div className="text-green-600 text-center text-[14px]">If this email exists, a code has been sent.</div>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword; 