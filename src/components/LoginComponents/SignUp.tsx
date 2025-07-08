"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Password from "@/SvgIcons/Password";
import Link from "next/link";
import RippleButton from "../ui/Button";
import PhoneNumberDropdown from "../ui/PhoneNumberDropdown";
import { Checkbox } from "@/components/ui/CheckBox";

const getInputClassName = () =>
  "w-full rounded-lg sm:rounded-[12px] bg-[#F8FAFC] outline-none px-4 py-[14px] placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] border border-transparent focus:border-[#3A96AF] transition-colors";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div
      className="w-full max-w-[597px] mx-auto h-auto bg-white px-5 py-8 sm:p-10 flex flex-col items-center justify-center"
      style={{ boxShadow: "0px 4px 24px 0px #25252514" }}
    >
      <h2 className="text-[24px] sm:text-[28px] leading-[30px] sm:leading-[38px] tracking-[0.5px] font-bold text-center mb-2 sm:mb-4 text-[#252525]">
        Create your Account
      </h2>
      <p className="text-[#676D75] text-[16px] sm:text-[18px] sm:leading-[22px] tracking-[0.5px] font-light text-center mb-8">
        Start your journey by signing up below.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/verify-otp");
        }}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:w-1/2 gap-2 sm:gap-3">
            <label className="text-[14px] sm:text-[16px] leading-[14px] sm:leading-[20px] font-medium text-black tracking-[0.5px]">
              First Name
            </label>
            <input
              type="text"
              placeholder="Jhon"
              className={getInputClassName()}
            />
          </div>
          <div className="flex flex-col sm:w-1/2 gap-2 sm:gap-3">
            <label className="text-[14px] sm:text-[16px] leading-[14px] sm:leading-[20px] font-medium text-black tracking-[0.5px]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className={getInputClassName()}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <label className="text-[14px] sm:text-[16px] leading-[14px] sm:leading-[20px] font-medium text-black tracking-[0.5px]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className={getInputClassName()}
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 relative">
          <label className="text-[14px] sm:text-[16px] leading-[14px] sm:leading-[20px] font-medium text-black tracking-[0.5px]">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className={getInputClassName() + " pr-12"}
            />
            <button
              type="button"
              className="absolute cursor-pointer right-5 transform top-0.5 translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="sm:w-6 sm:h-6 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#9A9EA6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <Password />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <label className="text-[14px] sm:text-[16px] leading-[14px] sm:leading-[20px] font-medium text-black tracking-[0.5px]">
            Phone Number
          </label>
          <PhoneNumberDropdown />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-[14px] leading-[18px] tracking-[0.5px] text-[#676D75] font-normal select-none cursor-pointer"
          >
            I accept the terms & condition
          </label>
        </div>

        <RippleButton
          type="submit"
          className="mt-2 sm:mt-4 w-full bg-[#3A96AF] hover:bg-[#2a7a8f] text-white font-semibold h-[44px] sm:h-[56px] rounded-lg sm:rounded-[12px] transition duration-200 text-[16px] sm:text-[20px] sm:leading-[24px] tracking-[0.5px]"
        >
          Sign Up
        </RippleButton>
      </form>

      <div className="mt-6 sm:mt-8 text-center text-[14px] sm:text-[20px] sm:leading-[24px] font-light tracking-[0.5px] text-black">
        Have an account?{" "}
        <Link
          href="/login"
          className="text-[#3996B5] hover:underline font-semibold"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
