"use client";
import React, { useState, useEffect, Suspense } from "react";
import RippleButton from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

const RESEND_OTP_TIME = 30; // seconds

function VerifyOtpForm() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendTimer, setResendTimer] = useState(RESEND_OTP_TIME);
  const [resendSuccess, setResendSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email") || "your email";

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!otp.trim() || otp.length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => router.push("/customer-home"), 500);
      // setTimeout(() => router.push("/reset-password?email=" + encodeURIComponent(email)), 1000);
    }, 1000);
  };

  const handleResend = () => {
    setResendTimer(RESEND_OTP_TIME);
    setResendSuccess(true);
    setTimeout(() => setResendSuccess(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:px-8 px-5">
      <div
        className="w-full max-w-[420px] mx-auto h-auto bg-white px-5 py-8 sm:p-10 flex flex-col items-center justify-center"
        style={{ boxShadow: "0px 4px 24px 0px #25252514" }}
      >
        <h2 className="text-[#252525] text-[24px] sm:text-[32px] font-semibold text-center mb-2 sm:mb-4">
          Verify Code
        </h2>
        <p className="text-[#676D75] text-[16px] sm:text-[18px] text-center mb-8">
          Enter the 6-digit code sent to{" "}
          <span className="font-semibold">{email}</span>.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="otp"
              className="text-[14px] sm:text-[16px] font-medium text-black"
            >
              Verification Code
            </label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="w-full rounded-lg bg-[#F8FAFC] outline-none px-4 py-3.5 placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] border border-transparent focus:border-[#3A96AF] tracking-[8px] text-center"
              autoComplete="one-time-code"
              aria-invalid={!!error}
            />
            {error && (
              <span className="text-red-500 text-[14px]" role="alert">
                {error}
              </span>
            )}
          </div>
          <RippleButton
            type="submit"
            disabled={isSubmitting}
            className="mt-2 border border-[#9CB0C9] rounded-lg h-[44px] text-[#FFFFFF] text-[16px] font-semibold tracking-[0.5px] transition duration-200 bg-[#3A96AF] hover:bg-[#2a7a8f]"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </RippleButton>
          <div className="flex flex-col items-center mt-2">
            <button
              type="button"
              onClick={handleResend}
              disabled={resendTimer > 0}
              className={`text-[#3A96AF] text-[14px] font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {resendTimer > 0 ? `Resend code in ${resendTimer}s` : "Resend Code"}
            </button>
            {resendSuccess && (
              <span className="text-green-600 text-[13px] mt-1">Code resent!</span>
            )}
          </div>
          {success && (
            <div className="text-green-600 text-center text-[14px]">Code verified! Redirecting...</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A96AF] mx-auto mb-4"></div>
          <p className="text-[#64748B]">Loading verification page...</p>
        </div>
      </div>
    }>
      <VerifyOtpForm />
    </Suspense>
  );
}