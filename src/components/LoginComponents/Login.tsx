"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import RippleButton from '../ui/Button';
import { useRouter } from 'next/navigation';
import Password from '@/SvgIcons/Password';
import Link from 'next/link';

interface LoginFormData {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
    submit?: string;
}

interface LoginResponse {
    success: boolean;
    message?: string;
    token?: string;
}

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const loginData: LoginFormData = { email, password };

            console.log('Login data:', loginData);

            // Simulate API call
            const response: LoginResponse = await new Promise(resolve =>
                setTimeout(() => resolve({ success: true, message: 'Login successful!' }), 1000)
            );

            if (response.success) {
                router.push('/customer-home');
            } else {
                setErrors({ submit: response.message || 'Login failed. Please try again.' });
            }

        } catch (error) {
            console.error('Login error:', error);
            setErrors({ submit: 'Login failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors(prev => ({ ...prev, email: undefined }));
        }
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors(prev => ({ ...prev, password: undefined }));
        }
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(prev => !prev);
    };

    const getInputClassName = (hasError: boolean): string => {
        return `w-full rounded-lg sm:rounded-[12px] bg-[#F8FAFC] outline-none px-4 sm:px-5 py-3.5 sm:py-[18px] placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] transition-colors ${hasError
            ? ''
            : 'border border-transparent focus:border-[#3A96AF]'
            }`;
    };

    return (
        <div className="w-full max-w-[597px] mx-auto h-auto bg-white px-5 py-8 sm:p-10 flex flex-col items-center justify-center" style={{ boxShadow: "0px 4px 24px 0px #25252514" }}>
            <h2 className="text-[#252525] text-[24px] sm:text-[40px] sm:leading-[44px] font-semibold text-center mb-2 sm:mb-4">Welcome Back</h2>
            <p className="text-[#676D75] text-[16px] sm:text-[24px] sm:leading-[28px] text-center mb-8">Log in to continue your journey.</p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                {/* Email Field */}
                <div className="flex flex-col gap-2 sm:gap-3">
                    <label htmlFor="email" className="text-[14px] sm:text-[20px] leading-[14px] sm:leading-[16px] font-medium text-black tracking-[0.5px]">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={handleEmailChange}
                        className={getInputClassName(!!errors.email)}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                        <span id="email-error" className="text-red-500 text-[14px]" role="alert">
                            {errors.email}
                        </span>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2 sm:gap-3 relative">
                    <label htmlFor="password" className="text-[14px] sm:text-[20px] leading-[14px] sm:leading-[16px] font-medium text-black tracking-[0.5px]">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={`${getInputClassName(!!errors.password)} pr-12`}
                            autoComplete="current-password"
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? "password-error" : undefined}
                        />
                        <button
                            type="button"
                            className="cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            tabIndex={-1}
                            onClick={togglePasswordVisibility}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <svg className='sm:w-6 sm:h-6 w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="#9A9EA6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            ) : (
                                <Password />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <span id="password-error" className="text-red-500 text-[14px]" role="alert">
                            {errors.password}
                        </span>
                    )}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                    <div className="text-red-500 text-[14px] text-center" role="alert">
                        {errors.submit}
                    </div>
                )}

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                    <Link
                        href="/forgot-password"
                        className="text-[14px] leading-[18px] font-normal text-[#3A96AF] tracking-[0.5px] hover:underline"
                    >
                        Forget Password ?
                    </Link>
                </div>

                {/* Submit Button */}
                <RippleButton
                    type="submit"
                    disabled={isSubmitting}
                    className={`sm:mt-4 border border-[#9CB0C9] rounded-lg sm:rounded-[12px] h-[44px] sm:h-[48px] text-[#FFFFFF] text-[16px] sm:text-[20px] sm:leading-[24px] font-semibold tracking-[0.5px] transition duration-200 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#3A96AF] hover:bg-[#2a7a8f]'
                        }`}
                >
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                </RippleButton>
            </form>

            <div className="mt-6 sm:mt-8 text-center text-[14px] sm:text-[20px] sm:leading-[24px] tracking-[0.5px] text-black">
                Don't have an account?{' '}
                <Link href='/registeration' className="text-[#3A96AF] transition duration-200 hover:underline focus:outline-none">Create account</Link>
            </div>
        </div>
    );
};

export default Login;