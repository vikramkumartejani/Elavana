import React from "react";
import Image from "next/image";
import RippleButton from "@/components/ui/Button";

interface CardPaymentProps {
    selected: boolean;
    onSelect: () => void;
    onProceed: () => void;
}

const paymentMethods = [
    { src: "/assets/icons/visa.svg", alt: "Visa", label: "Visa" },
    { src: "/assets/icons/stripe.svg", alt: "Stripe", label: "Stripe" },
    { src: "/assets/icons/paypal.svg", alt: "PayPal", label: "PayPal" },
    { src: "/assets/icons/mastercard.svg", alt: "Mastercard", label: "Mastercard" },
    { src: "/assets/icons/gpay.svg", alt: "Google Pay", label: "Google Pay" },
];

const CardPayment: React.FC<CardPaymentProps> = ({ selected, onSelect, onProceed }) => (
    <div
        className={`border ${selected ? "border-[#3A96AF]" : "border-[#E8ECF4]"} rounded-lg p-4 sm:p-5 cursor-pointer transition-colors`}
        onClick={onSelect}
    >
        <div className="flex sm:items-end sm:flex-row flex-col gap-4 sm:gap-6">
            <div className="flex-1 flex items-center gap-2">
                <div className="flex items-center justify-center min-w-[70px] max-w-[70px] h-[70px] bg-[#F5F9FC] rounded-full">
                    <Image
                        src="/assets/icons/card.svg"
                        alt="Card"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-[18px] sm:text-[20px] leading-[18px] sm:leading-[20px] font-semibold text-[#252525]">
                        Card Payment
                    </h3>
                    <p className="mt-1 text-[14px] font-medium leading-[18px] sm:leading-[20px] text-[#64748B]">
                        Do the payment through your Bank card
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                {paymentMethods.map((method) => (
                    <button
                        key={method.alt}
                        type="button"
                        className="cursor-pointer"
                        tabIndex={-1}
                        aria-label={method.label}
                    >
                        <Image src={method.src} alt={method.alt} width={40} height={27} className="object-contain" />
                    </button>
                ))}
            </div>
        </div>
        {selected && (
            <RippleButton
                className="w-full mt-6 sm:mt-8 bg-[#3A96AF] text-white py-3 rounded-lg text-[16px] leading-[20px] font-medium"
                onClick={e => { e.stopPropagation(); onProceed(); }}
            >
                Proceed Payment
            </RippleButton>
        )}
    </div>
);

export default CardPayment;
