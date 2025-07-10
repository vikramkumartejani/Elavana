"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RippleButton from "@/components/ui/Button";

interface PaymentFailedModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onResendRequest: () => void;
}

const PaymentFailedModal: FC<PaymentFailedModalProps> = ({
  isOpen,
  onClose,
  amount,
  onResendRequest,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const transactionId = "we345tyu7888889";
  const date = "7 May, 2025";
  const time = "5:20:59 PM";
  const paymentMethod = "M-PESA Payment";

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
        <Image
          src="/assets/icons/cancel.svg"
          alt="Success"
          width={120}
          height={120}
          className="object-contain w-[100px] sm:w-[120px] mb-4 sm:mb-6"
        />

        <h2 className="text-[#E21B1B] text-[20px] sm:text-[24px] leading-[22px] sm:leading-[28px] tracking-[0.5px] font-semibold mb-3">
          Payment Failed
        </h2>
        <p className="text-[#252525] text-[14px] sm:text-[16px] leading-[16px] sm:leading-[20px] tracking-[0.5px]">
          Oops! Something went wrong with your Payment.
        </p>

        <div className="bg-[#E8ECF4] h-[2px] w-full my-4 sm:my-6" />

        <div className="w-full space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Transaction ID
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-medium">
              {transactionId}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Date
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-medium">
              {date}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Time
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-medium">
              {time}
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Payment Method
            </h3>
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-medium">
              {paymentMethod}
            </h3>
          </div>
          <div className="w-full h-[2px] bg-[#E8ECF4]" />
          <div className="flex justify-between">
            <h3 className="text-[#252525] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] font-normal tracking-[0.5px]">
              Amount Paid
            </h3>
            <h3 className="text-[#ED0006] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-medium">
              $ {amount.toFixed(1)} (Failed)
            </h3>
          </div>
        </div>

        <div className="w-full space-y-2 sm:space-y-3">
          <RippleButton
            onClick={onResendRequest}
            className="w-full py-2.5 sm:py-3 border border-[#3A96AF] rounded-lg text-[#3A96AF] text-[16px] leading-[20px] tracking-[#3A96AF] font-medium"
          >
            Resend Payment Request
          </RippleButton>
          <RippleButton
            onClick={handleBackToServices}
            className="w-full py-2.5 sm:py-3 bg-[#3A96AF] text-white rounded-lg text-[16px] leading-[20px] tracking-[#3A96AF] font-medium"
          >
            Back to Services
          </RippleButton>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedModal;
