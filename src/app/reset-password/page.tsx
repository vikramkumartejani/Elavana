"use client";
import React, { useState, Suspense } from "react";
import RippleButton from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// Force dynamic rendering (no static export)
export const dynamic = "force-dynamic";

function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "your email";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen md:px-8 px-5">
            <div className="w-full max-w-[420px] mx-auto h-auto bg-white px-5 py-8 sm:p-10 flex flex-col items-center justify-center" style={{ boxShadow: "0px 4px 24px 0px #25252514" }}>
                <h2 className="text-[#252525] text-[24px] sm:text-[32px] font-semibold text-center mb-2 sm:mb-4">Reset Password</h2>
                <p className="text-[#676D75] text-[16px] sm:text-[18px] text-center mb-8">Set a new password for <span className="font-semibold">{email}</span>.</p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-[14px] sm:text-[16px] font-medium text-black">New Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full rounded-lg bg-[#F8FAFC] outline-none px-4 py-3.5 placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] border border-transparent focus:border-[#3A96AF]"
                            autoComplete="new-password"
                            aria-invalid={!!error}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-[14px] sm:text-[16px] font-medium text-black">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full rounded-lg bg-[#F8FAFC] outline-none px-4 py-3.5 placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] border border-transparent focus:border-[#3A96AF]"
                            autoComplete="new-password"
                            aria-invalid={!!error}
                        />
                    </div>
                    {error && <span className="text-red-500 text-[14px]" role="alert">{error}</span>}
                    <RippleButton type="submit" disabled={isSubmitting || success} className="mt-2 border border-[#9CB0C9] rounded-lg h-[44px] text-[#FFFFFF] text-[16px] font-semibold tracking-[0.5px] transition duration-200 bg-[#3A96AF] hover:bg-[#2a7a8f]">
                        {isSubmitting ? "Resetting..." : success ? "Password Reset!" : "Reset Password"}
                    </RippleButton>
                    {success && (
                        <div className="text-green-600 text-center text-[14px] mt-2">
                            Password reset successful! <Link href="/login" className="text-[#3A96AF] underline ml-1">Go to Login</Link>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense>
            <ResetPasswordForm />
        </Suspense>
    );
}