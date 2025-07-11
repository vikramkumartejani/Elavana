"use client";
import { FC, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RippleButton from "@/components/ui/Button";
import Image from "next/image";
import PaymentSuccessModal from "./modals/PaymentSuccess";
import PaymentFailedModal from "./modals/PaymentFailed";
import CardPayment from './CardPayment';
import MPesaPayment from './MPesaPayment';
import OrderSummary from './OrderSummary';

interface ServiceProvider {
    name: string;
    role: string;
    avatar: string;
}

interface OrderBy {
    name: string;
    role: string;
    avatar: string;
}

interface MockOrder {
    serviceProvider: ServiceProvider;
    orderBy: OrderBy;
    reviews: number;
    image: string;
}

const mockOrder: MockOrder = {
    serviceProvider: {
        name: "Amy Watson",
        role: "Certified Career Coach",
        avatar: "/assets/profile.svg",
    },
    orderBy: {
        name: "John Doe",
        role: "Customer",
        avatar: "/assets/profile.svg",
    },
    reviews: 288,
    image: "/assets/card-image.png",
};

const Payment: FC = () => {
    const searchParams = useSearchParams();
    const price = Number(searchParams?.get("price")) || 0;
    const quantity = Number(searchParams?.get("quantity")) || 1;
    const title = searchParams?.get("title") || "Service";
    const total = price * quantity;
    const [selectedPayment, setSelectedPayment] = useState<"card" | "mpesa">(
        "mpesa"
    );
    const [phoneNumber, setPhoneNumber] = useState<string>("923456******");
    const [showInstructions, setShowInstructions] = useState<boolean>(false);
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [showFailedModal, setShowFailedModal] = useState<boolean>(false);
    const [mpesaPromptSent, setMpesaPromptSent] = useState(false);

    const handleProceedPayment = () => {
        if (selectedPayment === "mpesa" && !mpesaPromptSent) {
            setMpesaPromptSent(true);
            return;
        }
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            setShowSuccessModal(true);
        } else {
            setShowFailedModal(true);
        }
    };

    const handleResendPaymentRequest = () => {
        setShowFailedModal(false);
        console.log("Resending payment request...");
        setTimeout(() => {
            setShowSuccessModal(true);
        }, 1000);
    };

    return (
        <div>
            <Navbar />
            <div className="w-full px-5 md:px-8">
                <div className="max-w-[1280px] w-full mx-auto pt-6 pb-20">
                    <div>
                        <h1 className="text-[#252525] text-[20px] sm:text-[24px] font-semibold leading-[26px] sm:leading-[31px] mb-2 sm:mb-3">
                            Payment Method
                        </h1>
                        <h3 className="text-[#252525] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[26px] font-normal">
                            Select your payment method
                        </h3>
                    </div>
                    <div className="mt-4 sm:mt-6 flex items-start justify-between lg:flex-row flex-col-reverse gap-6">
                        {/* Card Method */}
                        <div className="lg:max-w-[709px] w-full flex flex-col gap-6">
                            <CardPayment
                                selected={selectedPayment === 'card'}
                                onSelect={() => setSelectedPayment('card')}
                                onProceed={handleProceedPayment}
                            />
                            <MPesaPayment
                                selected={selectedPayment === 'mpesa'}
                                onSelect={() => setSelectedPayment('mpesa')}
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                mpesaPromptSent={mpesaPromptSent}
                                setMpesaPromptSent={setMpesaPromptSent}
                                showInstructions={showInstructions}
                                setShowInstructions={setShowInstructions}
                                handleProceedPayment={handleProceedPayment}
                            />
                        </div>

                        {/* Order Summary Section */}
                        <OrderSummary
                            title={title}
                            mockOrder={mockOrder}
                            price={price}
                            quantity={quantity}
                            total={total}
                        />
                    </div>
                </div>
            </div>
            {/* Payment Success Modal */}
            <PaymentSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                amount={total}
            />
            {/* Payment Failed Modal */}
            <PaymentFailedModal
                isOpen={showFailedModal}
                onClose={() => setShowFailedModal(false)}
                amount={total}
                onResendRequest={handleResendPaymentRequest}
            />
            <Footer />
        </div>
    );
};

export default Payment;
