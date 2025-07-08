"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 flex flex-col items-center">
        <Image
          src="/assets/icons/success.svg"
          alt="Success"
          width={97}
          height={97}
          className="object-contain mb-4"
        />

        <h2 className="text-[#14A65B] text-[24px] leading-[28px] font-semibold mb-1">
          Payment Successful
        </h2>
        <p className="text-[#252525] text-[16px] leading-[20px] mb-6">
          Your payment has been done successfully
        </p>

        <div className="w-full space-y-[12px] mb-6">
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
            <span className="text-[#252525] text-[16px] leading-[20px] font-medium">
              $ {amount.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button
            onClick={handleViewDetails}
            className="w-full border border-[#3A96AF] rounded-[8px] py-[12px] text-[#3A96AF] text-[16px] leading-[20px] font-medium"
          >
            View Details
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

export default PaymentSuccessModal;
