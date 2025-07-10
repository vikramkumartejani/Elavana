"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RippleButton from "@/components/ui/Button";

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const PaymentSuccessModal: FC<PaymentSuccessModalProps> = ({
  isOpen,
  onClose,
  amount,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const transactionId = "we345tyu7888889";
  const date = "7 May, 2023";
  const time = "5:20:59 PM";
  const paymentMethod = "M-PESA Payment";

  const handleViewDetails = () => {
    // Handle view details action
    console.log("View details clicked");
  };

  const handleBackToServices = () => {
    router.push("/service-providers");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl sm:rounded-[24px] max-w-[501px] mx-auto w-full py-5 sm:py-[34px] px-5 sm:px-6 flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-[11.25px] mb-4 sm:mb-6">
          <Image
            src="/assets/icons/success.svg"
            alt="Success"
            width={97}
            height={97}
            className="object-contain"
          />
        </div>

        <h2 className="text-[#14A65B] text-[20px] sm:text-[24px] leading-[22px] sm:leading-[28px] tracking-[0.5px] font-semibold mb-3">
          Payment Successful
        </h2>
        <p className="text-[#252525] text-[14px] sm:text-[16px] leading-[16px] sm:leading-[20px] tracking-[0.5px]">
          Your payment has been done successfully
        </p>

        <div className="bg-[#E8ECF4] h-[2px] w-full my-4 sm:my-6" />

        <div className="w-full space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Transaction ID
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]">
              {transactionId}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Date
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]">
              {date}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Time
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]">
              {time}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Payment Method
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]">
              {paymentMethod}
            </h3>
          </div>
          <div className="w-full h-[2px] bg-[#E8ECF4]" />
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Amount Paid
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-medium tracking-[0.5px]">
              $ {amount.toFixed(1)}
            </h3>
          </div>
        </div>

        <div className="w-full space-y-2 sm:space-y-3">
          <RippleButton
            onClick={handleViewDetails}
            className="w-full border border-[#3A96AF] rounded-lg py-2.5 sm:py-3 text-[#3A96AF] text-[16px] leading-[20px] font-medium tracking-[0.5]"
          >
            View Details
          </RippleButton>
          <RippleButton
            onClick={handleBackToServices}
            className="w-full py-2.5 sm:py-3 bg-[#3A96AF] text-white rounded-lg text-[16px] leading-[20px] font-medium tracking-[0.5]"
          >
            Back to Services
          </RippleButton>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
