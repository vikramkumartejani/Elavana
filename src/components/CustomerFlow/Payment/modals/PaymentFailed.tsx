"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 flex flex-col items-center">
        <Image
          src="/assets/icons/cancel.svg"
          alt="Success"
          width={120}
          height={120}
          className="object-contain mb-4"
        />

        <h2 className="text-[#E21B1B] text-[24px] leading-[28px] font-semibold mb-1">
          Payment Failed
        </h2>
        <p className="text-[#64748B] text-[16px] leading-[20px] mb-6">
          Oops! Something went wrong with your Payment.
        </p>

        <div className="w-full space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[16px] leading-[20px]">
              Transaction ID
            </span>
            <span className="text-[#252525] text-[16px] leading-[20px] font-medium">
              {transactionId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[16px] leading-[20px]">
              Date
            </span>
            <span className="text-[#252525] text-[16px] leading-[20px] font-medium">
              {date}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[16px] leading-[20px]">
              Time
            </span>
            <span className="text-[#252525] text-[16px] leading-[20px] font-medium">
              {time}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[16px] leading-[20px]">
              Payment Method
            </span>
            <span className="text-[#252525] text-[16px] leading-[20px] font-medium">
              {paymentMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[16px] leading-[20px]">
              Amount Paid
            </span>
            <span className="text-[#E21B1B] text-[16px] leading-[20px] font-medium">
              $ {amount.toFixed(1)} (Failed)
            </span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button
            onClick={onResendRequest}
            className="w-full py-3 border border-[#3A96AF] rounded-[8px] text-[#3A96AF] text-[16px] leading-[20px] font-medium"
          >
            Resend Payment Request
          </button>
          <button
            onClick={handleBackToServices}
            className="w-full py-3 bg-[#3A96AF] text-white rounded-lg text-[16px] leading-[20px] font-medium"
          >
            Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedModal;
